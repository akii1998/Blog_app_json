import React, { useState } from "react";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// wkem5i29

const intialState = {
  title: "",
  descripation: "",
  category: "",
  imageUrl: "",
};

const options = [
  "Weaving",
  "Spinning",
  "Testing",
  "Scouring",
  "Processing",
  "Garment",
  "Finishing",
  "Fiber",
  "Fabric",
  "yarn",
];

const AddEditBlog = () => {
  const [formvalue, setFormvalue] = useState(intialState);

  const [categoryErrorMsg, setCategoryErrorMsg] = useState(null);

  const { title, descripation, category, imageUrl } = formvalue;

  const navigate = useNavigate();

  const handleSubmit = (e) => {};

  const onInputChange = (e) => {};
  const onUploadImage = (file) => {};
  const onCategoryChange = () => {};
  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-blod">Share your Ideals about textile</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <br />
        <MDBInput
          value={title || ""}
          name="title"
          type="text"
          onChange={onInputChange}
          required
          label="Title"
          validation="Please Provide a title"
          invalid
        />
        <br />
        <MDBInput
          value={descripation || " "}
          name="descripation"
          type="text"
          onChange={onInputChange}
          required
          label="Descripation"
          validation="Please Provide a descripation"
          textarea
          rows={4}
          invalid
        />

        <br />
        <MDBInput
          name="title"
          type="file"
          required
          onChange={(e) => onUploadImage(e.target.files)}
          label="Image"
          validation="Please Provide a title"
          invalid
        />
        <br />
        <select
          className="categoryDropdown"
          onChange={onCategoryChange}
          value={category}
        >
          <option> Please select category </option>
          {options.map((option, index) => (
            <option value={option || " "} key={index}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <br />
        <MDBBtn type="submit" style={{ marginRight: "10px" }}>
          Add
        </MDBBtn>
        <MDBBtn
          color="danger"
          style={{ marginRight: "10px" }}
          onClick={() => navigate("/")}
        >
          Go Back
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default AddEditBlog;
