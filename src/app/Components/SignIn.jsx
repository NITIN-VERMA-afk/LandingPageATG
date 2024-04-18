
import React, { useState } from 'react'
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const SignIn = () => {
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

        <div className="mb-3 d-flex justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Remember me"
            />
            <label className="form-check-label" htmlFor="rememberMeCheck">
              Remember me
            </label>
          </div>
          <p className="mb-0">
            <CiLock /> Forgot password?
          </p>
        </div>

        <button type="submit" className="btn btn-outline-primary w-100">
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignIn;
