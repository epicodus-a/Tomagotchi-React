import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import sleep from '../assets/img/tsleep.png';
import play from '../assets/img/tplay.gif';
import food from '../assets/img/tfood.gif';



class HomePage extends React.Component{
  // let _food = null;
  // let _sleep = null;
  // let _play = null;
  constructor(props){
    super(props)
    this.state = {
      selectedOption: 'sleep'
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    console.log('You have selected:', this.state.selectedOption);
  }
  render() {


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
        <button classname="button" type='submit'>Choose One</button>
      </form>
      </div>
    );
  }
}

export default HomePage;
