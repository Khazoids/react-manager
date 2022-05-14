import React, { useState } from 'react';


const Menu = ( { reminder, setReminder } ) => {
    const toggleReminder = () => {
        setReminder(!reminder);
    }

    return (
            <div onClick={toggleReminder} className='wrapper container row-3' style={{color: 'black', width: '15vw'}}>
                <div>
                    <label>30 mins before</label>
                    <input 
                        checked={reminder === 'min'}
                        type='radio'
                        value='min'
                        onChange={(e)=> setReminder(e.currentTarget.value)}/>   
                </div>

                <div>
                    <label>1 hour before</label>
                    <input 
                    checked={reminder === 'hour'}
                    type='radio'
                    value='hour'
                    onChange={(e)=> reminder === e.currentTarget.value ? setReminder(''): setReminder(e.currentTarget.value)}/>
                </div>

                <div >
                    <label> 1 day before</label>
                    <input 
                    checked={reminder === 'day'}
                    type='radio'
                    value='day'
                    onChange={(e)=> reminder === e.currentTarget.value ? setReminder(''): setReminder(e.currentTarget.value)}/>
                </div>

                <div >
                    <label> 1 week before</label>
                    <input 
                    checked={reminder === 'week'}
                    type='radio'
                    value='week'
                    onChange={(e)=> reminder === e.currentTarget.value ? setReminder(''): setReminder(e.currentTarget.value)}/>
                </div>
            </div>
    )
}

export default Menu;