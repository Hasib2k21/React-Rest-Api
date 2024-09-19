import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this URL with your actual REST API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setData(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {data.map((item) => (
          <CardComponent
            key={item.id}
            image={item.thumbnail}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
