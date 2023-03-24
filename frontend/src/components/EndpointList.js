import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchEndpoints } from '../api/apiClient';
import './EndpointList.css';

const EndpointList = ({ searchQuery }) => {
  const [endpoints, setEndpoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchEndpoints(searchQuery);
      setEndpoints(data);
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div className="endpoint-list-container">
      <h2>Endpoints</h2>
      <div className="endpoint-list">
        {endpoints.map((endpoint) => (
          <div key={endpoint.id} className="endpoint-list-item">
            <div className="endpoint-list-item-name">
              <Link to={`/endpoints/${endpoint.id}`}>{endpoint.name}</Link>
            </div>
            <div className="endpoint-list-item-url">{endpoint.url}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EndpointList;
