import React from "react";
import {
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
// import  {CIcon}  from '@coreui/icons-react';
// import { CIcon,cilList, cilShieldAlt } from '@coreui/icons';

function Login() {

  let navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = userData;

    const onChangeHandler = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (JSON.parse(localStorage.getItem("token").role == "admin")) {
                navigate("/admin");
            } else {
                navigate("/user");
            }
        }   
    }, [])
    const onSubmitHandler = async (e) => {
        try {
            //Prevents Refreshing the Form
            e.preventDefault();
            // console.log(userData);
            let res = await axios.post("/api/login", userData);
            // console.log(res.data);
            localStorage.setItem("token", JSON.stringify({ token: res.data.token, role: res.data.role }))
            if (res.data.role == "admin") {
                navigate("/admin");
            } else {
                navigate("/user");
            }
            showAlert({
                type: "success",
                msg: res.data.success
            })
        } catch (error) {

            if (error.response.data.errors) {
                //Handling Express Validators
                let errorString = "";
                error.response.data.errors.forEach((ele) => {
                    errorString += ele.msg
                })
                showAlert({
                    type: "error",
                    msg: errorString
                })
            } else {
                //Custom Errors
                showAlert({
                    type: "error",
                    msg: error.response.data.error
                })
            }
            // console.log("Catch")
            console.log(error.response.data.error);
        }
    }

  return (
    <>
      <div className="login-flex background-radial-gradient">
        <div className="text-login">
          <h1 id="logo" style={{ color: "hsl(218, 81%, 95%)" }}>
            {" "}
            SAHULAT
            <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>Micro-Finance</span>
          </h1>
          <p style={{ color: "hsl(218, 81%, 85%)" }}>
            SAHULAT MICROFINANCE SOCIETY (Regd. under the Societies Registration
            Act, 1860) is a voluntary non-political, non-profit making social
            service organization established in 2010. Sahulat was formed for the
            sole purpose of promoting interest-free microfinance (IFMF)
            activities in India. It establishes IFMF institutions under credit
            cooperative format as a sector. Currently there are 42 legal
            entities and 87 branches who are affiliated with Sahulat through a
            memorandum of cooperation. These legal entities are registered under
            various cooperative acts enacted by state and central government.
          </p>
        </div>
        

        <div className="form-card">
        
          <h3 style={{ color: "hsl(218, 81%, 75%)" , textAlign: "center",fontWeight:'bolder',fontSize:'38px' }}>Login</h3>

          <CInputGroup className="login-form">
            <CInputGroupText
              style={{
                border: "black 1px solid",
                borderRadius: "8px 0px 0px 8px ",
              }}
              id="basic-addon1"
            >
              👤
            </CInputGroupText>
            <CFormInput
              style={{
                border: "black 1px solid",
                borderRadius: "0px 8px 8px 0px",
                width: "100%",
              }}
              id="floatingInputInvalid"
              placeholder="User name"
              floatingLabel="User Name"
              name="username"
            />
          </CInputGroup>
          <CInputGroup className="login-form">
            <CInputGroupText
              style={{
                border: "black 1px solid",
                borderRadius: "8px 0px 0px 8px",
              }}
              id="basic-addon1"
            >
              🔑
            </CInputGroupText>
            <CFormInput
              style={{
                border: "black 1px solid",
                borderRadius: "0px 8px 8px 0px",
                width:'100%'
              }}
              id="floatingInputInvalid"
              placeholder="Password"
              floatingLabel="Password"
              type="password"
            />
            <br />
          </CInputGroup>
          <center>
            {" "}
            <CButton
              component="input"
              type="submit"
              style={{
                background: "#2364aa",
                margin: "0px 0px 0px 0px",
                padding: "8px 30px",
                borderRadius: "8px",
                fontWeight: "bolder",
              }}
              value="Login"
            />
          </center>
          <div
          id="radius-shape-1"
          className="position-absolute rounded-circle shadow-5-strong"
        ></div>
        <div
          id="radius-shape-2"
          className="position-absolute shadow-5-strong"
        ></div>
        </div>
      </div>
    </>
  );
}

export default Login;
