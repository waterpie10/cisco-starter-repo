import React, { useState, useEffect } from 'react';

const IpAddress = ({ version }) => {
  const [ip, setIp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpoint = version === 'v6' ? '/api/ip6' : '/api/ip4';

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error('Fetch error');
        return res.json();
      })
      .then((data) => setIp(data.ip))
      .catch((err) => setError(err.message));
  }, [version]);

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Public IP{version === 'v6' ? 'v6' : 'v4'} Address</h3>
      {ip ? <p>{ip}</p> : <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );  
};

export default IpAddress;
