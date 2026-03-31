
const NavBar = () => {
  return (
    <div className="navbar w-11/12 md:w-9/12 mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl md:text-3xl text-[#4F39F6]">
          <h1>DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 font-semibold">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3 md:gap-5">
        <a>Login</a>
        <a className="btn bg-[#4F39F6] rounded-full text-white ">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;