import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//logo
import papeleria from './../../assets/images/papeleria-planos-contratos-y-archivos.jpg';
import icono1 from './../../assets/images/icon_home_1.svg';
import icono2 from './../../assets/images/icon_home_2.svg';
import icono3 from './../../assets/images/icon_home_3.svg';
import icono4 from './../../assets/images/icon_home_4.svg';
import count from './../../assets/images/time_panel.svg';

const ico1 = {
    backgroundImage: `url(${icono1})`
};
const ico4 = {
    backgroundImage: `url(${icono2})`
};
const ico3 = {
    backgroundImage: `url(${icono3})`
};
const ico2 = {
    backgroundImage: `url(${icono4})`
};
const contador = {
    backgroundImage: `url(${count})`
};

export class Description extends Component {
  render() {
    return (
      <div>
        {/*<!--Description -->*/}
        <div className="container margin_60">

            <div className="main_title">
                <h2 className="nomargin_top" style={{paddingTop:0}}>Dinos a dónde ir</h2>
                <p>
                    Con cuatro sencillos pasos podrás envíar tu mensajería express, papelería, planos, contratos y archivos
                    urgentes.
                </p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="box_home" id="one" style={ico1} >
                        <span>1</span>
                        <h3>Dinos a dónde ir</h3>
                        <p>
                            Danos el punto A y el B para ir
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box_home" id="two"  style={ico2}>
                        <span>2</span>
                        <h3>Forma de contacto</h3>
                        <p>
                            Teléfono y correo para contactarte
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box_home" id="three"  style={ico3}>
                        <span>3</span>
                        <h3>Selecciona la forma de pago</h3>
                        <p>
                            Tu decide como pagar
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box_home" id="four"  style={ico4}>
                        <span>4</span>
                        <h3>Recibe tu mensajería</h3>
                        <p>
                            Recomienda el servicio :)
                        </p>
                    </div>
                </div>
            </div>

            <div id="delivery_time" className="hidden-xs">
                <strong><span  style={contador}>5</span><span  style={contador}>0</span></strong>
                <h4>Minutos o menos en llegar</h4>
            </div>
        </div>
        <div className="high_light">
            <div className="container">
                <h3>Somos rápidos, seguros y express</h3>
                <p></p>
                <a href="#mapa">¡PIDE AHORA!</a>
            </div>
        </div>

        <section className="parallax-window" data-parallax="scroll" data-image-src={papeleria}
            alt="papeleria-planos-contratos-y-archivos" data-natural-width="1200" data-natural-height="600">
            <div className="parallax-content">
                <div className="sub_content">
                    <i id="mapa" className="icon_mug"></i>
                    <h3>¿Que valor le das a tu tiempo?</h3>
                    <p>
                        ¡Nosotros llevamos tu papelería, planos, contratos o archivos!
                    </p>
                </div>
            </div>
        </section>
    
      </div>
    )
  }
}

export default Description
