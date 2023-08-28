import { useState } from "react";
import useFetchUsers from "./hooks/useFetchUsers";

const App = () => {
  const [counter, setCounter] = useState(0);
  const { users } = useFetchUsers("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <h1>Use effect practice</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
