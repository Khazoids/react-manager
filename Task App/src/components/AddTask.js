import React, {useState} from 'react'
import Button from './Button'

import Menu from './Menu'


const AddTask = ( {toggleTask, addTask} ) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    // const [visibility, setVisibility] = useState(false);
    const [active, setActive] = useState(false);
    const [reminder, setReminder] = useState('');


  
    const handleMenu = () => {
        setActive(!active);
    }

//    const toggleVisibility = () => {
//        setVisibility(!visibility);
//    }

    const onSubmit = (e, task) => {
        e.preventDefault();
        if (!text) {
            alert('Please enter something into the field')
            return;
        }
        addTask( {text, date, reminder } );
        setText('');
        setDate('');
        setReminder('');
        setActive(false)
       
    }

    return (
       <div> 
            <div className='wrapper column-1 text-start' style={{color:' white', backgroundColor: '#9F448C', padding: '2em', borderStyle: 'solid', borderWidth: 'thin', borderColor: 'black'}}>
                <label> New task </label>
                    <input
                        id='date'
                        type='text'
                        placeholder='Add task'
                        value={ text }
                        style={{maxWidth: '20vw', padding: '1em', marginLeft: '2vw'}}
                        onChange={(e) => setText(e.target.value)}
                    />

                <label> Day and time </label>
                    <input
                        id='task'
                        type='date'
                        placeholder='Day and time'
                        value= { date }
                        style={{maxWidth: '20vw', padding: '1em', marginLeft: '2vw'}}
                        onChange={(e) => setDate(e.target.value)}
                        />
            
            
                <div className='container wrapper column-2' >
                    {/* <Button text='Set reminder' onClick={ toggleVisibility } /> */}
                    <div>
                    <Button text='Set reminder' onClick={handleMenu}/>
                    <div className='dropdown'>
                        {active && <Menu reminder={reminder} setReminder={setReminder} />}
                    </div>

                    </div>
                    <div className='text-end' style={{position: 'relative'}}>
                    <Button onClick={ onSubmit } text='Add' />
                    </div>
                </div>
                
            </div>
               
                {/* <div>
                {visibility && <Reminder />}
                </div> */}
        </div>
    )
}

export default AddTask;