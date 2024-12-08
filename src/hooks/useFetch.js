import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that endpoint!");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setData(data);
        setError(null);
      })
      .catch (err => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
    
    return () => abortController.abort();
  }, [url]);

  return { data, error };
}

export default useFetch;