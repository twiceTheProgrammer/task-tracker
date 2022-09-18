import { FaTimes } from 'react-icons/fa'

const Task = ({id, text, day}) => {
    return (
        <div className="task">
            <h3 key={id}>{text} <FaTimes style={{color: 'red' , cursor: 'pointer'}} /> </h3>
            <p>{ day }</p>
        </div>
    )
}

export default Task