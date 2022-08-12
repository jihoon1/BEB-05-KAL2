import React from "react";
import { FiTwitter } from "react-icons/fi";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="primary">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <FiTwitter />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Stay in the loop</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start="12">
                <MDBInput
                  contrast
                  type="email"
                  label="Your email"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Sing up
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Marketplace</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    All NFTs
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Solana NFTs
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Art
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Collectibles
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">My Account</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Favorites
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Watchlist
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    My Collections
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Resources</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Platform Status
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Gas-Free Marketplace
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Newsletter
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Company</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Ventures
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Grants
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 CodeStates/
        <a
          className="text-white"
          href="https://github.com/codestates/BEB-05-KAL2"
        >
          BEB-05-KAL2
        </a>
      </div>
    </MDBFooter>
  );
}

