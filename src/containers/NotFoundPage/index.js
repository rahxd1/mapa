
import React from 'react';


export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="image">
        <div id="overlay">
          <div id="heading_container">
            <h1>Error 404</h1>
          </div>
        </div>
      </div>
    );
  }
}
