import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-info mb-4 nav-back'>
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

      <style jsx>{`
        .nav-back {
          background-color: teal;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
