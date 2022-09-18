
const Task = ({id, text, day}) => {
    return (
        <div className="task">
            <h3 key={id}>{text}</h3>
            <p>{ day }</p>
        </div>
    )
}

export default Task