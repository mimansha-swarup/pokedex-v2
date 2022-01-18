import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import localPalette from './theme/palette';
import { useObserver } from "mobx-react";
import HomePage from './pages/HomePage';


function App() {
 
 return useObserver(() =>( 
    <Router>
      <div style={{overflow:"hidden",color:localPalette.common.black}}>
        {/* <ScrollToTop/> */}
        <Routes>
          <Route  path="/" element={<HomePage/>} />
        </Routes>


      
     
      </div>
    </Router>
  ));
}

export default App;
