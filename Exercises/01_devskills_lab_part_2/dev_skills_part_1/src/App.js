import logo from "./logo.svg";
import "./App.css";
import skillList from "./skillList";
import skillListItem from "./skillListItem";
import skillListForm from "./skillListForm";

function App() {
  // const misc = ["sillicon", 22, true, <div>Hey</div>];
  // return <div className="App">{misc}</div>;
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <skillList />
      <hr />
      <skillListForm />
    </div>
  );
}

export default App;
