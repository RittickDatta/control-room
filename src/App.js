import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store/store';

import Layout from './containers/Layout/Layout';
import BackOffice from './containers/BackOffice/BackOffice';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/" component={Layout}/>
            <Route path="/backoffice" component={BackOffice} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
