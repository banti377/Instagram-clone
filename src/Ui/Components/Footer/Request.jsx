import React from "react";
import "./Home.css";

export default function Request() {
  return (
    <div className="request-container">
      {/* ================(1)Account Details================ */}
      <div className="account-details">
        <div className="suggestion">
          <span className="user-info">
            <img src="user.jpg" alt="User" />
            <div>
              <h5>Noteworthy technology</h5>
              <p>Noteworthy_tech</p>
            </div>
          </span>
          <span className="action-links">
            <a href="#">Switch</a>
          </span>
        </div>
      </div>

      {/* ================(2)OtherAccount Details================ */}
      <div className="other-accounts">
        <span className="section-title">
          <h5>Suggested for you</h5>
          <a href="#">See All</a>
        </span>

        <div className="suggestions">
          {/* Repeat this div block for each suggestion */}
          <div className="suggestion">
            <span className="user-info">
              <img src="user.jpg" alt="User" />
              <div>
                <h5>Noteworthy technology</h5>
                <p>Noteworthy_tech</p>
              </div>
            </span>
            <span className="action-links">
              <a href="#">Follow</a>
            </span>
          </div>
          <div className="suggestion">
            <span className="user-info">
              <img src="user.jpg" alt="User" />
              <div>
                <h5>Noteworthy technology</h5>
                <p>Noteworthy_tech</p>
              </div>
            </span>
            <span className="action-links">
              <a href="#">Follow</a>
            </span>
          </div>
          <div className="suggestion">
            <span className="user-info">
              <img src="user.jpg" alt="User" />
              <div>
                <h5>Noteworthy technology</h5>
                <p>Noteworthy_tech</p>
              </div>
            </span>
            <span className="action-links">
              <a href="#">Follow</a>
            </span>
          </div>
          <div className="suggestion">
            <span className="user-info">
              <img src="user.jpg" alt="User" />
              <div>
                <h5>Noteworthy technology</h5>
                <p>Noteworthy_tech</p>
              </div>
            </span>
            <span className="action-links">
              <a href="#">Follow</a>
            </span>
          </div>
          <div className="suggestion">
            <span className="user-info">
              <img src="user.jpg" alt="User" />
              <div>
                <h5>Noteworthy technology</h5>
                <p>Noteworthy_tech</p>
              </div>
            </span>
            <span className="action-links">
              <a href="#">Follow</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
