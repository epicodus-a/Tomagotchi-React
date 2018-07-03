import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'

import Moment from 'moment';
import sleep from '../assets/img/tsleep.png';
import play from '../assets/img/tplay.gif';
import food from '../assets/img/tfood.gif';

import Food from './Food';



class HomePage extends React.Component{
  // let _food = null;
  // let _sleep = null;
  // let _play = null;
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      selectedOption: 'sleep',
      sleepLevel: 100,
      playLevel: 100,
      foodLevel: 100

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

 //  let setRedirect = () => {
 //   this.setState({
 //     redirect: true
 //   })
 // }
 //
 // let renderRedirect = () => {
 //     if (this.state.redirect && this.selectedOption === 'food') {
 //       return <Redirect to='/food'>
 //     }
 //   }
  componentDidMount() {

  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    // return  <Redirect to=`/${this.state.selectedOption}` />
  }


  render() {
    if (this.state.selectedOption === 'food') {
      return  <Redirect to='/food' />
    }

    return (
      <div>
        <div>
          <img src={sleep} className='sleep'/>
          <img src={play} className='play'/>
          <img src={food} className='food'/>
        </div>
        <form onSubmit={this.handleFormSubmit}>
        <div className="radio">
          <label>
            <input type="radio"
                   value="sleep"
                   checked={this.state.selectedOption === 'sleep'} onChange={this.handleOptionChange} />
            Sleep
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio"
                   value="play"
                   checked={this.state.selectedOption === 'play'} onChange={this.handleOptionChange} />
            Play
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio"
                   value="food"
                   checked={this.state.selectedOption === 'food'} onChange={this.handleOptionChange} />
            Food
          </label>
        </div>
        <button className="button" type='submit'>Choose One</button>
      </form>
      </div>
    );
  }
}

export default HomePage;
