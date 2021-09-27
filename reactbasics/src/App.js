import {Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
function App(){

  

  return(
    <>
      <Navigation/>
      <Route path='/' exact component={HomePage}/>
      <Route path='/contact'exact component={Contact}/>
    </>
  );
}
export default App;
