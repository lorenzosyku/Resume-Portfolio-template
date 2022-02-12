import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-scroll";

function Dropmenu() {
  return (
    <div>
      <div className="relative-group cursor-pointer fixed top-5 right-5 hover:opacity-75">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-prussian-blue-50 rounded-lg blur-xl opacity-75 hover:cursor-pointer group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

        <Menu as="div" className="relative">
          {({ open }) => (
            <Fragment>
              <Menu.Button className=" z-50 bg-transparent group-hover:text-purple-300 transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Menu.Button>
              <Transition
                show={open}
                enter="transform transition duration-100 ease-in"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-75 ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divede-gray-100 focus:outline-none"
                  static
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link 
                          to="home"
                          smooth = {true}
                          className={`flex items-center px-4 py-2 text-sm ${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-700"
                          }`}
                        >
                          Home
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="about"
                          smooth={true}
                          className={`flex items-center px-4 py-2 text-sm ${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-700"
                          }`}
                        >
                          About
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="resume" 
                          smooth={true}
                          className={`flex items-center px-4 py-2 text-sm ${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-700"
                          }`}
                        >
                          Resume
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="portfolio"
                          smooth={true}
                          className={`flex items-center px-4 py-2 text-sm ${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-700"
                          }`}
                        >
                          Works
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link 
                          to="testimonials"
                          smooth={true}
                          className={`flex items-center px-4 py-2 text-sm ${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-700"
                          }`}
                        >
                          Testimonials
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="contact"
                          smooth={true}
                          className={`flex items-center px-4 py-2 text-sm ${
                            active
                              ? "bg-indigo-500 text-white"
                              : "text-gray-700"
                          }`}
                        >
                          Contact
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Fragment>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Dropmenu;
