import React from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {

  const {signInUsingGoogle,usingSignWithEmailAndPassword,usingEmail,usingPassword,usingGithub}=useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect = location.state?.from || '/home'

const handleGoogle=()=>{

   signInUsingGoogle()
  .then((result) => {
    history.push(redirect);
  
 })


}


    return (
       
        <div className="container ">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5  fs-5">Sign In</h5>
            
                  <div className="form-floating mb-3">
                    <input onBlur={usingEmail} required type="email" className="form-control bg-info" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Please Enter Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onBlur={usingPassword} required type="password" className="form-control bg-info" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Please Enter Password</label>
                  </div>
    
                  
                  <div className="d-grid">
                    <button onClick={usingSignWithEmailAndPassword} className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
                      
                   
            
                      
                      Sign
                      in</button>
                  </div>
                  <hr className="my-4"/>
                  <div className="d-grid mb-2">
                    <button onClick={handleGoogle} className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                  </div>
                  <div className="d-grid">
                    <button onClick={usingGithub} className="btn 
                    bg-dark btn-facebook btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-facebook-f me-2"></i> Sign in with Github
                    </button>
                  </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
        //    <div className='login text-center'>
               
        //        <h1>Sign In With</h1>
        //        <button type="button" className="btn btn-primary btn-lg">Facebook</button>

        //         <button type="button" className="m-2 btn btn-secondary btn-lg">Google</button>
        //         <input className='text-center m-2' type="text" name="email" placeholder='enter email'  id="" />
        //         <br />
        //         <input className='m-2 text-center' type="password"  placeholder='enter password' name="password" id="" />

        //         <br/>
              
        //         <button type='btn'>Sign In</button>

        //     </div>
        
    );
};

export default Login;