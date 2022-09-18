import Task from './Task'

const Tasks = ({tasks}) => 
{

    return (
        <>
            { tasks.map((task) => (
                <Task key={task.id} text={task.text} day={task.day} />)
                ) }
        </>
    )
}

export default Tasks