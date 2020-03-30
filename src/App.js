import React,{useState} from 'react';
import Tweet from './Tweet';
function App(){

  const [isRed,setRed] = useState(false);
  const [count,setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
    setRed(!isRed);
  }

  const [users,setUsers] = useState([
    {name:'Ryan',message:'Hello'},
    {name:'Summer',message:'there'},
    {name:'Winter',message:'my friend'},
  ])

  return(
  
    <div className="app">
      <h1 className={ isRed ? 'red':'' }>Change my Color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

      {users.map(user => (
        <Tweet key={user.name} name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;