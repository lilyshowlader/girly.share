import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Users from './user/pages/Users'
import NewProduct from './products/pages/NewProduct'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserProducts from './user/pages/UserProducts';

function App() {
  return (
    <Router>
    <MainNavigation />
    <main>
    <Switch>
    <Route path ='/' exact>
      <Users />
    </Route>

    <Route path='/:userId/products' exact>
      <UserProducts />
    </Route>

    <Route path ='/products/new' exact>
      <NewProduct />
    </Route>

    <Redirect to='/' />
    </Switch>
    </main>
    </ Router>
  )
}

export default App;
