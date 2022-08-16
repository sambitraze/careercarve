import React from 'react'
function Login() {
    const handleLogin = (event) => {
        // event.preventDefault();
        localStorage.setItem('Login', true);
    }
    return (
        <form>
            <h3>Sign In</h3>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                    Login
                </button>
            </div>
            <p className="forgot-password text-right">
                Not registered <a href="/sign-up">sign up?</a>
            </p>
        </form>
    );
}

export default Login;