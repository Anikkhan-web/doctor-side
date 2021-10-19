import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import Appointment from './components/Appointment/Appointment';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Contact from './components/Contact/Contact';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Service from './components/Service/Service';



function App() {
  return (
    <div className="App">
   
     <AuthProvider>
     <BrowserRouter>

<Header></Header>
<Switch>
  <Route exact path='/'>
    <Home></Home>

  </Route>
    <Route path='/home'>
    <Home></Home>

  </Route> 
  <Route path='/services'>
    <Services></Services>

  </Route>  
   <Route path='/service'>
    <Service></Service>

  </Route>   
  <Route path='/team'>
    <Team></Team>

  </Route> 
  <Route path='/gallery'>
    <Gallery></Gallery>

  </Route>

   <PrivateRoute path='/appointment/:userId'>
    <Appointment></Appointment>

  </PrivateRoute>  
    <Route path='/appointment'>
    <Appointment></Appointment>

  </Route>   
  
  <PrivateRoute path='/contact'>
    <Contact></Contact>
    

  </PrivateRoute>
   <Route path='/login'>
   <Login></Login>

  </Route>
   <Route path='/registration'>
    <Registration></Registration>

  </Route> 
  <Route exact path='*'>
    <NotFound></NotFound>

  </Route>


</Switch>
<Footer></Footer>

</BrowserRouter>

     </AuthProvider>
 
    </div>
  );
}

export default App;
