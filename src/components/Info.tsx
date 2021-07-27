import {InfoWindow} from '@react-google-maps/api';

const Info = ({selected, handleSelected}):JSX.Element => {
    return (
        <InfoWindow
            position={{lat: selected['geometry']['coordinates'][1], lng: selected['geometry']['coordinates'][0]}}
            onCloseClick={() => handleSelected({})}
        >
            <>
                <h2>{selected['properties']['name']}</h2>
                <h5>{`${selected['properties']['address']} ${selected['properties']['city']}, ${selected['properties']['state']} ${selected['properties']['zipCode']}`}</h5>
                <h5><strong>Account Number: </strong>{selected['properties']['account']}</h5>
                <h5><strong>Loan Amount: </strong>{selected['properties']['loanAmount']}</h5>
            </>
        </InfoWindow>
    );
}

export default Info;