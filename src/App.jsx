import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";


function App(){
    return (
      <>
        <NavBar/>
        <ItemListContainer greeting="item list container"/>
      </>
    )
  }


export default App