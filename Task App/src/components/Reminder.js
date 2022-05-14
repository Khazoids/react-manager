import React, { useState } from 'react';

const Reminder = (  ) => {
    const [reminder, setReminder] = useState('');

    const toggleReminder = () => {
        setReminder(!reminder);
    }

    return (
         <div onClick={ toggleReminder } className='row-5 wrapper container' style={{width: '0vw'}} >
            
            <div className='wrapper column-2'>
                <label htmlFor='half-hour' type='radio'>30 minutes before</label>
                    <input
                        checked={reminder === 'half-hour'}
                        value='half-hour'
                        id='half-hour'
                        type='radio'
                        onChange={(e) => setReminder(e.currentTarget.value) }
                    />     
            </div>

            <div className='wrapper column-2'>
                <label htmlFor='hour' type='radio'>1 hour before</label>
                    <input
                        checked={reminder === 'hour'}
                        value='hour'
                        id='hour'
                        type='radio'
                        onChange={(e) => setReminder(e.currentTarget.value) }
                    />
            </div>

            <div className='column-2'>
                <label htmlFor='half-day' type='radio'>6 hours before</label>    
                    <input
                        checked={reminder === 'half-day'}
                        value='half-day'
                        id='half-day'
                        type='radio'
                        onChange={(e) => setReminder(e.currentTarget.value) }
                    /> 
            </div>
            
            <div className='column-2'>
                <label htmlFor='day' type='radio'> 1 day before</label>     
                    <input
                        checked={reminder === 'day'}
                        value='day'
                        id='day'
                        type='radio'
                        onChange={(e) => setReminder(e.currentTarget.value) }
                    />
            </div>

            <div className='column-2'>
                <label htmlFor='week' type='radio'>1 week before</label>       
                    <input
                        checked={reminder === 'week'}
                        value='week'
                        id='week'
                        type='radio'
                        onChange={(e) => setReminder(e.currentTarget.value) }
                    />
            </div>  
                    
            <div className='column-2'>
                <label htmlFor='custom' type='radio'>Customize</label>       
                    <input
                        checked={reminder === 'custom'}
                        value='custom'
                        id='custom'
                        type='radio'
                        onChange={(e) => setReminder(e.currentTarget.value) }
                    />         
            </div>
              
        </div>
    )
}

export default Reminder;