import Product from "./Product";
function ProductList(props) {
  return (
    <div>
      {props.data.map((product) => (
        <Product name={product.name} price={product.price}/>
      ))}
    </div>
  );
}
export default ProductList