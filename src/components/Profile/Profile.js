import React, { useState } from 'react';
import "./Profile.css";
import yeasin from '../../yeasinp.jpg';
import { setToLocalStorage, getFromLocalStorage } from '../Utilities/Utilities';


const Profile = (props) => {

    const time = props.count;
    const totalTime = time.reduce((current, previous) => parseInt(current) + parseInt(previous), 0)

    const [breakTime, setBreakTime] = useState(0)
    const breakHandler = (id) => {
        setBreakTime(id)
        setToLocalStorage(id)
    }

    let value = localStorage.getItem('break-time')
    if (value) {
        value = getFromLocalStorage()
    }
    else {
        value = 0;
    }


    return (
        <div className='profile-container'>
            {/* Profile section started */}
            <div>
                <div className='yeasin'>
                    <img src={yeasin} alt="" />
                    <div className='yeasin-info'>
                        <h4>Md Yeasin</h4>
                        <p className='clr-gray'>Want to explore Bangladesh</p>
                    </div>
                </div>
                <div className='activity-main'>
                    <div className='activity-container'>
                        <div>
                            <h2>10+</h2>
                            <p>Places Visited</p>
                        </div>
                        <hr />
                        <div>
                            <h2>100+</h2>
                            <p>Days</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add a break section started */}
            <div>
                <h3 className='break-title'>Add a break (days) </h3>
                <div className='break-container'>
                    <button className='btn-bread' onClick={() => breakHandler(5)}>5ds</button>
                    <button className='btn-bread' onClick={() => breakHandler(10)}>10ds</button>
                    <button className='btn-bread' onClick={() => breakHandler(15)}>15ds</button>
                    <button className='btn-bread' onClick={() => breakHandler(20)}>20ds</button>
                    <button className='btn-bread' onClick={() => breakHandler(25)}>25ds</button>
                </div>
            </div>

            {/* tour details started */}
            <div>
                <h3>Tour Details</h3>
                <div className='visit-time'>
                    <h4>Visiting Time</h4>
                    <h4 className='clr-gray'><span>{totalTime}</span> day/s</h4>
                </div>
                <div className='break-time'>
                    <h4>Break Time</h4>
                    <h4 className='clr-gray'>{value} day/s</h4>
                </div>
                <button className='btn-complete'>Mission Completed</button>

            </div>



        </div>
    );
};

export default Profile;