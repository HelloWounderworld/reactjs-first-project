import logo from '../../logo.svg';
import './App.css';
import { Component } from 'react';
import { Content } from '../Content'

class App extends Component {

  goToContentPage() {
    // Access Content page!
    alert('Vai para a página Content!');
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Please. Click the button below!
          </p>
          <button onClick = {this.goToContentPage}>Content Page</button>
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

export default App;
