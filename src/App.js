import history from './history';
import AppContainer from './AppContainer'
import { Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}> 
        <Router history={history}>
          <AppContainer />
        </Router>
        </Provider>
    </div>
  );
}

export default App;
