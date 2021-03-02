import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: contacts.slice(0, 5)
    };
  }

  render() {
    return (
      <div className="App">
        <h2>IronContacts</h2>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </table>
        {/* <tr> */}
        {this.state.people.map((person) => {
          return (
            <tr key={person.id}>
              <td>
                <img className="imgstyle" src={person.pictureUrl}></img>
                {person.name}
                {person.popularity}
              </td>
            </tr>
          );
        })}
        {/* </tr> */}
      </div>
    );
  }
}

export default App;

{
  /* {' '}
            {this.state.people.map((name) => {
              return <td key={name}>{name}</td>;
            })} */
}

// {this.state.people.map((person) => {
//   return (
//     <tr key={person.id}>
//       <td>{this.person.pictureURL}</td>
//       <td>{this.person.name}</td>
//       <td>{this.person.popularity}</td>
//     </tr>

// render() {
//   return (
//     <div className="App">
//       <h2>IronContacts</h2>
//       <table>
//         <tr>
//           <th>Picture</th>
//           <th>Name</th>
//           <th>Popularity</th>
//         </tr>
//         {/* <tr> */}
//         {this.state.people.map((person) => {
//           return (
//             <tr key={person.id}>
//               {/* <td>{this.person.pictureUrl}</td> */}
//               <td>{this.person.name}</td>
//               <td>{this.person.popularity}</td>
//             </tr>
//           );
//         })}
//         {/* </tr> */}
//       </table>
//     </div>
//   );
// }
// }

{
  /* <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {/* <tr> */
}
{
  /* {this.state.people.map((person) => {
            return (
              <tr key={person.id}> */
}
{
  /* <td>{this.person.pictureUrl}</td> */
}
{
  /* <td>{this.person.name}</td>
                <td>{this.person.popularity}</td>
              </tr>
            );
          })} */
}
{
  /* </tr> */
}
{
  /* </table> */
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
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
