import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SimpleAppBar from './testmaterial';

function App(){
  return (
    <div>
      <Switch>
        <Route path='/' component={SimpleAppBar} />
      </Switch>
    </div>
  );
}

export default App;
