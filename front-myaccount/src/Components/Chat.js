import React, { Component } from "react";
import "../Components/chat.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

class Chat extends Component {
  constructor() {
    super();
    this.state = { data: "", chat: [], Name: "" };
  }

  componentDidMount() {
    socket.on("chat message", ({ Name, data, date }) => {
      this.setState({
        chat: [...this.state.chat, { Name, data, date }]
      });
    });
  }

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onMessageSubmit = () => {
    const date = new Date(Date.now()).toLocaleString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: "false"
    });
    const { Name, data } = this.state;
    socket.emit("chat message", { Name, data, date });
    this.setState({ msg: "" });
  };

  renderChat() {
    const { chat } = this.state;
    return chat.map(({ Name, data, date }, idx) => (
      <div>
        <div key={idx} className="mens col-12">
          <span style={{ color: "green" }}>{Name} : </span>
          <span className="mensaje">{data}</span>
        </div>
        <p className="fecha">{date}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="Container cont">
        <div class="row">
          <div className="  col-9 izquierda">
            <div className="mp col-8">
              <div className="Container ">
                <div class="row">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Compras</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Detalles de la compra</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Mensaje de la compra #12589631- 03 de Enero 11:14
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-8 ventana">
              <div className="row">
                <div className="col-4  ventanachat mt-3">
                  {" "}
                  {this.renderChat()}
                </div>{" "}
                <hr className="borde" />
              </div>
              <div className="col-8 ventanainput">
                {" "}
                <hr />
                <div className="col-12 texto">
                  <input
                    className=" col-xs-3 col-md-10 txt  "
                    name="data"
                    placeholder="Enter message..."
                    onChange={e => this.onTextChange(e)}
                    value={this.state.data}
                  />{" "}
                  <button
                    onClick={this.onMessageSubmit}
                    className="btn btn-sm btn-primary  "
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-3 derecha">
            <div className=" usuario">
              <div class="row">
                <div className="col-9 a t">
                  vendedor <br />
                  <strong> JHON EDUARDO</strong>
                </div>
              </div>
              <div className="col-9 b t">
                Entregado <br /> Ya pasaron 21 dias ,asumimos que tienes el
                producto.{" "}
              </div>
              <div className="col-9 c t">
                Barra Ejercicio Puerta, Mas Ajustable Que la Gym{" "}
                <p>$35.000 x1u</p> <hr />
              </div>
              <div className="col-9 d t">
                NECESITO AYUDA <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
