import Task from './Task'

const Tasks = ( { task, removeTask } ) => {
    return (
        <>
            {task.map((task) =>
                <div style={{backgroundColor: '#9F448C', paddingLeft: '2em', paddingRight: '2em', paddingTop: '.5em', paddingBottom: '.5em'}}>
                    <div className="wrapper justify-center column-2 row-1 dead-center bg-green" style={{position: 'relative', borderStyle: 'solid', borderWidth: 'thin', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)'}}>
                    <Task key={ task.id } task={ task } removeTask={() => removeTask(task.id)} />
                    </div>
                </div>)}
        
        </>
    )
}

export default Tasks