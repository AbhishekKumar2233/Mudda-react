import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <div className="nav-content">
          <a className="logo" href="Mudda">
            Mudda
          </a>
          <nav className="menu">
            <ul>
              <li className="item active">
                <a href="/">
                  <div className="icon">
                    <svg
                      viewBox="0 0 28 28"
                      class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
                      height="28"
                      width="28"
                    >
                      <path d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"></path>
                    </svg>
                  </div>
                  <span className="text">Home</span>
                </a>
              </li>
              <li className="item">
                <a href="/">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/000000/external-worldwide-trending-of-web-content-isolated-on-a-whie-background-seo-filled-tal-revivo.png"
                      alt=""
                    />
                  </div>
                  <span className="text">Trending</span>
                </a>
              </li>
              <li className="item">
                <a href="/">
                  <div className="icon">
                    <svg
                      viewBox="0 0 28 28"
                      class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
                      height="28"
                      width="28"
                    >
                      <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
                    </svg>
                  </div>
                  <span className="text">Groups</span>
                </a>
              </li>
              <li className="item">
                <a href="/">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-notification-user-interface-kmg-design-detailed-outline-kmg-design.png"
                      alt=""
                    />
                  </div>
                  <span className="text">Notification</span>
                </a>
              </li>
              <li className="item">
                <a href="/">
                  <div className="icon">
                    <img
                      src="https://img.icons8.com/ios/50/000000/user--v1.png"
                      alt=""
                    />
                  </div>
                  <span className="text">Profile</span>
                </a>
              </li>
              <li className="item">
                <a href="/">
                  <div className="icon menubtn">
                    <img
                      alt="svgImg"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDAgNy41IEwgMCAxMi41IEwgNTAgMTIuNSBMIDUwIDcuNSBaIE0gMCAyMi41IEwgMCAyNy41IEwgNTAgMjcuNSBMIDUwIDIyLjUgWiBNIDAgMzcuNSBMIDAgNDIuNSBMIDUwIDQyLjUgTCA1MCAzNy41IFoiPjwvcGF0aD48L3N2Zz4="
                    />
                  </div>
                  <span className="text">Menu</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}
