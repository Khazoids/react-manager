import React, { useState } from 'react'
import Button from './Button'
import AddTask from './AddTask'


const Header = ({addTask}) => {
    const [visibility, setVisibility] = useState(false);

    const toggleTask = (e) => {
       
        setVisibility(!visibility);
    }

    return (
        <>
            <div className="bg-purple column-2 align-center" style={{color: "black", padding: '2rem', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', borderStyle: 'solid', borderWidth: 'thin'}}>
                <h1 style={{color: 'white'}}>Task Tracker</h1>
            <i>
                <Button onClick={toggleTask} text='Add new task'/>
            </i>
            </div>
            
                {visibility && <AddTask addTask={addTask} />}
        
        </>
    )
}

export default Header;