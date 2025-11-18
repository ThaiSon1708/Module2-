import React from 'react';

function SignInForm() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-4 col-sm-6 col-xs-12">
          
          <form className="text-center p-4 border rounded shadow-lg bg-white">
            

            <div className="mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="72" 
                height="57" 
                fill="#6f42c1" 
                className="bi" 
                viewBox="0 0 16 16"
              >
                <rect width="16" height="16" rx="3" ry="3" fill="#6f42c1"/>
              </svg>
            </div>
            
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email address" 
                required
              />
            </div>

            <div className="mb-3">
              <input 
                type="password" 
                className="form-control" 
                placeholder="Password"
                required
              />
            </div>


            <div className="form-check mb-4 text-start">
              <input 
                className="form-check-input" 
                type="checkbox" 
                value="" 
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>

            <button 
              className="w-100 btn btn-lg btn-primary" 
              type="submit"
            >
              Sign in
            </button>
            
            <p className="mt-4 mb-0 text-muted">© 2017–2021</p>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default SignInForm;