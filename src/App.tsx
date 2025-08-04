// import React from "react";
import "./App.css";

type UserProps = {
  name: string;
  age: number;
};

const UserCard: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, TSX!</h1>
      <UserCard name="Maryan" age={25} />
    </div>
  );
};

export default App;
