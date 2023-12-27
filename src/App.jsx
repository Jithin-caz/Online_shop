import './App.css'
import Header from './containers/header'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ProductListing from './containers/productsListing'
import ProductDetails from './containers/productDetails'
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
    <Route path='/' exact Component={ProductListing}/>
    <Route path='/product/:productId' exact Component={ProductDetails}/>
    <Route>404 not found</Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
