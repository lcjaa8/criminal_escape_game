import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Yocketui from '../yocketui/Yocketui';
import "./Carousel.css";
import { BASE_URL } from '../services/service';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const CarouselComp = () => {
    const [cities, setCities] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [fugitiveCity, setFugitiveCity] = useState([]);
    const promise1 = axios.get(`${BASE_URL}/cities`);
    const promise2 = axios.get(`${BASE_URL}/vehicles`);
    const promise3 = axios.get(`${BASE_URL}/fugitive`);
    const [city, selectCity] = useState(null);
    const [vehicle, setVehicle] = useState(null);
    const [city1, selectCity1] = useState(null);
    const [vehicle1, setVehicle1] = useState(null);
    const [city2, selectCity2] = useState(null);
    const [vehicle2, setVehicle2] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([promise1, promise2, promise3]).then(function (values) {
            setCities(values[0].data);
            setVehicles(values[1].data);
            setFugitiveCity(values[2].data?.name)

        });
    }, [])

    const getCity = () => {
        return cities.map((elem) => {
            return { "value": elem.name, "label": elem.name }
        })
    }

    const getVehicles = () => {
        return vehicles.map((elem) => {
            return { "value": elem.kind, "label": elem.kind }
        })
    }

    const findFugitive = () => {
        // console.log(fugitiveCity, city.value , city1.value, city2.value);
        // console.log(vehicle.range, vehicle1.range , vehicle2.range);
        // console.log(city.distance, city1.distance, city2.distance);
        if (fugitiveCity === city?.value) {
            const newCity = cities.filter(elem => elem.name === city.value)[0]
            const newVehicle = vehicles.filter(elem => elem.kind === vehicle.value)[0]
            console.log(newCity, newVehicle);
            if (newVehicle?.range >= 2 * newCity?.distance) {
                navigate("/caught");
            } else navigate("/ranaway");
        } else if (fugitiveCity === city1?.value) {
            const newCity = cities.filter(elem => elem.name === city1.value)[0]
            const newVehicle = vehicles.filter(elem => elem.kind === vehicle1.value)[0]
            console.log(newCity, newVehicle);
            if (newVehicle?.range >= 2 * newCity?.distance) {
                navigate("/caught");
            } else navigate("/ranaway");
        } else if (fugitiveCity === city2?.value) {
            const newCity = cities.filter(elem => elem.name === city2.value)[0]
            const newVehicle = vehicles.filter(elem => elem.kind === vehicle2.value)[0]
            console.log(newCity, newVehicle);
            if (newVehicle?.range >= 2 * newCity?.distance) {
                navigate("/caught");
            } else navigate("/ranaway");
        } else {
            navigate("/ranaway");
        }
    }

    return (
        <div>
            <Carousel>
                <div>
                    <img src="asset/cop 2.jpg" alt='' />
                    <p className="legend"><Yocketui cities={getCity()} vehicles={getVehicles()} copName="Cop 1" city={city} vehicle={vehicle} selectCity={selectCity} setVehicle={setVehicle}></Yocketui></p>
                </div>
                <div>
                    <img src="asset/cop 3.jpg" alt='' />
                    <p className="legend"><Yocketui cities={getCity()} vehicles={getVehicles()} copName="Cop 2" city={city1} vehicle={vehicle1} selectCity={selectCity1} setVehicle={setVehicle1}></Yocketui></p>
                </div>
                <div>
                    <img src="asset/cop 4.jpg" alt='' />
                    <p className="legend"><Yocketui cities={getCity()} vehicles={getVehicles()} copName="Cop 3" city={city2} vehicle={vehicle2} selectCity={selectCity2} setVehicle={setVehicle2} findFugitive={findFugitive}></Yocketui></p>
                </div>
            </Carousel>
            {(!city || !city1 || !city2 || !vehicle || !vehicle1 || !vehicle2) && <div>Please select cities and vehicle for all cops</div>}
        </div>
    );
}

export default CarouselComp;

