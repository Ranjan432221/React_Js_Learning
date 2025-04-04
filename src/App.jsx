
import './App.css'
// import {Title,Sum} from "./Title.jsx";
import Title from "./Title.jsx";
import Description from "./Description.jsx";
import ProductGroup from "./ProductGroup.jsx";
import MsgBox from "./MsgBox.jsx";
// our 1st component in react
// component is a reusable & independent piece of code


//============================
// Writing Markup in JSX
//---------------------------
// 1) Return a single root Element 
// 2) Close all the Tags 
// 3) camelCase Most of the things
//===================================


//==============================
// React Fragment -> fragment let you group a list of children without adding extra nodes to the DOM.
// <></> -> react fragment -> multiple component and multiple children combine into a single entity 
// if we dont want to add extra node then we can use the react fragment
//===================================
let arr = ["first", "second"];
function App() {
  return(
    <>
    <MsgBox UserName="Ranjan" textColor="yellow" nar={arr}/>
    <MsgBox UserName="Raudy" textColor="green" nar={arr}/>
      <ProductGroup/>
       <Title/> 
       <Description/>
       <Title/>
       <Description/>
    </>
  );
  
}

export default App
