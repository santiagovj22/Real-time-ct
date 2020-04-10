import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./account.scss";
import Header from "../Nav";
import Footer from "../Footer";
import Buys from "./buys";
import Resume from "./resume";
import Facture from "./facture";
import Configure from "./configuration";
import { isMobile } from "react-device-detect";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      render: "resume",
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showSettings(event) {
    event.preventDefault();
  }

  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }

  _renderSubComp() {
    switch (this.state.render) {
      case "compras":
        return <Buys />;
      case "resume":
        return <Resume />;
      case "facture":
        return <Facture />;
      case "configure":
        return <Configure />;
    }
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    if (isMobile) {
      return (
        <div>
          <Header />
          <div className="contain-acc">
            <div className="contain-acc_wrapper">
              <Menu>
                <a id="home" className="menu-item" href="/infoaccount">
                  Mi cuenta
                </a>
                <a
                  id="about"
                  className="menu-item"
                  onClick={this.handleClick.bind(this, "resume")}
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i> Resumen
                </a>
                <a
                  id="contact"
                  className="menu-item"
                  onClick={this.handleClick.bind(this, "compras")}
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                  Compras
                </a>
                <a
                  onClick={this.handleClick.bind(this, "facture")}
                  className="menu-item--small"
                >
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                  Facturación
                </a>
                <a onClick={this.handleClick.bind(this, "configure")}>
                  <i className="fas fa-cog"></i> Configuración
                </a>
              </Menu>
              <div className="leftside-infomb">
                <button
                  onClick={this.handleClick.bind(this, "resume")}
                  className="contain-acc_menu-item-mb"
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i>{" "}
                </button>
                <button
                  onClick={this.handleClick.bind(this, "compras")}
                  className="contain-acc_menu-item-mb"
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                </button>
                <button
                  onClick={this.handleClick.bind(this, "facture")}
                  className="contain-acc_menu-item-mb"
                >
                  <i class="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                </button>
                <button
                  onClick={this.handleClick.bind(this, "configure")}
                  className="contain-acc_menu-item-mb"
                >
                  <i className="fas fa-cog"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className="contain-acc">
            <div className="contain-acc_wrapper">
              <Menu>
                <a id="home" className="menu-item" href="/infoaccount">
                  Mi cuenta
                </a>
                <a
                  id="about"
                  className="menu-item"
                  onClick={this.handleClick.bind(this, "resume")}
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i> Resumen
                </a>
                <a
                  id="contact"
                  className="menu-item"
                  onClick={this.handleClick.bind(this, "compras")}
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                  Compras
                </a>
                <a
                  onClick={this.handleClick.bind(this, "facture")}
                  className="menu-item--small"
                >
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                  Facturación
                </a>
                <a onClick={this.handleClick.bind(this, "configure")}>
                  <i className="fas fa-cog"></i> Configuración
                </a>
              </Menu>
            </div>
            <div className="contain-acc_right-panel">
              <div className="contain-acc_left-panel">
                <div style={{ height: "652px" }}>
                  <nav className="account-info">
                    <button
                      id="home"
                      className="contain-acc_menu-item"
                      href="/"
                    >
                      Mi cuenta
                    </button>
                    <button
                      onClick={this.handleClick.bind(this, "resume")}
                      className="contain-acc_menu-item"
                    >
                      <i className="fa fa-file-text" aria-hidden="true"></i>{" "}
                      Resumen
                    </button>
                    {/* <button
                      onClick={this.handleClick.bind(this, "compras")}
                      className="contain-acc_menu-item"
                    >
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                      Compras
                    </button> */}
                    <button
                      onClick={this.showMenu}
                      className="contain-acc_menu-item"
                    >
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                      Compras
                    </button>
                    {this.state.showMenu ? (
                      <div
                        className="menu"
                        ref={element => {
                          this.dropdownMenu = element;
                        }}
                      >
                        <button> Menu item 1 </button>
                        <button> Menu item 2 </button>
                        <button> Menu item 3 </button>
                      </div>
                    ) : null}

                    <button
                      onClick={this.handleClick.bind(this, "facture")}
                      className="contain-acc_menu-item"
                    >
                      <i class="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                      Facturación
                    </button>
                    <button
                      onClick={this.handleClick.bind(this, "configure")}
                      className="contain-acc_menu-item"
                    >
                      <i className="fas fa-cog"></i> Configuración
                    </button>
                  </nav>
                </div>
              </div>
              <div style={{ marginLeft: "40px", height: "800px" }}>
                {this._renderSubComp()}
              </div>
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default Account;
