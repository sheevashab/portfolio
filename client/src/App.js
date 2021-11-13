import './App.css';
import Layout from './layout/Layout';
import MainContainer from './maincontainer/MainContainer';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path='/'>
          <MainContainer />
        </Route>
      </Layout>

    </div>
  );
}

export default App;
