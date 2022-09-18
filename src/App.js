import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

function App() {
    const [ tasks, setTasks] = useState(
      [
          { id:1, text: "Doctors Appointment", day: "Feb 5th at 2:30pm", reminder: true },
          { id:2, text: "Help kids with home work", day: "Feb 5th at 2:30pm", reminder: true },
          { id:3, text: "Walk the dog", day: "Feb 5th at 2:30pm", reminder: true },
          { id:4, text: "Watch movies", day: "Feb 5th at 2:30pm", reminder: true },
          { id:5, text: "Driving lessons", day: "Feb 5th at 2pm", reminder: true },
          { id:6, text: "studying", day: "Feb 5th at 22:30pm", reminder: true },
          { id:7, text: "Cleaning", day: "Feb 5th at 12:30pm", reminder: true },
          { id:8, text: "Group session with friends", day: "Feb 5th at 1:30pm", reminder: true }
      ]
  )

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
