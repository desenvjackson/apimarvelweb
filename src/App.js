import logo from './logo.svg';
import './App.css';

import { Link, HashRouter as Router, Route, Switch } from "react-router-dom";
import Routes from '../src/routes'
import Menu from '../src/components/menu/menu'

function App() {
  return (
    <>
    
    <div>
      <Menu />
    </div>

    <div>
         {Routes.map((route, index) =>        
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props => {
                return (
                    <route.component {...props} />
                );
              })}
            />   
          )}

    </div>
    </>
  );
}

export default App;
