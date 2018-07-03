import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SimpleAppBar from './testmaterial';
// import Food from './Food';
import SimpleMediaCard from './Food';
import HomePage from './HomePage';

// function App(){
//   return (
//     <div>
//       <Switch>
//         <Route path='/' component={SimpleAppBar} />
//       </Switch>
//     </div>
//   );
// }
//
// export default App;

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      sleepLevel: 100,
      foodLevel: 100,
      playLevel: 100
    }
  }
  render(){
    return(
      <div>
       <Switch>
         <Route path='/' exact component={HomePage} />
        //  <Route path='/' exact component={SimpleAppBar} />

       </Switch>
     </div>
    )
  }
}

export default App;
