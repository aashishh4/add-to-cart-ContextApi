import { useCounter } from "./Context"
function Home() {
    const { Counter, Increment, Decrement } = useCounter();
    return (
      <div>
        <h1>Home page</h1>
        <p>Counter: {Counter}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    );
  }
  
  export default Home;