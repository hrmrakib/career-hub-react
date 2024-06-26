import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/applied'>Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to='/statistics'>Statistics</NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar bg-base-100 w-[80%] mx-auto py-5'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {links}
          </ul>
        </div>
        <Link className='text-2xl font-bold hidden lg:flex'>Career Hub</Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{links}</ul>
      </div>

      <div className='navbar-end'>
        <HashLink
          to='#gotofeatured'
          className='bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2 rounded-lg'
        >
          Start Applying
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
