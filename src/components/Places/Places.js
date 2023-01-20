import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import Profile from '../Profile/Profile';
import "./Places.css";

const Places = (props) => {
    const { addToListHandler, count } = props;

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('activites.json')
            .then(res => res.json())
            .then(data => setPlaces(data))

    }, [])


    return (
        <div className='home-container'>
            <div className='places-container'>
                {
                    places.map(place => <Place
                        key={place.id}
                        place={place}
                        addToListHandler={addToListHandler}
                    ></Place>)
                }
            </div>
            <div>
                <Profile
                    count={count}
                ></Profile>
            </div>
        </div>
    );
};

export default Places;