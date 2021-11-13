import './App.css';
import Layout from './layout/Layout';
import MainContainer from './maincontainer/MainContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<MainContainer />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
