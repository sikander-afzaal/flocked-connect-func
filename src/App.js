import { useState } from "react";
import "./App.css";
import Header from "./Layout/Header/Header";
import Landing from "./Pages/Landing/Landing";

function App() {
  const [accounts, setAccounts] = useState([]);
  
  
  return (
    <div className="App">
      <Header accounts={accounts} setAccounts={setAccounts} />     
    
      <Landing />
    </div>
  );
}

export default App;
