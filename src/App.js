import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <div>
          <table>
            <tr>
              <th>User Name</th>
              <th>Company Name</th>
              <th>Email Address</th>
              <th>City Name</th>
            </tr>
            <tr>
              <td>{user.name}</td>
              <td>{user.company.name}</td>
              <td>{user.email}</td>
              <td> {user.address.city}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

export default App;
