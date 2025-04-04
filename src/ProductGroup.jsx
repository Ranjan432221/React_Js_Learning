import Product from "./Product.jsx";
// Structure component
function ProductGroup() {
    let option = ["hi-tech","durable","fast"];

    let nList = ["ArrayRendering","MapFunction","UsedConst"];
     let nFeature = [<li>hitech</li>,<li>durable</li>]
    //let option2 = {a:"nHitech", b:"nDurable", c:"nFast"};
    return (
        <>
        <Product title="phone" price={30000} features={option} nArray={nFeature} features2={nList}/>
        <Product title="laptop" price={40000}  features={option} nArray={nFeature} features2={nList}/>
        <Product title="pen" price={10}  features={option} nArray={nFeature} features2={nList} />
     </>
    );
}
export default ProductGroup;

//==============================================================
// React Props
//-------------------------
// Props are the information that you pass to a jsx tag

// <Product titile="phone" price="30k" />
// <Product title="Laptop" price={40000}/>

// after it we have to write some code in in Product component(which we can say its call)
// function Product({title,price}){
//        return (
//         <div className="product">
//             <h4>{title}</h4>
//             <p>{price}</p>
//         </div>
//        );
// }
// export default Product;
// above code we have to write in Product component
//==================================================

//========================================
// props Array in React
//-----------------------------------------------
// we cant access all object value in components 
// we can acess the only a single value in object(strictly restricted to access the all object value at a time)
// we can access the only the one o0bject value in components
// lets e.g => object{a:"hitech", b:"new value"} here we can access only object.a or object.b (not both are access in at time)


// we can directly write the array or pass the array and object within rendering of components
// lets see through an example
// e.g -> <Product features={["hitech", "durable", "fast"]}/>
// e.g-> here we will see how object write directly in rendering of components
// <Product features2={{a:"hitech"}};
//================================================
//Rendering array -> it is used frequently in react js
// maximum time we are using this
//==================================
//Ternary operator frequently used in React js

