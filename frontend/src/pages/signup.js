import React from 'react'
function SignUp() {
    const handleSignup = (event) => {
        // event.preventDefault();
        localStorage.setItem('Login', false);
    }
    const handleFirstName = (event) => {
        event.preventDefault();
        localStorage.setItem('First', event.target.value);
    }
    const handleLastName = (event) => {
        event.preventDefault();
        localStorage.setItem('Last', event.target.value);
    }
    const handleEmail = (event) => {
        event.preventDefault();
        localStorage.setItem('Email', event.target.value);
    }
    return (
        <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
                <label>First name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    onChange={handleFirstName}
                />
            </div>
            <div className="mb-3">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name"
                    onChange={handleLastName} />
            </div>
            <div className="mb-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={handleEmail}
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleSignup}>
                    Sign Up
                </button>
            </div>
            <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
            </p>
        </form>
    )
}

export default SignUp;