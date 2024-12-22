import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useSelector } from 'react-redux';
import "leaflet-rotatedmarker";
import { icon } from 'leaflet';
import { useDispatch } from 'react-redux';
import { clearRoute } from '../redux/Slice/detailSlice';
import { getFlights } from './../redux/actions/index';
import { useEffect } from 'react';

const Map = ({ setDetailId }) => {
    const { flights } = useSelector((store) => store.flight);


    const { route } = useSelector((store) => store.detail);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         dispatch(getFlights());
    //     }, 2000);

    //     return () => clearInterval(id);
    // }, []);




    // cumleç ikonu oluşturduk
    const planeIcon = icon({

        iconUrl: "plane_icon.png",
        iconSize: [30, 30]
    })


    return <MapContainer center={[38.922892, 35.411169]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {flights.map((flight) => (



            <Marker
                key={flight.id}
                position={[flight.lat, flight.lng]}
                icon={planeIcon}
                rotationAngle={flight.deg - 45}>
                <Popup>
                    <div className='popup'>
                        <span>Kod: {flight.code}</span>
                        <button onClick={() => setDetailId(flight.id)}>Detay</button>

                        {route.length > 1 && (

                            <button onClick={() => dispatch(clearRoute())}>Rotayı Temizle</button>
                        )}
                    </div>
                </Popup>

            </Marker>

        ))}


        {route && <Polyline positions={route} />}


    </MapContainer>

}

export default Map