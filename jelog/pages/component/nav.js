import { useRef } from "react";
export default function nav() {
  const lightbtn = useRef("");
  const darkbtn = useRef("");

  const lightModeBtn = () => {
    colorThemeHander("dark");
  };

  const darkModeBtn = () => {
    colorThemeHander("light");
  };

  const colorThemeHander = (theme) => {
    document.body.classList = theme;
  };

  return (
    <nav className="nav_background">
      <section className="nav_layout">
        <div>
          <a>
            <img src="/img/favicon.png" alt="logo" />
          </a>
        </div>
        <div>
          <p className="nav_title">Jelog</p>
        </div>
        <div className="flex_row">
          <div className="nav_dropbox">
            <p className="nav_dropbox_title">dropbox ▼</p>
            <div>
              <a>menu_1</a>
              <a>menu_2</a>
              <a>menu_3</a>
            </div>
          </div>
          <div>
            <button ref={lightbtn} onClick={lightModeBtn} className="">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6C14 7.69124 13.2996 9.21977 12.1744 10.3098C11.9714 10.5064 11.8152 10.7107 11.7213 10.9287L10.9592 12.6978C10.8802 12.8812 10.6997 13 10.5 13H5.5C5.30032 13 5.11979 12.8812 5.04079 12.6978L4.27873 10.9287C4.18481 10.7107 4.02858 10.5064 3.82563 10.3098C2.7004 9.21977 2 7.69124 2 6Z"
                  fill="black"
                />
                <path
                  d="M5 14.5C5 14.2239 5.22386 14 5.5 14H10.5C10.7761 14 11 14.2239 11 14.5C11 14.7761 10.7761 15 10.5 15L10.2764 15.4472C10.107 15.786 9.76074 16 9.38197 16H6.61803C6.23926 16 5.893 15.786 5.72361 15.4472L5.5 15C5.22386 15 5 14.7761 5 14.5Z"
                  fill="black"
                />
              </svg>
            </button>
            <button ref={darkbtn} onClick={darkModeBtn} className="">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6C14 7.69124 13.2996 9.21977 12.1744 10.3098C11.9714 10.5064 11.8152 10.7107 11.7213 10.9287L10.9592 12.6978C10.8802 12.8812 10.6997 13 10.5 13C10.7761 13 11 13.2239 11 13.5C11 13.7761 10.7761 14 10.5 14C10.7761 14 11 14.2239 11 14.5C11 14.7761 10.7761 15 10.5 15L10.2764 15.4472C10.107 15.786 9.76074 16 9.38197 16H6.61803C6.23926 16 5.893 15.786 5.72361 15.4472L5.5 15C5.22386 15 5 14.7761 5 14.5C5 14.2239 5.22386 14 5.5 14C5.22386 14 5 13.7761 5 13.5C5 13.2239 5.22386 13 5.5 13C5.30032 13 5.11979 12.8812 5.04079 12.6978L4.27873 10.9287C4.18481 10.7107 4.02858 10.5064 3.82563 10.3098C2.7004 9.21977 2 7.69124 2 6ZM8 1C5.23858 1 3 3.23858 3 6C3 7.40952 3.58259 8.68211 4.52143 9.5916C4.784 9.84596 5.03464 10.1559 5.19714 10.5331L5.82903 12H10.171L10.8029 10.5331C10.9654 10.1559 11.216 9.84596 11.4786 9.5916C12.4174 8.68211 13 7.40953 13 6C13 3.23858 10.7614 1 8 1Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
}
