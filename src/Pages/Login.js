/* eslint-disable no-useless-escape */
import React, { Fragment, useState, useEffect } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBCardBody,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import tappzLogo2 from "../images/tappzLogo2.png";
import { useLoginMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
// import { login } from "../actions/userAction";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError }] = useLoginMutation();
  // const location = useLocation();
  // const dispatch = useDispatch();
  const history = useNavigate();
  const user = useSelector((state) => state.users);
  const handleSubmit = (e) => {
    e.preventDefault();
    const pattern =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email === "" || password === "") {
      toast.error("Please fill in all fields", {
        style: { color: "#ed6f6f", fontWeight: "bold" },
      });
      return;
    }
    if (!pattern.test(email)) {
      toast.error("Please enter a valid email", {
        style: { color: "#ed6f6f", fontWeight: "bold" },
      });
      return;
    }
    login({ email, password });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };
  // const redirect = location.search ? location.search.split("=")[1] : "/account";
  useEffect(() => {
    if (user.success) {
      history("/");
    }
    if (isError) {
      toast.error("Invalid email or password", {
        style: { color: "#ed6f6f", fontWeight: "bold" },
      });
    }
    console.log(user);
  }, [user, history, isError]);

  return (
    <Fragment>
      <MDBContainer
        className=" p-3 my-5 d-flex flex-column w-25"
        style={{ boxShadow: "20px 20px 50px grey", borderRadius: "20px" }}
      >
        <MDBCardBody className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-center">
            <MDBCardImage
              style={{ width: 200, height: 100 }}
              src={tappzLogo2}
            />
          </div>

          <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
            Sign into your account
          </h5>

          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formContrSolLg"
            type="password"
            size="lg"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <MDBBtn
            className="mb-4 px-5"
            color="dark"
            size="lg"
            onClick={handleSubmit}
            // disabled={isLoading}
          >
            Login
          </MDBBtn>
          <div className="d-flex justify-content-between  mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <p className="d-flex flex-row justify-content-center mt-5 ">
            Don't have an account? <a href="#!">Register here</a>
          </p>

          <div className="d-flex flex-row justify-content-center">
            <a href="#!" className="small text-muted me-1">
              Terms of use.
            </a>
            <a href="#!" className="small text-muted">
              Privacy policy
            </a>
          </div>
        </MDBCardBody>
      </MDBContainer>
      <Toaster />
    </Fragment>
  );
};

export default Login;
