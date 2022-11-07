import './App.css';
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [ tasks, setTasks] = useState(
      [
          { id:1, text: "Doctors Appointment",        day: "Feb 5th at 2:30pm", reminder: false },
          { id:2, text: "Help kids with home work",   day: "Feb 5th at 2:30pm", reminder: false },
          { id:3, text: "Walk the dog",               day: "Feb 5th at 2:30pm", reminder: true },
          { id:4, text: "Watch movies",               day: "Feb 5th at 2:30pm", reminder: false },
          { id:5, text: "Driving lessons",            day: "Feb 5th at 2pm",    reminder: false },
          { id:8, text: "Group session with friends", day: "Feb 5th at 1:30pm", reminder: true }
      ]
  )

  // add task 

  const addTask = (task) => 
  {
    const id = Math.floor(Math.random() * 400) + 1;
    const newTask = { id, ...task}
    
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => 
  {
      setTasks(tasks.filter( (task) => task.id !== id));
  }

  // toggle task
  const toggleReminder = (id) => 
  {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ));
  }

  return (
    <div className="container">
      <Header title='Task Tracker' onAdd={ ()=> setShowAddTask(!showAddTask) } />
      { showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : ("No task(s) to show!")}  
    </div>
  );
}

export default App;
