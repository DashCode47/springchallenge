import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    loadProvinces();
  }, []);

  const loadProvinces = async () => {
    const result = await axios.get("http://localhost:8080/provinces");
    setProvinces(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Province</th>
              <th>Canton</th>
              <th>NumberCantons</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {provinces.map((province, index) => (
              <tr>
                <td key={index}>{index + 1}</td>
                <td>{province.province}</td>
                <td>{province.canton}</td>
                <td>{province.cNumber}</td>
                <Button variant="primary">View</Button>
                <Button variant="warning">Edit</Button>
                <Button variant="danger">Delete</Button>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
