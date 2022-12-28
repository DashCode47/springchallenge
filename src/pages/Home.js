import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [provinces, setProvinces] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProvinces();
  }, []);

  const loadProvinces = async () => {
    const result = await axios.get("http://localhost:8080/provinces");
    setProvinces(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/province/${id}`);
    loadProvinces();
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
                <td>
                  <Link className="btn btn-outline-primary mx-2" to={"/view"}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edit/${province.id}`}
                  >
                    Edit
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => deleteUser(province.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
