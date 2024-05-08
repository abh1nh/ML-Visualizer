import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home.js';
import LinReg from './components/LinReg';
import NN from './components/NN.js';
import SVM from './components/SVM.js';
import PCA from './components/PCA.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/linreg" element={<LinReg />} />
          <Route path="/nn" element={<NN />} />
          <Route path="/svm" element={<SVM />} />
          <Route path="/pca" element={<PCA />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
