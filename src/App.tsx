import "./App.css";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Message from "./Message";

function App() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items = {items} heading= "Cities" onSelectItem = {handleSelectItem} />
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
    
    </div>
  );
}

export default App;
