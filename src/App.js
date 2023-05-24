import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Users from './user/pages/Users'
import NewProduct from './products/pages/NewProduct'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserProducts from './user/pages/UserProducts';
import UpdateProduct from './products/pages/UpdateProduct';


function App() {
  return (
    <Router>
    <MainNavigation />
    <main>
    <Switch>
    <Route path ='/' exact>
      <Users />
    </Route>

    <Route path='/:userId/products'>
      <UserProducts />
    </Route>

    <Route path ='/products/new' exact>
      <NewProduct />
    </Route>

    <Route path ='/products/:productId' exact>
      <UpdateProduct />
    </Route>

    <Redirect to='/' />
    </Switch>
    </main>
    </ Router>
  )
}

export default App;
