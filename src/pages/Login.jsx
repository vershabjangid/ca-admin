import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Login() {

  let [password_show, password_hide] = useState('password')
  let password_icons_chenge = () => {
    password_hide('text');
  }

  let password_sow = ()=>{
    password_hide('password');
  }

  return (
    <>
      <div className="login p-1">
        <Row className="main_login mx-auto   rounded-4">
          <Col className="col-lg-6 col-12 p-lg-4 pt-5    mt-4">
            <div className="login_logo">
              <img
                width={"100px"}
                height={"90px"}
                src="https://www.shutterstock.com/shutterstock/photos/1686093712/display_1500/stock-vector-ca-logo-design-illustration-vector-art-for-print-1686093712.jpg"
                alt=""
              />
            </div>
            <div className="fw-bold">
              <h2 className="text-capitalize   pt-4 fs-1">
                wellcome back!
              </h2>
              <p className="text-capitalize ms-1">
                please enter log in detals below
              </p>
            </div>
            <div className="login_form">
              <form>
                <input
                  type="Email"
                  placeholder="Email "
                  className="d-block my-3 border-0  ps-2 rounded  py-lg-4 py-2  w-100"
                />
                <div className=" position-relative">
                  <input
                    type={password_show}
                    placeholder="Password "
                    className="d-block my-3 border-0  ps-2 rounded   py-lg-4 py-2 w-100 "
                  />
                  {
                   
                      (password_show  == 'password')
                      ?
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="fs-6 position-absolute icon_password"
                        onClick={() => password_icons_chenge()}
                      />
                      :
                      <FontAwesomeIcon icon={faEye} onClick={() =>password_sow('passsword')} className="fs-6 position-absolute icon_password" />
                  }

                </div>
                <div className="text-end">
                  <p className="fs-5 fw-bold password_forget">
                    Forget Password ?
                  </p>
                </div>
                <Link to={'/dashboard'}>
                  <button className="btn text-light fw-bold fs-4 p-lg-3 p-2 text-center submit_login">
                    Submit
                  </button>
                </Link>
              </form>
            </div>
          </Col>
          <Col className="col-lg-6 d-none d-lg-block  mt-4 pt-4">
            <img
              src="https://i.vimeocdn.com/video/1447123850-31d8db602ef43412a9b4731cf141f6a2c56e17609a1cb13f00b3e4b864dd2e7b-d_640?f=webp"
              alt=""
              width={"100%"}
              height={"80%"}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
