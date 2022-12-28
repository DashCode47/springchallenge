import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const { id } = useParams();
  const [provinces, setProvince] = useState({
    province: "",
    canton: "",
    cNumber: null,
  });

  useEffect(() => {
    console.log(id);
    loadProvince();
  }, []);

  const loadProvince = async () => {
    const result = await axios.get(`http://localhost:8080/province/${id}`);

    setProvince(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Province Details</h2>

          <div className="card">
            <div className="card-header">
              Detalles de la provincia:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {provinces.province}
                </li>

                <li className="list-group-item">
                  <b>Canton:</b>
                  {provinces.canton}
                </li>

                <li className="list-group-item">
                  <b>nCantones:</b>
                  {provinces.cNumber}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Atras
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
