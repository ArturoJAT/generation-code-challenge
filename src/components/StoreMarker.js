/*Individual Map Pin Marker Component */
import React, {Component} from 'react';

import {connect} from 'react-redux';
import {addStore} from '../actions';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapPin,faStar} from '@fortawesome/free-solid-svg-icons';

class StoreMarker extends Component{
    state = {
        visible: false
    }
    addToList(){
        this.setState(
            {visible: !this.state.visible }
          );
      this.props.add(this.props.text) 
    }
    displayText(e) {
        this.setState(
          {visible: !this.state.visible }
        );
      }
    render() {
        
        return (
            <div>
             {this.state.visible ? <div style={textStyle} >{this.props.text}<br/><button onClick={() => {this.addToList()}} style={favButton}>Add <FontAwesomeIcon icon={faStar}/></button></div> : null}
                <button style={buttonStyle} onClick={this.displayText.bind(this)}>
                    <div style={markerStyle}>
                        <FontAwesomeIcon icon={faMapPin}/>
                    </div>
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    favStores : state.favStores
  });
const mapDispatchToProps = dispatch => ({
    add: (text) => dispatch(addStore(text)),
  });
export default connect(mapStateToProps,mapDispatchToProps)(StoreMarker);

var buttonStyle = {
    background: 'none',
    border: 'none',
    outline:'none',
    cursor: 'pointer'
}
var favButton = {
    backgroundColor: 'yellow',
    outline:'none',
    cursor: 'pointer',
    border: 'none'
}
var markerStyle = {
    color: '#db3236',
    fontSize: '15px'
}

var textStyle ={
    color:'black',
    backgroundColor: 'white',
    padding: '20px',
    display: 'inline block',
    position: 'absolute',
    top: '-100px',
    left:'-40px',
    zIndex: '2',
    width: '100'
}

