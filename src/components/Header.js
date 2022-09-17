
const Header = ({title}) => 
{
    return(
        <header className="header">
            <h1>{title}</h1>
            <button className="btn">Add</button>
        </header>
    )
}

Header.defaultProps =  { title : "Task Tracker" }

// const headingStyle = 
// {
//     color : '#FFF',
//     background: '#333'
// }

export default Header