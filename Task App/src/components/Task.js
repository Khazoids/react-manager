import Button from './Button'
const Task = ( { task, removeTask, reminder } ) => {
    return (
        <>
            <div style={ task.reminder ? {color: 'white', borderLeftStyle: 'solid', borderWidth: '2em', borderColor: '#51B0C9'}: {}}>
                <h6>{task.text}</h6>
                <p>{task.date}</p>
            </div>
            <i>
                <Button onClick={removeTask} text='Remove'/>
            </i>
        </>
    )
}

export default Task