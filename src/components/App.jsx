import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

import Food from './Food';
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
    this.handleFoodClick = this.handleFoodClick.bind(this);
    this.handleNoFoodClick = this.handleNoFoodClick.bind(this);
  }

  checkFoodLevel(foodVal){
    if (foodVal >= 200 ){
      return false;
    }else if(foodVal <= 0){
      return false;
    }else{
      return true;
    }
  }


  handleFoodClick(){
    let updatedFoodLevel = this.state.foodLevel;
    let foodBoolean = this.checkFoodLevel(updatedFoodLevel);
    if (foodBoolean){
      this.setState({
        foodLevel: this.state.foodLevel + 20
      });
    }else{
      this.setState({
        foodLevel: 100
      })
    }

  }

  handleNoFoodClick(){
    let updatedFoodLevel = this.state.foodLevel;
    let foodBoolean = this.checkFoodLevel(updatedFoodLevel);
    if (foodBoolean){
      this.setState({
        foodLevel: this.state.foodLevel - 20
      });
    }else{
      this.setState({
        foodLevel: 100
      })
    }

  }

  render(){
    return(
      <div>
       <Switch>
         <Route path='/' exact component={HomePage} />
         <Route path='/food' render={()=><Food onFoodClick={this.handleFoodClick} onNoFoodClick={this.handleNoFoodClick} foodLevel = {this.state.foodLevel} />} />

       </Switch>
     </div>
    )
  }
}

export default App;
