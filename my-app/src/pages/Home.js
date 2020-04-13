import React, { useState } from 'react';
import Nav from '../components/Nav';
import SignUpModal from '../components/SignUpModal';

export default () => {
    const [modalState, setModalState] = useState(false)
    return (
    <div className="maincontainer">
        <Nav currentPage='home' />
        <div className="subcontainer">
        
        <div className="content">
          <div className="header">Business <br /> Stragegy</div>
          <div className="text">
            Lorem ipsum dolor sit amet,consecterur adipiscing elit, Sed to eiusmod temper
            incididunt ut labore et dolore magna aliqua.
          </div>
          <button className="start-btn" onClick={() => setModalState(true)}>
            GET STARTED
          </button>
        </div>
        <SignUpModal modalState={modalState} setModalState={setModalState} />
        </div>
    </div>
  );
}