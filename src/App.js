

import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import DataInsert from './DataInsert';

function App() {
  return <>
     
     <Router>     
           <Routes>
           <Route path="/" element={<Home/>}></Route>  
           <Route path="/Data" element={<DataInsert/>}></Route>

      </Routes>

    </Router> 
  
  </>
}

export default App;
