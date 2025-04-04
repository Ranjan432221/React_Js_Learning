// curly braces use for allow pure javascript

function Title() {
  let name = "ranjan";
  
    return(
      <div>
      <h1>I am the Title </h1>
      <p>2 * 2 = {2 * 2}</p>
      <p>Hi,{name.toUpperCase()}</p>
      </div>
     
    );
}
// we must have to rendering after the completion of component
// we use (html tag) -> <Title></Title> or <Title/>(rendering only component or function name)

  export default Title; // it is a default export


// named Export -> export {export component name1, export component name2, export component name3....} -> it is use for multiple component export

// function Sum() {
//     return (
        
//        <div>
//             <h1>this is use for the know about the named export</h1>
//        </div>
//     );
// }
// export {Title,Sum};