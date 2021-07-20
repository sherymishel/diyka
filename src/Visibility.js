import React from 'react';
import Docfront from './Doc-Front'
import Docback from './Doc-Back'
import Modal from './Modal'

const Card = () => {
    const [modalActive, setModalActive] = React.useState(false);
    const [face, setFace] = React.useState(true);
    const fullBtnRef = React.useRef();
    const cardRef = React.useRef();

    return (
        <>
        <div   ref={cardRef} className="doc" onClick={() => setFace((prev) => !prev)}>
          {face ?  <Docfront /> : <Docback/>} 
          {/* onClick={a+=1} */}
          {/* {console.log(a)} */}
        </div>
        <Modal active = {modalActive} setActive = {setModalActive}>
        <>
        <ul >
            <li> Повна інформація</li>
            <hr></hr>
            <li> Коди для перевірки</li>
            <hr></hr>
            <li> Питання та відповіді</li>
            <hr></hr>
            </ul>
            <button className = 'closeButton' onClick={() => setModalActive(false)}> &times; </button>
            </>
        </Modal>
      <div ref={fullBtnRef} onClick= {() => {setModalActive(true)}}> 
      <img src="./imgs/more.svg" alt=""/>
      </div> 
       {React.useEffect(() => {
         if (modalActive) {
         setTimeout(() => {
          fullBtnRef.current.className += ' notactive';
         }, 50)
         console.log(fullBtnRef.current)
        }
        // forRef.current.className += ' notactive';
        
        if (!modalActive) {
          fullBtnRef.current.className = 'added open-btn  doc__full item';
          console.log(face);
        }

        if (face === false) {
          fullBtnRef.current.className += ' notactive';
          console.log('fuckoff');
        }
        // if (cardRef.current.children[0].className.split(' ')[0] === 'doc-back') {
        //   console.log(cardRef.current.children[0].className.split(' ')[0]);
        // }
      }, [modalActive, face]
      )} 
      </>
      
      );

      

    /*return (
      <div className="doc" onClick={() => setFace((prev) => !prev)}>
        {face ?  <Docfront/> : <Docback/>}
      </div>
    );*/
  };

  export default Card;

  // className = 
  //     {a > 0 ? 'notactive added open-btn  doc__full item' : 'added open-btn  doc__full item'
