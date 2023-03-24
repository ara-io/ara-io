import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEndpointDetails } from '../api/apiClient';
import './EndpointDetails.css';

const EndpointDetails = () => {
  const { endpointId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEndpointDetails(endpointId);
      setDetails(data);
    };
    fetchData();
  }, [endpointId]);

  return (
    <div className="endpoint-details-container">
      <h2>Endpoint Details</h2>
      {details ? (
        <div className="endpoint-details">
          <div className="endpoint-details-title">{details.name}</div>
          <div className="endpoint-details-row">
            <div className="endpoint-details-label">URL:</div>
            <div className="endpoint-details-value">{details.url}</div>
          </div>
          <div className="endpoint-details-row">
            <div className="endpoint-details-label">Method:</div>
            <div className="endpoint-details-value">{details.method}</div>
          </div>
          <div className="endpoint-details-row">
            <div className="endpoint-details-label">Description:</div>
            <div className="endpoint-details-value">{details.description}</div>
          </div>
          {/* Add more details rows here as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EndpointDetails;

           
