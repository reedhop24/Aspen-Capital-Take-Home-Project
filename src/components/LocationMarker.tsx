import {Marker} from '@react-google-maps/api';
import {v4 as uuidv4} from 'uuid';

const LocationMarker = ({elem, handleSelect}):JSX.Element => {
    return (
        <Marker 
            key={uuidv4()} 
            position={{lat: elem['geometry']['coordinates'][1], lng: elem['geometry']['coordinates'][0]}}
            onClick={() => handleSelect(elem)}
            // Custom Icon Forced Info Box off lat lng, wanted to figure out how to center icon on lat lng but
            // ran out of time
            // icon={{
            //     path: 'M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
            //     fillColor: '#FC6923',
            //     fillOpacity: 2,
            //     scale: 2,
            //     strokeColor: 'white',
            //     strokeWeight: .5,
            // }}
        />
    );
}

export default LocationMarker;