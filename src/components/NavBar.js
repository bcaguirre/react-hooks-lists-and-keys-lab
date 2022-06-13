import React from "react";

//NavBar
//In the NavBar component, 
//there is an array with three strings representing each link on the page. 
//For each of those strings, create an <a> tag that looks like this:

//<a href="#home">home</a>
//Make sure each <a> element also gets a unique key prop.

function NavBar() {
  const links = ["home", "about", "projects"];
  

  return ( 
  <nav>
    {links.map((link) => {
      return (
        <a key={link} href={link}>{link}</a>
      );
    })}
    {/*<a key={links} href="#home">home</a>
    <a key={links} href="#about">about</a>
    <a key={links} href="#projects">projects</a>
    {/* display an <a> tag for each link here*/}
  </nav>
  );
  
}



export default NavBar;
