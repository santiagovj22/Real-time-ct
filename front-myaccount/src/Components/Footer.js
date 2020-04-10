import React, { Component } from "react";
import app from "./resource/app.png";
import { isMobile } from "react-device-detect";
import logo from "./resource/logo.png";
import { Modal, ModalContent } from "../Components/Modal/Modal";

class Footer extends Component {
  state = {
    showModal: null
  };

  render() {
    const isModal = this.state.showModal;
    const modalTextBanks = (
      <div>
        <h2 className="c-modal__subtitle">Lunes a Viernes: 7:00AM - 5:30PM</h2>
        <h2 className="c-modal__subtitle">Sábados: 8:00AM - 4:00PM</h2>
      </div>
    );
    const textBankTransf = (
      <div className="c-modal__subtitle">
        {" "}
        <p>Contáctenos</p>
        <p>(4) 604 6458</p>
        <p>01 8000 186464</p>
        <p>(Línea gratuita)</p>
        <p> +57 (1) 5800817 WhatsApp</p>
      </div>
    );

    if (isMobile) {
      return (
        <div className="wp-footer">
          <div className="nav-footer-mobile">
            <div className="nav-footer-info-mobile">
              <div className="logo-footer">
                <img src={logo} alt="logo footer" />
              </div>
              <a href="https://www.kiero.co/app.html">
                <div className="dw-footer">
                  <p>Descarga nuestra app para comprar!</p>
                </div>
              </a>
            </div>
          </div>
          <div className="nav-links-footer-mobile">
            <div className="nav-link-footer">
              <a href="https://www.kiero.co/login">Ingresa</a>
              <a href="https://www.kiero.co/terms.html">
                Términos y condiciones
              </a>
              <a href="https://www.kiero.co/registration">Crea tu cuenta</a>
              <a href="https://www.kiero.co/privacidad.html">
                Política de privacidad
              </a>
              <a href="https://www.kiero.co/category">Categorias</a>
              <button>Acerca de nosotros</button>
              <a href="https://www.kiero.co/help.html">Ayuda / PQR</a>
              {isModal === "modal-one" && (
                <Modal>
                  <ModalContent
                    show={this.state.showModal}
                    handleClose={() => this.setState({ showModal: null })}
                    modalTitle="Contáctenos"
                  >
                    {modalTextBanks}
                    {textBankTransf}
                  </ModalContent>
                </Modal>
              )}
              <button onClick={() => this.setState({ showModal: "modal-one" })}>
                Contáctenos
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="nav-footer">
        <div className="nav-footer-info">
          <div className="wrapper-info">
            <nav className="nav-info">
              <h1>© 2019 Kiero. Todos los derechos reservados.</h1>
              <button>Acerca de nosotros</button>
              <a href="https://www.kiero.co/terms.html">
                Términos y condiciones
              </a>
              <a href="https://www.kiero.co/privacidad.html">
                Política de privacidad
              </a>
              {isModal === "modal-one" && (
                <Modal>
                  <ModalContent
                    show={this.state.showModal}
                    handleClose={() => this.setState({ showModal: null })}
                    modalTitle="Contáctenos"
                  >
                    {modalTextBanks}
                    {textBankTransf}
                  </ModalContent>
                </Modal>
              )}
              <button onClick={() => this.setState({ showModal: "modal-one" })}>
                Contáctenos
              </button>
              <a href="https://www.kiero.co/help.html">Ayuda / PQR</a>
            </nav>
          </div>
          <div className="wrapper-app">
            <a className="hiperVi" href="https://www.kiero.co/app.html">
              <img src={app} alt="app kiero" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
