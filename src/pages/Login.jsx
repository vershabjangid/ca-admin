import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";

export function Login() {
  return (
    <>
      <div className="login pt-5">
        <Row className="main_login mx-auto rounded-4 mt-4">
          <Col className="col-6 p-5 mt-4">
            <div className="login_logo ps-5">
              <img
                width={"100px"}
                height={"90px"}
                src="https://www.shutterstock.com/shutterstock/photos/1686093712/display_1500/stock-vector-ca-logo-design-illustration-vector-art-for-print-1686093712.jpg"
                alt=""
              />
            </div>
            <div className="fw-bold">
              <h2 className="text-capitalize  ps-5 pt-4 fs-1">
                wellcome back!
              </h2>
              <p className="text-capitalize ps-5 ms-1">
                please enter log in detals below
              </p>
            </div>
            <div className="login_form">
              <form>
                <input
                  type="Email"
                  placeholder="Email "
                  className="d-block my-3 border-0  ps-2 rounded  py-4 ms-5 w-75 "
                />
                <div className=" position-relative">
                  <input
                    type="password"
                    placeholder="Password "
                    className="d-block my-3 border-0  ps-2 rounded  py-4 ms-5 w-75 "
                  />
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="fs-6 position-absolute icon_password"
                  />
                </div>
                <div className="text-end pe-5">
                    <p className="fs-5 fw-bold pe-5 me-4 password_forget">
                        Forget Password ? 
                    </p>
                </div>
                <div className="ps-5 ">
                    <button className="btn text-light fw-bold fs-4 p-3  text-center submit_login">
                        Submit
                    </button>
                </div>
               
              </form>
            </div>
          </Col>
          <Col className="col-6 mt-5 pt-4">
            <img
              src="https://i.vimeocdn.com/video/1447123850-31d8db602ef43412a9b4731cf141f6a2c56e17609a1cb13f00b3e4b864dd2e7b-d_640?f=webp"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
