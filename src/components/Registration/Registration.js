import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Registration.css'

const Registration = () => {
    const {email,password,usingEmailAndPassword,usingEmail,usingPassword}=useAuth();
    console.log(email,password);
    return (
        
           <div>
               <div className="container  p-0">
    <div className="card  px-4">
        <p className="h8 py-3">Register</p>
        <div className="row gx-3">
            <div className="col-12">
                <div className="d-flex mb-2 flex-column">
                    <input  type="text" placeholder='enter email' onBlur={usingEmail}/>
                </div>
            </div>
            <div className="col-12">
                <div className="d-flex mb-2 flex-column">
                   <input type="password" placeholder='enter password' onBlur={usingPassword} />
                </div>
            </div>
          
          
            <div className="col-12">
                <button onClick={usingEmailAndPassword} className=" btn btn-primary mb-3"> <span className="ps-3">Register</span> <span className="fas fa-arrow-right"></span> </button>
            </div>
        </div>
    </div>
</div>
           </div>
    );
};

export default Registration;