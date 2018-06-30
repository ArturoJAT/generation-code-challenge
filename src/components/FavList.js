/*Favorite Stores List */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeStore} from '../actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';

class FavList extends Component {
    state = {  }
    renderList(){
        return(this.props.favStores.map((item,index)=>{
            return <li style={itemStyle} key={index}>{item}<button style={removeButtonStyle} onClick={()=>{this.props.remove(index)}}><FontAwesomeIcon icon={faMinusCircle}/></button></li>
        }))
    }
    render() {
        return (
            <div style={divStyle}>
                <h3 style={headerStyle}>My Favorite Stores</h3>
                <ul style={listStyle}>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}


  const mapStateToProps = (state) => (
    {
      favStores: state.storesMapReducer.favStores
    }
  );
  const mapDispatchToProps = dispatch => ({
    remove: (index) => dispatch(removeStore(index)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(FavList);

const divStyle={
    backgroundColor: '#777777',
    fontFamily: 'Arial,Helvetica,Sans-serif',
   
}
const headerStyle={
    textAlign: 'center',
    backgroundColor:'#ffbb00',
    margin:'0',
    padding:'20px',
}
const listStyle={
    listStyleType:'none',
    margin: '0',
    padding: '0',
    overflow: 'auto',
    height: '438px',
    fontSize: '1vw',

}
const itemStyle={
    marginLeft: '10px',
    backgroundColor: '#eeeeee',
    margin: '0',
    padding: '15px',
    borderBottom: '1px solid black',
    display: 'grid',
    gridTemplateColumns: '8fr 1fr'
}

const removeButtonStyle={
    background: 'none',
    border: 'none',
    outline:'none',
    cursor: 'pointer',
    color: '#d9534f'
}