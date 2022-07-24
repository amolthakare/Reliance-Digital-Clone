import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import styles from '../SignUp/SignUp.module.css';

const Signup = () => {
    const [formInfo, setFormInfo] = useState({
        email: "",
        password: ""
      });
    
      const navigate = useNavigate();
      const authenticate = useContext(AppContext);
    
      const handlleChange = (e) => {
        const { name, value } = e.target;
        setFormInfo({
          ...formInfo,
          [name]: value
        });
      };
    
      const handelSubmit = (event) => {
        event.preventDefault();
        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formInfo)
        })
          .then((res) => res.json())
          .then((res) => {
            authenticate.handelLogin(res.token);
            navigate("/cart");
            console.log(res);
          });
      };


  return (
    <div>
      <form className={styles.form}>
        <h2>Sign Up</h2>
        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">Name</label>
          <input type="email"
              placeholder="email"
              value={formInfo.email}
              onChange={handlleChange}
              name="email" className="form-control" id="exampleInputName1" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input value={formInfo.password}
              onChange={handlleChange}
              type="password"
              placeholder="password"
              name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div className="d-grid gap-2 col-6">
          <button
          onClick={handelSubmit}
           className="btn btn-dark" type="button">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;