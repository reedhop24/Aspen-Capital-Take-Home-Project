import React, {useState} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import LocationMarker from './components/LocationMarker';
import Info from './components/Info';
import logo from './aspen-capital-logo.png';
import './App.css';
// Load static data
import locationData from './data/locations.json';

const MapContainer = ({defaultCenter}):JSX.Element => {

  const [selected, setSelected] = useState<Object>({});
  const mapStyles:{height:string, width: string} = {        
    height: '60vh',
    width: '100%'
  };
  
  return (
    <>
      <Navbar bg='white' expand='lg'>
          <Navbar.Brand> <img src={logo} alt='logo' className='logo' height='30%' width='150px'></img></Navbar.Brand>
          <Navbar.Collapse className='justify-content-end'>
            <h4>Aspen Capital Candidate Project</h4>
          </Navbar.Collapse>
      </Navbar>
    <Container>
      <Row>
        <Col xs={2}/>
        <Col xs={8}>
          <LoadScript
            googleMapsApiKey='AIzaSyDimdTDogeyWcGr-Pmf9PKRwFpZqrvZvuI'>
            <div className='map-container'>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={11}
                center={defaultCenter}>
                  {locationData['features'].map(x => <LocationMarker elem={x} handleSelect={setSelected}/>)}
                  {selected['type'] && (<Info selected={selected} handleSelected={setSelected}/>)}
              </GoogleMap>
            </div>
          </LoadScript>
        </Col>
        <Col xs={2}/>
      </Row>
    </Container>
    </>
  )
}
export default MapContainer;
