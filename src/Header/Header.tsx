import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

interface Props {}

const Header = (props: Props) => {
  const brand = useRef(null);
  useEffect(() => {
    gsap.from(brand.current, { duration: 2, x: '+=100', ease: 'elastic' });
  }, []);
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container'>
        <span ref={brand} className='navbar-brand'>
          NavBar
        </span>
      </div>
    </nav>
  );
};

export default Header;
