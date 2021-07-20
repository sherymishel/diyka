import React from 'react'
import Modal from './Modal'

function Footer() {
    const [modalActive, setModalActive] = React.useState(false);

    return(
        <footer>
            <Modal active = {modalActive} setActive = {setModalActive}>
        <p>hi</p>
        </Modal>
        <div className = 'open-btn' onClick={() => setModalActive(true)}> <img src="./imgs/doc.svg" alt="" className="footer__icon" /> Документи</div>
        <div className = 'open-btn' onClick={() => setModalActive(true)}> <img src="./imgs/lightning.svg" alt="" className="footer__icon" /> Послуги </div>
        <div className = 'open-btn' onClick={() => setModalActive(true)}> <img src="./imgs/bell.svg" alt="" className="footer__icon" /> Повідомлення </div>
        <div className = 'open-btn' onClick={() => setModalActive(true)}> <img src="./imgs/menu.svg" alt="" className="footer__icon" /> Меню </div>
      </footer>
    )
}

export default Footer

