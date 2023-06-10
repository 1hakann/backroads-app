import React from 'react'
import logo from '../images/logo.svg'
import {pageLinks, socialLinks} from '../data'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((data) => {
              return (
                <li key={data.id}>
                  <a href={data.href} className="nav-link">
                    {data.text}
                  </a>
                </li>
                )
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((data) => {
              const {id, href, icon} = data
              return (
                <li key={id}>
                  <a
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
  )
}
