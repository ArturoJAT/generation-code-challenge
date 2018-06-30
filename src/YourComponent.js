import React, { Component } from 'react';

/*
* Use this component as a launching-pad to build your functionality.
*
*/

import MapComponent from './components/MapComponent';
import FavList from './components/FavList';

export default class YourComponent extends Component {

  render() {
    return (
        <div style={divStyle}>
          <div style={appStyle}>
            <MapComponent/>
            <FavList/>
          </div>
        </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};

var appStyle = {
  display:'grid',
  gridTemplateColumns: '5fr 2fr',

}