import React from 'react';
import './Place.css';

const Place = ({ place, addToListHandler }) => {
    // console.log(props);
    const { picture, name, time, about } = place;
    return (
        <div className='place-container'>
            <img src={picture} alt="" />
            <div className='place-info'>
                <h4> Visiting Place : {name} </h4>
                <p> {about ? about.slice(0, 180) : 'There is no details for this place'}... </p>
                <h5>Total sepend Time: {time} days</h5>
                <button className='btn-add-list' onClick={() => addToListHandler(time)}>Add to List</button>
            </div>
        </div>
    );
};

export default Place;