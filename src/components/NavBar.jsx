import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    const [scrolled,setScrolled] = useState(false)

    useEffect(()=>{
        // handlling the scroll event
        const handleScrolled = ()=>{
            setScrolled(window.screenY > 10);
        }

        window.addEventListener('scroll',handleScrolled);

        // clean up function
        return ()=>window.removeEventListener('scroll',handleScrolled)
    })
  return (
    <header className={`navbar ${scrolled?'scrolled':'not-scrolled'}`}>
      <div className="inner glass p-6 ">
        <a href="#hero" className="logo">
          Devank | All4One
        </a>

        {/* for desktop only */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* contact button */}
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
