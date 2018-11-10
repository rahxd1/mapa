import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAz2qXwxC0KJSPvR3-PZUtcrOlqhxmPC2k&sensor=false&&region=MX&language=es&libraries=places&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  );

export class Map extends Component {
  render() {
    return (
      <div>
        {/*<!--Map -->*/}
        <div className="container margin_60">
            <div className="main_title margin_mobile">
                <h2 className="nomargin_top">Haz tu pedido ahora</h2>
            </div>
            <div className="row">
                <table border="0" cellpadding="0" cellspacing="3">
                    <tr>
                        <td colspan="2">
                            
                            <div className="form-group">
                                <label for="txtSource">Punto de partida:</label>
                                <input type="text" id="txtSource" value="" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="txtDestination">Punto de entrega:</label>
                                <input type="text" id="txtDestination" value="" className="form-control"/>
                            </div>
                            <input type="button" value="Optener distancia" onclick="GetRoute()" className="btn btn-success" />
                            <hr />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div id="dvDistance">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <MyMapComponent isMarkerShown />
                            <div id="dvMap" style={{width: "900px",height: "500px"}}>
                            </div>
                        </td>
                        <td>
                            <div id="dvPanel" style={{width:"300px",height: "500px"}}>
                            </div>
                        </td>
                    </tr>
                </table>
                <div className="row">
                    <div className="col-md-12">

                        <label>Notas de referencia</label>
                        <textarea className="form-control" style={{height:"150px"}} placeholder="Esquina con, edificio rojo, cuarto piso"
                            name="notes" id="notes"></textarea>

                    </div>
                    <div className="col-md-12">
                        <div className="text-center">
                            <a href="/" className="btn_full" onclick="ga('send', 'event','Solicitudes', 'Click Cotizar', 'Solicitar Home map');">¡SOLICITA AHORA!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Map
