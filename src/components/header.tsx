'use-client';
export default function Header() {
  return (
    <header className="p-4 container flex justify-between">
      <p className="text-8x1">VICTOR ABRAHAM</p>
      <div className="flex flex-auto justify-end dd-container">
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
