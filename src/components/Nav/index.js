import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//logo
import logo from './../../assets/images/mensajeria-donmandon.png';
import logo_mobil from './../../assets/images/mensajeria-donmandon-mobile.png';

export class Nav extends Component {
  render() {
    return (
      <div>
        {/*<!--Navigation -->*/}
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col--md-4 col-sm-4 col-xs-4">
                        <a href="/" id="logo">
                            <img src={logo} width="184" height="81" alt="mensajeria express más segura y veloz"
                                data-retina="true" className="hidden-xs" />
                            <img src={logo_mobil} width="59" height="23" alt="mensajeria express más segura y veloz"
                                data-retina="true" className="hidden-lg hidden-md hidden-sm"/>
                        </a>
                    </div>
                    <nav className="col--md-8 col-sm-8 col-xs-8">
                        <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu
                                mobile</span></a>
                        <div className="main-menu">
                            <div id="header_menu">
                                <img src={logo} width="184" height="81" alt="mensajería express"
                                    data-retina="true"/>
                            </div>
                            <a href="#" className="open_close" id="close_in"><i className="icon_close"></i></a>
                            <ul>
                                <li><a href="/">Nosotros</a></li>
                                <li><a href="/">FAQs</a></li>
                                <li><a href="/" data-toggle="modal" data-target="#login_2">Ingresar</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        
      </div>
    )
  }
}

export default Nav
