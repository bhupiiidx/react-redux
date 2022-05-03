import "./App.css";
import { Link } from "react-router-dom";
import Routing from "./Routing";


function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to="/view-user">View Users</Link>
        <Link to="/add-user">Add User</Link>
        <Link to="/delete-user">Delete User</Link>
      </div>
      <Routing />
    </>
  );
}

export default App;
