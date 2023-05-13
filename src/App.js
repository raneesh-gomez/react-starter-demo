import { Route, Routes } from 'react-router-dom';

import PostDecomposition from './decomposition/post-decomposition';
import PreDecomposition from './decomposition/pre-decomposition';
import Buttons from './hoc';
import SampleError from './error-handling';

import ErrorBoundary from './shared/ErrorBoundary';
import NavBar from './shared/NavBar';

import './App.css';

function App() {
  return (
      <div>
        <ErrorBoundary>
          <NavBar />
          <div className="container app-container">
            <Routes>
              <Route exact path="/" element={<PreDecomposition />}/>
              <Route exact path="/pre-decomp" element={<PreDecomposition />} />
              <Route exact path="/post-decomp" element={<PostDecomposition />} />
              <Route exact path="/hoc" element={<Buttons />} />
              <Route exact path="/error-boundary" element={<SampleError />} />
              <Route path="*" element={<PreDecomposition />}/>
            </Routes>
          </div>
        </ErrorBoundary>
    </div>
  );
}

export default App;
