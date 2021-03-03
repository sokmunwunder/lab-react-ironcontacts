import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      people: contacts.slice(0, 5)
    };
  }

  addRandomContact = () => {
    const uniqueContacts = contacts.filter(
      (contact) => !this.state.people.includes(contact)
    );
    const person =
      uniqueContacts[Math.floor(Math.random() * uniqueContacts.length)];
    const people = [...this.state.people];
    people.push(person);
    this.setState({
      clicked: this.state.clicked,
      people: people
    });
  };

  sortByName = () => {
    const people = this.state.people;
    const sortedPeople = [...people];
    sortedPeople.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      clicked: this.state.clicked,
      people: sortedPeople
    });
  };

  sortByPopularity = () => {
    const people = this.state.people;
    const sortedPeople = [...people];
    sortedPeople.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      clicked: this.state.clicked,
      people: sortedPeople
    });
  };

  deleteFunction = () => {
    const people = this.state.people;
    const indexCelebrity = people.findIndex(
      function (person, index, array) {
        return person.name === people.name;
        // function (value, index, ) {
        //   return value.name === this.value.name;
      }
      // (person) => this.state.people.name === person.name
    );
    console.log(indexCelebrity);
    people.splice(indexCelebrity, 1);
    //const newArray = [...people];
    this.setState({
      clicked: this.state.clicked,
      people: people
    });
  };

  // deleteFunction = () => {
  //   const people = this.state.people;
  //   people.findIndex(function (name, index) {
  //     return people.index.delete;
  //   });
  //   this.setState({
  //     clicked: this.state.clicked,
  //     people: people
  //   });
  // };

  render() {
    return (
      <div className="App">
        <h2>IronContacts</h2>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table className="tablestyling">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {/* </table> */}
          {/* <tr> */}
          {this.state.people.map((person) => {
            return (
              <tr key={person.id}>
                <td>
                  <img className="imgstyle" src={person.pictureUrl}></img>
                  {person.name}
                  {person.popularity}
                  <button onClick={this.deleteFunction}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
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
