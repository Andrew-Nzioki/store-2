import "./App.css";
import data from "./data"
import usersData from "./usersData"
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";
function App() {
  return (
    <div className="App">
      <h5>Products data</h5>
      <ProductList data={data}/>
      <UserList item={usersData} />
    </div>
  );
}

export default App;
