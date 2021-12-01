import React, { useState } from 'react';
//import './App.css';
//import './Appp.css';
import LoginForm from '../src/components/loginForm'
import Login1 from '../src/components/Login1'
import Log from '../src/components/Log'
import Logg from '../src/components/Logg'
import FinalForm from './components/FinalForm'
import DashBoard from './DashBoard/DashBoard'
import LoginData from './data/LoginData'
const layout = { TeamID: '', UserName: '', Password: '' }
function App() {
  const [submittedValues, setsubmittedValues] = useState(layout)
  console.log("img", submittedValues)
  return (
    <div className="App">
      {LoginData.teamID == submittedValues.TeamID && LoginData.userName == submittedValues.UserName && LoginData.password == submittedValues.Password ? <DashBoard /> : <FinalForm submittedValues={submittedValues} setsubmittedValues={setsubmittedValues} />}
    </div>
  );
}

export default App;



{/* <div className="App">
<section className='login-bg hero is-fullheight' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <div className="hero-body" style={{ width: '100%' }}>
    <div className="columns">
      <div className="grid-container">
        <div className="item2">Image</div>
        <div className="item3">
          <div className="card">
            <div className="card-header">
              <div className="card-content">
                <Log />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div> */}


