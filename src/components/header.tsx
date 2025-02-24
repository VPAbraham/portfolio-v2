export default function Header() {
  return (
    <header className="container grid grid-cols-2">
      <h3 className="">VICTOR ABRAHAM</h3>
      <div className="dd-container">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Menu
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-gray-50 menu rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
