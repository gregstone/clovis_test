import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import ListInfo from './ListInfo';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:1337/api/projects")
      .then((res) => {
        this.setState({ list: res.data })
        console.log(res)
      })
  }








  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="RequestWrapper">
          {this.state.list.map(data => <ListInfo name={data.name} key={data.id} image={data.image} />)}
        </div>








      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gifts: []
//     };

//     this.removeGift = this.removeGift.bind(this);
//   }

//   updateGifts(){
//     axios.get('http://localhost:3001/').then((res) => {
//       this.setState({
//         gifts: res.data.gifts
//       })
//     })
//   }

//   handleAdd(){
//     this.updateGifts();
//   }

//   removeGift() {

//   }

//   sendList(){
//     axios
//     .post("http://localhost:3001/sendList",{
//       list: this.state.gifts
//       // list: 'bob'
//     })
//     .then(res => {
//       // je sais pas si cela sert ici
//       this.props.add();
//     });

//   }

//   componentDidMount() {
//     this.updateGifts();
//     setInterval(() => this.updateGifts(), 3000);
//   }

//   render() {
//     return (
//       <MuiThemeProvider>

//       <div className="App">
//       <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1 className="App-title">It s Christmas !</h1>
//       </header>

//       <button type="button" className="mail" onClick={this.sendList.bind(this)}> Dear Santa Florian, send me my gifts</button>

//       <GiftForm add={this.handleAdd.bind(this)}/>

//       <div><p>Pas réussi à bien supprimer le gift en cliquant sur la croix : le axios.delete est ok mais dans le front je refresh pas la liste immédiatement</p></div>
//       <div><p>Je dois faire remonter l event du composant Gift vers le composant App</p></div>
//       <div><p>Mon seeder sequelize met des prénoms en name et description</p></div>
//       <div><p>Le mail part et arrive sur mon mailtrap</p></div>
//       <div className="GiftWrapper" onClick={this.handleAllClickEvents}>
//       {this.state.gifts.map(gift => <Gift name={gift.name} description={gift.description} id={gift.id} key={gift.id} />)}
//       </div>


//       </div>
//       </MuiThemeProvider>

//     );
//   }
// }

// export default App;
