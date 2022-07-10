import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

 const MapContainer = (props) =>{
    const containerStyle = {
        width: '100%',
        maxWidth:'1000px',
        height: '500px'
      }
      const onMarkerClick = (props, marker, e)=> {
        console.log(e)
      }
    return (
        <Map 
        google={props.google} 
        containerStyle={containerStyle}
        zoom={14}
        initialCenter={{
            lat: 40.1872,
            lng: 44.5152
          }}          
        >   
          <Marker
          onClick={onMarkerClick}
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: 40.17910331678453, lng: 44.510079999898835}} />
          <Marker
            onClick={onMarkerClick}
            name={'Dolores park'}
            position={{lat: 40.177767155052265, lng: 44.51150157052535}} />
          <Marker />
          <Marker
          onClick={onMarkerClick}
            name={'Your position'}
            position={{lat: 40.17917938457178, lng: 44.50501374589074}}/>   
        </Map>
      );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAIEZynEY9zBY5OJnBljHdE6kbA8FiXFQs'
  })(MapContainer)