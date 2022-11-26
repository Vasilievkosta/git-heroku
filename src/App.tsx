import React from 'react';
import './App.css';

type PropsType = {
  body: string
  id: number
  title: string
  userId: number
}

function App() {
  const [state, setState] = React.useState<PropsType[]>([]);
  console.log(state);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(json => setState(json))
  }, [])

  const deleteHandler = () => {
    setState([])
  }
  const showPostHandler = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(json => setState(json))
  }

  return (
    <div className="App">
      <button className="btn" onClick={deleteHandler}>DELETE</button>
      <button className="btn" onClick={showPostHandler}>SHOW POST</button>
      
	  
	  <table className="table">
            <thead>
                <tr>                    
                    <th>id</th>
                    <th>userId</th>
					<th>title</th>
                </tr>
            </thead>
            <tbody>
                {state.map(el => (
                    <tr key={el.id}>
						<td>{el.id}</td>
                        <td>{el.userId}</td>
                        <td>{el.title}</td>
					</tr>
                ))}
            </tbody>
        </table>

    </div>
  );
}

export default App;
