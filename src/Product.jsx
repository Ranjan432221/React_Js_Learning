import "./Product.css";

function Product({title,price,features, nArray,features2 }) {
   // const List = features2.map((feature)=> <li>{feature}</li>) we can write this logic directly inside the component(return)
  // let isDiscount = price > 30000 ? <p>Discount 5%</p>: ""; // we can directly use this link inside the component(return(where we call directly))
  let isDiscount = price > 30000;
  let styles = {backgroundColor: isDiscount ? "pink":""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{features}</p>
            <p>{features2.map((feature)=> 
                (<li>{feature}</li>))}</p>
            <p>{nArray}</p>
            <p>{ isDiscount ? <a href="/">Discount 5%</a> : null}</p>
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
