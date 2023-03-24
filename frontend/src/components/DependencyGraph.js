import React, { useEffect, useState } from 'react';
import { getDependencyGraph } from '../api/apiClient';
import './DependencyGraph.css';

const DependencyGraph = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDependencyGraph();
      setNodes(data.nodes);
      setEdges(data.edges);
    };
    fetchData();
  }, []);

  return (
    <div className="dependency-graph-container">
      <h2>Dependency Graph</h2>
      <div className="dependency-graph">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="dependency-graph-node"
            style={{ top: node.top, left: node.left }}
          >
            {node.label}
          </div>
        ))}
        {edges.map((edge, index) => {
          const fromNode = nodes.find((node) => node.id === edge.from);
          const toNode = nodes.find((node) => node.id === edge.to);

          const deltaX = toNode.left - fromNode.left;
          const deltaY = toNode.top - fromNode.top;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

          return (
            <div
              key={index}
              className="dependency-graph-edge"
              style={{
                top: fromNode.top + 20,
                left: fromNode.left + 50,
                height: distance,
                transform: `rotate(${angle}deg)`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default DependencyGraph;
