import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Login = (props) => {
  const [passType, setPassType] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [popUp, setPopUp] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async () => {

    setTimeout(()=>{
      setPopUp('Incorrect Username or Password');
    },500);
    setPassType(false);
    setUserName('');
    setPassword('');
  }

  function handleShow() {
    console.log("Entering handleShow");
    setPassType(!passType);

  }
  function handleUserName(e) {
    setUserName(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function goToPhone(passedType) {
    navigate('phone');
  }



  return (
    <>

      <div className="conatiner bg-dark w-50 m-auto text-center text-light position-relative" style={{  top: '5vw', fontSize: '3vw',  borderRadius: '3vw', paddingTop: '2vw', height: '35vw' }}>
        <div className="fw-bold text-decoration-underline text-warning">Login</div>
        <form>
          <table className="table text-light table-borderless" style={{ marginTop: '2vw' }}>
            <tbody>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw', lineHeight: '0.2vw', position: 'relative', right: '5vw' }} className="text-danger fw-bold" >{popUp}</td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}} >Username: </td>
                <td ><input type="text" className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handleUserName} value={userName} id="userName" placeholder="Enter your full name" /></td>
              </tr>
              <tr>
                <td className="text-end" style={{ fontSize:'2.5vw'}}>Password: </td>
                <td ><input type={passType ? "text" : "password"} className="form-control w-75" style={{ height: '4vw', fontSize: '2vw', padding: '1vw' }} onChange={handlePassword} value={password} id="password" placeholder="Enter your password" /></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw' }} >Show Password<input onChange={handleShow} checked={passType} type="checkbox" className="form-check-input" style={{ padding: '0.5vw', marginLeft: '1vw' }} id="passType" /></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ fontSize: '1.5vw', lineHeight: '0.2vw' }} id='link1' ><a onClick={() =>  {<Link className="nav-link active" to={"/register"}></Link> }} className="link-warning hovPoint">New here? Create an account</a></td>
              </tr>
              <tr>
                <td colSpan="2"><button type="button" className="btn btn-warning" onClick={handleLogin} style={{ fontSize: '2vw', padding: '0vw 1vw' }}>Login</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default Login;