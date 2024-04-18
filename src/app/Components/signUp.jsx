import React from "react";
import { useState } from "react";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="col-md-6 mx-auto">
      <div className="text-center mb-4">
        <button type="button" className="btn btn-outline-primary me-2">
          <FcGoogle />
          <span style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            Continue with Google
          </span>
        </button>
        <button type="button" className="btn btn-outline-primary mt-3 me-2">
          <FaFacebook />

          <span style={{ paddingLeft: "40px", paddingRight: "40px" }}>
            Continue with Facebook
          </span>
        </button>
      </div>

      <div className="d-flex align-items-center justify-content-center my-3">
        <hr className="flex-grow-1" />
        <p className="mx-2 mb-0">or connect with</p>
        <hr className="flex-grow-1" />
      </div>

      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
        <div className="input-group">
        <input
          type={showPassword ? 'text' : 'password'}
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Password"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="togglePassword"
          onClick={togglePasswordVisibility}
        >
         {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
        </div>
        <p className="text-end text-sm ">password strength</p>

        <div className="mb-3 d-flex justify-content-between">
          <p style={{ fontSize: '0.75rem' }} >
            by continuing you agree to our Term and services and privacy policy
          </p>
        </div>

        <button type="button" className="btn  btn-primary w-100">
          Agree and continue
        </button>
      </form>
    </div>
  );
};

export default SignUp;
