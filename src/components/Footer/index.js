import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//logo
import mensaje_express from './../../assets/images/mensaje-express.jpg';

export class Footer extends Component {
  render() {
    return (
        <div>
            {/*<!--Footer -->*/}
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            <h3></h3>
                            <ul>
                                <li><a href="/">Términos y condiciones</a></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div id="social_footer">
                                    <ul>
                                        <li><a href="http://facebook.com/donmandonmx/"><i className="icon-facebook"></i></a></li>
                                        <p>
                                        © Don Mandón 2018
                                        </p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
  }
}

export default Footer
