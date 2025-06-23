import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import setRoutes from './routes';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      {setRoutes()}
    </Router>
  );
};

export default App;