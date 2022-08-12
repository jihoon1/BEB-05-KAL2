import "./styles/footer.css";
import React from "react";

function Footer({ data }) {
  return (
    <div className="footer">
      <div class="MemberBox">
        <h3>Team KAL2</h3>
        {/* <ul>
            <li>안병현</li>
            <li>이효정</li>
            <li>이호성</li>
            <li>김지훈</li>
        </ul> */}
      </div>
      <span>Copyright 2020. @KAL2 Teams. All Rights Reserved.</span>
    </div>
  );
}

export default Footer;
