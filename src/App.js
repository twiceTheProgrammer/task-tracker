import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

function App() {
    const [ tasks, setTasks] = useState(
      [
          { id:1, text: "Doctors Appointment", day: "Feb 5th at 2:30pm", reminder: false },
          { id:2, text: "Help kids with home work", day: "Feb 5th at 2:30pm", reminder: false },
          { id:3, text: "Walk the dog", day: "Feb 5th at 2:30pm", reminder: false },
          { id:4, text: "Watch movies", day: "Feb 5th at 2:30pm", reminder: false },
          { id:5, text: "Driving lessons", day: "Feb 5th at 2pm", reminder: false },
          { id:6, text: "studying", day: "Feb 5th at 22:30pm", reminder: false },
          { id:7, text: "Cleaning", day: "Feb 5th at 12:30pm", reminder: false },
          { id:8, text: "Group session with friends", day: "Feb 5th at 1:30pm", reminder: false }
      ]
  )

  // delete task
  const deleteTask = (id) => 
  {
      setTasks(tasks.filter( (task) => task.id !== id))
  }

  // toggle task
  const toggleReminder = (id) => 
  {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : ("No task(s) to show!")}  
    </div>
  );
}

export default App;
