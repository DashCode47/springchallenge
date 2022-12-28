import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
const AddProvince = () => {
  let navigate = useNavigate();

  const [provinces, setProvinces] = useState({
    province: "",
    canton: "",
    cNumber: null,
  });

  const { province, canton, cNumber } = provinces;

  const onImputChange = (e) => {
    setProvinces({ ...provinces, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/province", provinces);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Create Province</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Province
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter province"
                name="province"
                value={province}
                onChange={(e) => onImputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Canton
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter canton"
                name="canton"
                value={canton}
                onChange={(e) => onImputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                NumberCantons
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter number"
                name="cNumber"
                value={cNumber}
                onChange={(e) => onImputChange(e)}
              />
            </div>

            <Button variant="outline-secondary" type="submit">
              Submit
            </Button>
            <Link className="btn btn-outline-danger mx-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProvince;
