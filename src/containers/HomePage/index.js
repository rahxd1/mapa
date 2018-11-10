import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import HeaSliderder from './../../components/Slider';
import Description from './../../components/Description';
import Map from './../../components/Map';
import Footer from './../../components/Footer';

export default class HomePage extends React.PureComponent {


  render() {
    return (
      <div>
        <Helmet>
          <title>
                Don mandon
          </title>
           <meta name="description" content="description"/>
        </Helmet>
        <HeaSliderder/>
        <Description/>
        <Map/>
        <Footer/>
      </div>
    );
  }
}
