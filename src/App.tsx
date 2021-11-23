import React from 'react';

import './App.css';
//import './Appp.css';
import LoginForm from '../src/components/loginForm'
import Login1 from '../src/components/Login1'
import Log from '../src/components/Log'
function App() {
  return (
    <div className="App">
      <section className='login-bg hero is-fullheight' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-body" style={{ width: '100%' }}>
          <div className="columns">
            <div className="grid-container">
              <div className="item2">Image</div>
              <div className="item3">
                <div className="card">
                  <div className="card-header">
                    <div className="card-content">
                      <LoginForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
