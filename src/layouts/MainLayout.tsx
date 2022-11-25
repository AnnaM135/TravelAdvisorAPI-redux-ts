import { Link, Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <nav className="h-[80px] flex justify-between items-center px-5 bg-cyan-700 text-white">
        <span className="font-bold">TripAdvisor Flight Api</span>

        <ul className="flex rounded border px-5 py-2">
          <li className="mr-5">
            <Link to="home"> Home</Link>
          </li>
          <li className="mr-5">
            <Link to="about"> About</Link>
          </li>
          <li className="mr-5">
            <Link to="/">Log In</Link>
          </li>
          <li className="mr-5">
            <Link to="signup"> Sign Up</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
