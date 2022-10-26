import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Col,
  Row,
  Jumbotron,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import validator from "validator";
import React, { useState } from "react";

export default function PhoneForm({ addItems }) {
  const [item, setItem] = useState({
    phonename: "",
    version: "",
    price: "",
    date: "",
  });
  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(item);
    addItems(item);
    setItem({ phonename: "", version: "", price: "", date: "" });
    return false;
  };
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  const isNumber = (val) => !isNaN(Number(val));

  const validyear = (val) => validator.isDate(val);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-9">
          <LocalForm onSubmit={handleSubmit}>
            <Row className="form-group">
              <Label htmlFor="phonename" md={2}>
                Phone name
              </Label>

              <Col md={10}>
                <Control.text
                  values={item.phonename}
                  model=".phonename"
                  id="phonename"
                  name="phonename"
                  placeholder="Phone name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                  onChange={handleChange}
                />

                <Errors
                  className="text-danger"
                  model=".phonename"
                  show="touched"
                  messages={{
                    required: "Required",

                    minLength: "Must be greater than 2 characters",

                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="version" md={2}>
                Version
              </Label>

              <Col md={10}>
                <Control.text
                  values={item.version}
                  model=".version"
                  id="version"
                  name="version"
                  placeholder="Version"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                  onChange={handleChange}
                />

                <Errors
                  className="text-danger"
                  model=".version"
                  show="touched"
                  messages={{
                    required: "Required",

                    minLength: "Must be greater than 2 characters",

                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="price" md={2}>
                Price
              </Label>

              <Col md={10}>
                <Control.text
                  values={item.price}
                  model=".price"
                  id="price"
                  name="price"
                  placeholder="Price"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                  onChange={handleChange}
                />

                <Errors
                  className="text-danger"
                  model=".price"
                  show="touched"
                  messages={{
                    required: "Required",

                    minLength: "Must be greater than 2 numbers",

                    maxLength: "Must be 15 numbers or less",

                    isNumber: "Must be a number",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="date" md={2}>
                Release Date
              </Label>

              <Col md={10}>
                <Control.text
                  values={item.date}
                  type="date"
                  model=".date"
                  id="date"
                  name="date"
                  placeholder="date"
                  className="form-control"
                  validators={{
                    required,
                    validyear,
                  }}
                  onChange={handleChange}
                />

                <Errors
                  className="text-danger"
                  model=".date"
                  show="touched"
                  messages={{
                    required: "Required",

                    validyear: "Invalid years",
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Add
                </Button>
                <Button type="reset" color="secondary">
                  Cancel
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      </div>
    </div>
  );
}
