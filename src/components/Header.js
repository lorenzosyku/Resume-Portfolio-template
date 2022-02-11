import TypeWriter from "react-typewriter";
import Dropmenu from "./Dropmenu";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function Header({ data }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./coding.json"),
    });
  }, []);

  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <img className="h-6 w-6" src={network.source} alt="" />
          </a>
        </li>
      );
    });
  }
  return (
    <header className="bg-white" id="home">
      <div className="md:hidden">
        <Dropmenu />
      </div>

      <nav className="hidden md:flex justify-center fixed p-5 h-20 w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 z-10 shadow-md" id="nav-wrap">

        
        <ul id="nav" className="fixed max-w-4xl mx-auto flex justify-center space-x-5 text-white ">
          <li className="">
            <a
              className="cursor-pointer shadow-lg p-2 rounded-lg bg-cyan-600"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer shadow-lg p-2 rounded-lg bg-cyan-600"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer shadow-lg p-2 rounded-lg bg-cyan-600"
              href="#resume"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer shadow-lg p-2 rounded-lg bg-cyan-600"
              href="#portfolio"
            >
              Works
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer shadow-lg p-2 rounded-lg bg-cyan-600"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer shadow-lg p-2 rounded-lg bg-cyan-600"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="md:grid grid-cols-2">
        <div className="flex-col px-5">
          <div className="p-5 max-w-5xl mx-auto shadow-lg mt-40 mb-20">
            <h1 className="text-3xl font-bold">
              <TypeWriter typing={0.5}>
                {name ? `👋 I'm ${name}.` : null}
              </TypeWriter>
            </h1>
            <h3 className="italic p-3">
              Based in {city}. <span>{occupation}</span>. {description}.
            </h3>
            <hr />
            <div className="flex justify-center py-5">
              <ul className="flex space-x-2">{networks}</ul>
            </div>
          </div>
        </div>
        <div className="h-80 mb-20 mt-20" ref={container}></div>
      </div>
    </header>
  );
}

export default Header;
