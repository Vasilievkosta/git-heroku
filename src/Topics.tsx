import React from 'react';
import './App.css';

// type PropsType = {
//   body: string
//   id: number
//   title: string
//   userId: number
// }

function Topics() {
  const [planets, setPlanets] = React.useState<any>({});

  React.useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then(json => setPlanets(json))
  }, [])

  let arr: any[] = planets.results;


  return (
    <div className="App">

      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>diameter</th>
            <th>climate</th>
            <th>orbital_period</th>
          </tr>
        </thead>
        <tbody>
          {arr && arr.map((el, index: number) => (
            <tr key={index}>
              <td>{el.name}</td>
              <td>{el.diameter}</td>
              <td>{el.climate}</td>
              <td>{el.orbital_period}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Topics;
