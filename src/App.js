import React from "react";
import './App.css';
import {BaseLayout} from "./layout";
import {Home} from "./pages/home";
import {Switch, Route, useHistory} from 'react-router-dom'
import {MovieDetails} from "./pages";


function App() {
    const history = useHistory()
  return (
     <BaseLayout>
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/movie/:id' exact>
                <MovieDetails />
            </Route>
            <Route>
                <h1>PAGE NOT FOUND
                    <button onClick={()=> history.push('/')}>
                        go home
                    </button>
                </h1>
            </Route>
        </Switch>
     </BaseLayout>
  );
}

export default App;
