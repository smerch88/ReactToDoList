import "./App.scss";

import { TaskForm } from "./components/TaskForm";
import { AnimatedBackground } from "./components/AnimatedBackground/AnimatedBackground";

function App() {
  return (
    <div className="App">
      <AnimatedBackground />
      <div className="context">
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
