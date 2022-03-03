import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MenuList from './components/MenuList';
import MenuAuthGrid from "./components/MenuAuthGrid";
import MenuAuthForm from "./components/MenuAuthForm";
function App() {
  const [menuIndexNo, setMenuIndexNo] = useState(0)
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'50%'}}>
        <MenuList setIdx={setMenuIndexNo}/>  
      </div>
      <div style={{width:'50%'}}>
        <MenuAuthForm></MenuAuthForm>
        <MenuAuthGrid menuIndexNo={menuIndexNo}></MenuAuthGrid>
      </div>
    </div>
    
  );
}

export default App;
