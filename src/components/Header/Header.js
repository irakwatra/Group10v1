import React from "react";
import { Link } from "gatsby"; //to avoid refreshing on each click
import {
  House,
  Person,
  Basket,
  CupStraw,
  Basket3,
  Pen,
  FileMedical,
} from "react-bootstrap-icons";

const Header = () => {
  return (
    <div>
      <h1 className="back1 display-5 fw-bold lh-1 py-5 m-0 text-center" fill="">
        Banasthali Web Shop
      </h1>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="navbar-brand"></div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end mx-auto me-1">
                <Link to="/">
                  <button type="button" class="btn btn-secondary">
                    Home
                    <House className="mx-auto" size="30" fill="#ffff" />
                  </button>
                </Link>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/foodcorner">
                    Food Corner
                    <CupStraw className="mx-auto" size="30" fill="#ffff" />
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/mukteshwari">Mukteshwari</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/annapurna">Annapurna</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/spicybite">Spicy Bite</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/shanus">Shanus</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/grocery">
                    Grocery
                    <Basket3 className="mx-auto" size="30" fill="#ffff" />
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/agarwal">Agarwal General Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/shreeshakti">Shree Shakti General Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/rohit">Rohit Greens And Juice Point</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/mukteshwarinewmarket">
                        Mukteshwari General Store
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/stationary">
                    Stationary
                    <Pen className="mx-auto" size="30" fill="#ffff" />
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/bbc">Banasthali Book Center</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/dks">D. K. Stationary</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/pharmacy">
                    Pharmacy
                    <FileMedical className="mx-auto" size="30" fill="#ffff" />
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/bhadauriyamed">Bhadauriya Medical Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/maheshmed">Mahesh Medical Store</Link>
                    </a>
                  </li>
                </ul>
              </div>

              {/* <li class="btn text-light text-decoration-none">
                <Link class="text-warning text-decoration-none" to="/blog">
                  Blog
                </Link>
              </li>{" "} */}
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div class="d-grid gap-2 d-md-flex justify-content-md-end me-1">
              <Link to="/signup">
                <button type="button" class="btn btn-secondary">
                  My Account{" "}
                  <Person className="mx-auto" size="30" fill="#ffff" />
                </button>
              </Link>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" class="btn btn-secondary">
                CART <Basket className="mx-auto" size="30" fill="#ffff" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
