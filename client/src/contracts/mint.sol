    //SPDX-License-Identifier: Unlicense
    pragma solidity ^0.8.0;
    pragma experimental ABIEncoderV2;

    import "hardhat/console.sol";
    import "@openzeppelin/contracts/access/AccessControl.sol";
    import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
    import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
    import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
    import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

    contract LazyNFT is ERC721URIStorage, EIP712, AccessControl {
        using ECDSA for bytes32;

        bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

        mapping(address => uint256) pendingWithdrawals;

        constructor(address payable minter)
            ERC721("LazyNFT", "LAZ")
            EIP712("LazyNFT-Voucher", "1")
        {
            _setupRole(MINTER_ROLE, minter);
        }

        /// @notice 아직 블록체인에 기록되지 않은 채굴되지 않은 NFT를 나타낸다. 서명된 바우처는 상환 기능을 사용하여 실제 NFT에 대해 상환될 수 있습니다
        struct NFTVoucher {
            /// @notice 교환할 토큰의 ID를 표시합니다. 고유해야 합니다.이 ID를 가진 다른 토큰이 이미 존재하는 경우, 상환 기능이 되돌립니다.
            uint256 tokenId;
            /// @notice NFT의 초기 판매를 기꺼이 받아들이는 최소 가격 (wei)
            uint256 minPrice;
            /// @notice 이 토큰과 연결할 메타데이터 URI입니다.
            string uri;
        }

        /// @notice NFT Voucher 정보로 민팅 및 전송.
        /// @param redeemer 성공 시 NFT를 받을 계정의 주소
        /// @param voucher 지급할 NFT를 설명하는 NFT Voucher.
        /// @param signature NFT 작성자가 작성한 바우처의 EIP712 서명
        function redeem(
            address redeemer,
            NFTVoucher calldata voucher,
            bytes memory signature
        ) public payable returns (uint256) {
            // 서명이 유효한지 확인하고 서명자의 주소를 받아온다
            address signer = _verify(voucher, signature);
            // 서명자가 NFT를 발행할 권한이 있는지 확인합니다.
            require(
                hasRole(MINTER_ROLE, signer),
                "Signature invalid or unauthorized"
            );
            // 상환자가 구매자의 비용을 충당할 수 있을 만큼 지불하고 있는지 확인한다.
            require(msg.value >= voucher.minPrice, "Insufficient funds to redeem");

            // 먼저 토큰을 서명자에게 할당하여 온 체인에 대한 증빙을 설정합니다.
            _mint(signer, voucher.tokenId);
            _setTokenURI(voucher.tokenId, voucher.uri);

            // 구매자에게 토큰을 양도합니다.
            _transfer(signer, redeemer, voucher.tokenId);

            // 서명인의 출금 잔고에 지불을 기록합니다.
            pendingWithdrawals[signer] += msg.value;

            return voucher.tokenId;
        }

        function withdraw() public {
            require(
                hasRole(MINTER_ROLE, msg.sender),
                "Only authorized minters can withdraw"
            );

            // IMPORTANT: 발송인을 지불 주소로 캐스팅하는 것은 민터 역할의 모든 구성원이 지불 주소인 경우에만 안전합니다.
            address payable receiver = payable(msg.sender);

            uint256 amount = pendingWithdrawals[receiver];
            // 재진입 공격 방지를 위한 이체 전에 계정 금액을 0으로 만듭니다.
            pendingWithdrawals[receiver] = 0;
            receiver.transfer(amount);
        }

        function availableToWithdraw() public view returns (uint256) {
            return pendingWithdrawals[msg.sender];
        }

        /// @notice EIP712 형식 데이터 해시 규칙을 사용하여 준비된 지정된 NFTVoucher의 해시를 반환합니다.
        /// @param NFTVoucher 해싱할 바우처
        function _hash(NFTVoucher calldata voucher)
            internal
            view
            returns (bytes32)
        {
            return
                _hashTypedDataV4(
                    keccak256(
                        abi.encode(
                            keccak256(
                                "NFTVoucher(uint256 tokenId,uint256 minPrice,string uri)"
                            ),
                            voucher.tokenId,
                            voucher.minPrice,
                            keccak256(bytes(voucher.uri))
                        )
                    )
                );
        }

        /// @notice 지정된 NFTVoucher에 대한 서명을 확인하고 서명자의 주소를 반환.
        /// @dev 서명이 잘못된 경우 되돌립니다. 서명인이 NFT를 민팅 할 수 있는 권한이 있는지 확인하지 않음.
        /// @param voucher 발행되지 않은 NFT를 설명하는 NFT Voucher입니다.
        /// @param signature 지정된 바우처의 EIP712 서명입니다.
        function _verify(NFTVoucher calldata voucher, bytes memory signature)
            internal
            view
            returns (address)
        {
            bytes32 digest = _hash(voucher);
            return digest.toEthSignedMessageHash().recover(signature);
        }

        function supportsInterface(bytes4 interfaceId)
            public
            view
            virtual
            override(AccessControl, ERC721)
            returns (bool)
        {
            return
                ERC721.supportsInterface(interfaceId) ||
                AccessControl.supportsInterface(interfaceId);
        }
    }
