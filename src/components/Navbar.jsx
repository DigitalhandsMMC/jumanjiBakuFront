import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Nav>
      <div className="brandContainer">
        <a className="logo">Jumanji</a>
        <div className="toggle"></div>
      </div>
      <div className="links">
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;

  .brandContainer {
    margin: 0 2rem;

    .logo {
      font-size: 2.2rem;
      letter-spacing: 0.2rem;
      font-weight: 600;
      background: -webkit-linear-gradient(
        var(--primary-light),
        var(--primary),
        var(--yellow)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .toggle {
      display: none;
    }
  }

  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;

      .active {
        a {
          border-bottom: 0.2rem solid var(--primary-light);
        }
      }

      li {
        a {
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
    }
  }
`;
