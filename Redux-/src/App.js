import AddTask from "./components/AddTask";
import Edit from "./components/Edit";
import Header from "./components/Header";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="App">
      <Header />
      <ListTask />
      <AddTask />
      <Edit />
    </div>
  );
}

export default App;
