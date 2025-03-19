import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

import "./NavigationBar.css";

class NavigationBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">GeoStunting</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (!item.submenu) {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            } else {
              return (
                <li className="nav-item dropdown" key={index}>
                  <Link
                    className={item.cName + " dropdown-toggle"}
                    to={item.url}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                  <li className="dropdown-menu-custom">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link className="dropdown-item-custom" to={subItem.url}>
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </li>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
