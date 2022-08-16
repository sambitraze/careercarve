import React, { useState, useEffect } from 'react';
function Home() {
    const [login, setLogin] = useState(false);
    // fetch data from local storage
    const firstName = localStorage.getItem('First');
    const lastName = localStorage.getItem('Last');
    const email = localStorage.getItem('Email');
    // login = localStorage.getItem('Login');
    useEffect(() => {
        console.log('useEffect',);
        setLogin(localStorage.getItem('Login'));
        console.log(login);
    }, [login]);

    //set login state
    if (login === 'true') {
        return (
            <> <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Dashboard</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text">This is the Dashboard</p>
                                <p className="card-text">First Name: {firstName}</p>
                                <p className="card-text">Last Name: {lastName}</p>
                                <p className="card-text">Email: {email}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Trainings</h4>
                            </div>
                            <div className="card-body">
                                <p className="card-text">T1 <a href="/t1">Visit</a></p>
                                <p className="card-text">T2 <a href="/t2">Visit</a></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Home</h4>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">This is the home page</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Home;