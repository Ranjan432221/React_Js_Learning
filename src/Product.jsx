import "./Product.css";
import Price from "./Price";

function Product({title,idx }) {
    let oldPrice = ["12,495", "11,990", "1,599","599"];
    let newPrice = ["8,999", "9,199", "899", "278"];
    let description = [
           [ "8,000 DPI", "5 Programmable buttons"],
            ["intutive surface","designed for iPad pro"],
            ["designed for iPad pro","intutive surface"],
            ["Wireless","8,000 DPI"],
    ];
    return (
        <div className="Product"> 
           <h4>{title}</h4>
           <p>{description[idx][0]}</p>
           <p>{description[idx][1]}</p>
           <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}
export default Product;

// style component
// in style component we can use one css file for all different component 
// but basically we are not use only one css file for all compnent
// we use different component for different css file 
// like our component name is product.jsx then we have to create the Product.css file 
// so that we use all style of Product component in Product css
// we have to remember our component name and css file name both have to same which are more suitable for programmer
// to make structure component with add style


// IMPORT AND EXPORT possible for webpack
// ====================
// conditional -> we can write {price > 3000 ? && <p>discount 5%</p>} instead of  <p>{price > 30000 ? <a href="/">Discount 5%</a> : null}</p>
//-----------------------------------------
