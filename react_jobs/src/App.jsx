import React from 'react'


const App = () => {
  const name = "achraf";
  const x = 10;
  const y = 20;
  const names = ["brad", "mary", "joe", "sara"];
  const loggedIn = true;
  const styles = {
    color : "red",
    fontSize: "55px"
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}>hello {name}</p>
      <p>
        the sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) =>(
          <li key ={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>hello member</h1> : <h1>hello guest</h1>}
    </>
  )
   
}

export default App

