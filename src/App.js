import './App.css';
import React, { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data;

    setData(item);
    setLoading(false);

  }, []);
  return { data, loading };
};
export default () => {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>

      {loading ? <div> <h3>loading...</h3></div> :
        <div>
          <h3>The Number of Random Posts are:</h3>
          <ul>
            {data.map(post => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>

              </li>

            ))}
          </ul>


        </div>}
    </div>
  );
}


