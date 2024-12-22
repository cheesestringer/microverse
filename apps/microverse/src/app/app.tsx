import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Microverse from './microverse';

const Home = React.lazy(() => import('home/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Microverse</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Microverse />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
