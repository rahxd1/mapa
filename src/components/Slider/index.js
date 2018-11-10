import React, { Component } from 'react';
import ReactTextRotator from 'react-text-rotator';

import mensaje_express from './../../assets/images/mensaje-express.jpg';

const content = [
    {
      text: 'Rápida',
      animation: 'fade',
    },
    {
      text: 'Segura',
      animation: 'fade',
    },
    {
      text: 'Express',
      animation: 'fade',
    },
    {
      text: 'Express',
      animation: 'fade',
    }
  ];

export class Slider extends Component {
    
  render() {
    const RotationText = () => (
          <ReactTextRotator
            content={content}
            time={3000}
            startDelay={0}
          />
      );

    return (
      <div>
        {/*<!--Slider -->*/}
        <section className="parallax-window" id="home" data-parallax="scroll" data-image-src={mensaje_express} alt="mensajeria urgente" data-natural-width="1400" data-natural-height="550">
            <div id="subheader">
                <div id="sub_content">
                
                    <h1>Mensajería <RotationText/>
                        <p>con Don Mandón</p>
                    </h1>
                    <p>
                        La forma más fácil y segura de envíar mensajería
                    </p>
                </div>
                <div id="count" className="hidden-xs"></div>
            </div>
        </section>
      </div>
    )
  }
}

export default Slider
