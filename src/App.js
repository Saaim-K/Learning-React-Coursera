import { Navbar, NavbarBrand } from 'reactstrap'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' >
        <div className="container">
          <NavbarBrand href='/'> Learning React </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
