import './App.css';
import React from 'react';
import Header from './Header'
import Update from './Update'
import Footer from './Footer'
import Card from './Visibility'
import Modal from './Modal'
import Doc from './Doc.js'

function App() {

  const [modalActive, setModalActive] = React.useState(false);

  return (
    <div className="front">
     <Header/>
      <Card/>
      <Update/>
      <Footer/>
      <Modal active = {modalActive} setActive = {setModalActive}>
        <p>hi</p>
        </Modal>
      {/* <button className = 'open-btn' onClick={() => setModalActive(true)}></button> */}
    </div>
  );
}

export default App;
