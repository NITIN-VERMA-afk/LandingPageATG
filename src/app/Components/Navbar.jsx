"use client";
import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center ms-5" href="#">
            <Image
              src="/images/HobbyCueLogo.png"
              alt="logo"
              height={50}
              width={50}
            />
            <div className="d-none d-md-flex flex-column ms-2">
              <h1 className="fs-3 fs-md-4">Hobbycue</h1>
              <p className="fs-6 fs-md-5">your hobby,your community</p>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex mx-auto my-2 my-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here ..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <CiSearch />
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MdOutlineExplore /> Explore
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      drama
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      sci-fi
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <CiStar /> Hobbies
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Reading
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      cooding
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      gaming
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-flex align-items-center">
                <ul className="list-unstyled d-flex justify-content-center align-items-center m-0">
                  <li className="mx-2">
                    <FaBookmark />
                  </li>
                  <li className="mx-2">
                    <FaBell />
                  </li>
                  <li className="mx-2">
                    <FaCartShopping />
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    src="/images/Avatar1.png"
                    alt="logo"
                    height={50}
                    width={50}
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      profile1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      profile2
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      profile3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
