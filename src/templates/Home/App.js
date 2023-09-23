import logo from '../../logo.svg';
import './App.css';
import { Component } from 'react';
import { Menu } from '../../components/Menu'

export default class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Please, choose one of the two buttons below!
          </p>
          <Menu />
        </header>
      </div>
    );
  }
}

// Deafult configuration to render by npx create-react-app.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button>Content</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
