import React, { Component } from "react";
import "./chat.css";

class Comprador extends Component {
  render() {
    return (
      <div className="Container cont">
        <div className=" col col-3 derecha">
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
    );
  }
}

export default Comprador;
