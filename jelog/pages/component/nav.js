export default function nav() {
  return (
    <nav className="nav_background">
      <section className="nav_layout">
        <div>
          <a>
            <p>logo</p>
          </a>
        </div>
        <div>
          <p className="nav_title">Jelog</p>
        </div>
        <div className="flex_row">
          <div className="nav_dropbox">
            <p>dropbox</p>
            {/* <div className="hidden">
            <ul >
              <li>menu_1</li>
              <li>menu_2</li>
              <li>menu_3</li>
            </ul>
          </div> */}
          </div>
          <div>
            <a>
              <p>light</p>
            </a>
          </div>
        </div>
      </section>
    </nav>
  );
}
