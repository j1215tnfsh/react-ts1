import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

interface Props {}

const MainContent = (props: Props) => {
  const maintxt = useRef(null);
  useEffect(() => {
    gsap.from(maintxt.current, { duration: 2, y: '+=100', ease: 'elastic' });
    gsap.to(maintxt.current, {
      scrollTrigger: {
        trigger: maintxt.current,
        // start: 'top center',
        // end: 'top 100px',
        markers: true,
      },
      duration: 3,
      rotation: 360,
      ease: 'none',
    });
  }, []);
  return (
    <>
      <h1 ref={maintxt} className='text-center'>
        Main Content
      </h1>
      <div>1</div>
    </>
  );
};

export default MainContent;
