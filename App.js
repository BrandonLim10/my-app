import React from 'react'; 
import './App.css';
// import Item from './MyItem';


class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      image: "",
      wiki: "",
    }
  }

  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
      name: data.name,
      height: data.height,
      homeworld: data.homeworld,
      image: data.image,
      wiki: data.wiki,
      loadedCharacter: true,
    })
    })

  }
  render() {
    return (
      <div>
        {
          this.state.loadedCharacter &&
            <div>
                <img src={this.state.image} className='img' alt=''/>
                <h1>{this.state.name}</h1>
                <p>{this.state.height}cm</p>
                <p>Homeworld: {this.state.homeworld}</p>
                <p><a href={this.state.wiki}>Wiki</a></p>
            </div>  
        }
        
        <button 
        type="button" 
        onClick={() => this.getNewCharacter()} 
        className="btn">
          Randomize Character
          </button>
      </div>
      
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <StarWars />
      </header>
    </div>
  );
}

export default App;
