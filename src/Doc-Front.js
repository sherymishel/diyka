import React from 'react'
import Modal from './Modal'

/*function kui(e) {
    const emm = document.querySelector('.doc__front');
    const points = document.querySelector('.added');
     emm.style.visibility = 'hidden';
     points.classList.add('notactive'); 
     setTimeout(() => {emm.style.visibility = 'visible'; points.classList.remove('notactive')}, 3000);
}*/

/*const kui = (e) => {
    e.target.style.visibility = 'hidden';
     console.log(e, 1);
     setTimeout(() => {e.target.style.visibility = 'visible'}, 3000);
};*/

function Docfront() {
    //const [modalActive, setModalActive] = React.useState(false);

    return(
        <>
        <div className="doc__front docDef">
        <p className="doc__name item"> Паспорт громадянина <br /> України</p>
        <div className="doc__picture item"> <img src="https://visatimes.ru/wp-content/uploads/2018/12/foto-na-pasport-rf.jpg" alt="" /></div>
        <div className="doc__info item"> 
          <p> Дата <br /> народження: <br /> 07.07.2001 <br />
            <br />
            Номер: <br /> 0013457328</p>
        </div>
        <div className="doc__sign item"> <img src="./imgs/sign.jpg" alt="" /> </div>
        <p className="doc__owner"> Іванова <br /> Катерина</p>
        
        <div className = 'open-btn doc__full item'> </div>
      </div>
      {/* <Modal active = {modalActive} setActive = {setModalActive}>
        <>
        <ul>
            <li> Повна інформація</li>
            <hr></hr>
            <li> Коди для перевірки</li>
            <hr></hr>
            <li> Питання та відповіді</li>
            <hr></hr>
            </ul>
            <button> &times; </button>
            </>
        </Modal>
      <div className = 'added open-btn doc__full item' onClick={() => setModalActive(true)}> <img src="./imgs/more.svg" alt=""/></div>  */}

       </>
    )
}

export default Docfront