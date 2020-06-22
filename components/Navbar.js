import Link from "next/link";

const Navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand navbar-dark bg-dark mb-4'>
        <div className='container'>
          <Link href='/'>
            <a className='navbar-brand'>Mediavil</a>
          </Link>
        </div>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link href='/about'>
                <a className='nav-link'>About</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='contact'>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
