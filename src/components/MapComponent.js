/*
Renders Map and marks stores locations with a pin.
*/

import React, {
    Component
} from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import StoreMarker from './StoreMarker';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: []
        }
        Geocode.setApiKey('AIzaSyACp39dap8tWM6cxi2LqEsw_8L8bfthQB8');
        Geocode.enableDebug();
        this.drawMarkers.bind(this);
    }
    static defaultProps = {
        center: {
            lat: 19.432608,
            lng: -99.133209
        },
        zoom: 11
    };
    componentWillMount() {
        fetch('../store_directory.json')
            .then(response => response.json())
            .then(json => {
               this.getCoordinate(0,json,[]);
            })
    }
    getCoordinate(index, data, storesCoordinates) {
        console.log(index + ' ' + data.length);
        Geocode.fromAddress(data[index].Address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                storesCoordinates.push({Name: data[index].Name,Address: data[index].Address, Coordinates: {lat,lng}});
                if (index < data.length - 1) {
                    this.getCoordinate(index + 1, data, storesCoordinates);
                } else {
                    this.setState({
                        stores: storesCoordinates
                    });
                }
            },
            error => {
                console.error(error);
                if (index < data.length - 1) {
                    this.getCoordinate(index + 1, data, storesCoordinates);
                } else {
                    return storesCoordinates;
                }
            }
        )
    }
    drawMarkers(){
        return this.state.stores.map((item, index) =>{ 
            
        return <StoreMarker key={index} text={item.Name} address={item.Address} lat={item.Coordinates.lat} lng={item.Coordinates.lng}></StoreMarker>
        });
    }
    render() {
        return ( 
            <div style = {{ width: '100%',height: '500px'}} >
                <GoogleMapReact bootstrapURLKeys = {{key: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A' }}
                defaultCenter = {this.props.center}
                defaultZoom = {this.props.zoom} 
                >
                {this.drawMarkers()}
                </GoogleMapReact>  
            </div>
        );
    }
}

export default MapComponent;