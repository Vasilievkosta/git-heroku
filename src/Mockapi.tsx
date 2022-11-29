import React from 'react';
import './App.css';

// type PropsType = {
//   body: string
//   id: number
//   title: string
//   userId: number
// }

function Mockapi() {
  const [planets, setPlanets] = React.useState<any>([]);

  React.useEffect(() => {
    fetch('https://631b6309fae3df4dcffd7df6.mockapi.io/api/items')
      .then((response) => response.json())
      .then(json => setPlanets(json))
  }, [])

  return (
    <div className="App">

      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((el: any) => (
            <tr key={el.id}>
              <td>{el.title}</td>
              <td>{el.price}</td>
              <td>
                <img style={{ width: '80px' }} src={el.imageUrl} alt='pizza' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Mockapi;
