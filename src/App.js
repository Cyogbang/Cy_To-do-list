import "./App.css";
import Task from './Components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Weekly Plan</h1>
          <p>Let's record your plans, Shall We!!!...</p>
        </div>
        <div className="planRecorder">
          <form className="Inputs">
            <input placeholder="Enter task here" className="input" />
            <textarea placeholder="What is this about?" className="input" />
            <button className="input">Add</button>
          </form>
          <button className="allTsk">All Task</button>
          <button className="activeTsk">ActiveTask</button>
          <button className="doneTsk">Completed</button>
        </div>
        <Task />
      </header>
    </div>
  );
}

export default App;
