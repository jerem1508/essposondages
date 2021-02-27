import React, { useState } from 'react';
import Modal from 'react-modal';
import Axios from 'axios';

import '../App.css';

import img1 from './img/bonhomme_Manu.png';
import img2 from './img/Challenge trace GPS - Seb.jpeg';
import img3 from './img/david.png';
import img4 from './img/seb2.png';
import img5 from './img/stephane.png';
import img6 from './img/WhatsApp Image 2021-02-17 at 13.54.21.jpeg';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const Challenge = () => {
  const [selected, setSelected] = useState(0);
  const [modalIsOpen,setIsOpen] = useState(false);
  const [email,setEmailInState] = useState('');
  const [voted, setVoted] = useState(false)

  let prenom = '';
  // eslint-disable-next-line default-case
  switch (selected) {
    case 1:
      prenom = 'Manu';
      break;
    case 2:
      prenom = 'Seb #1';
      break;
    case 3:
      prenom = 'David';
      break;
    case 4:
      prenom = 'Seb #2';
      break;
    case 5:
      prenom = 'Stéphane';
      break;
    case 6:
      prenom = 'Jérémy';
      break;
  }

  function openModal() {
    setIsOpen(true);
  };
 

  function closeModal(){
    setIsOpen(false);
  };

  const vote = (id) => {
    setSelected(id);
    openModal();
  };


  const envoyerVote = () => {
    const url = 'https://essposondages-1376.restdb.io/rest/sondage1';
    const data = {
      email: email,
      vote: selected,
    };
    let config = {
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': '603ad2bc10f29b640ed97bb9',
        'content-type': 'application/json'
      }
    };
    console.log(data);
    Axios.post(url, data, config).then((response) => {

      setVoted(true);
    });
  };

  return (
    <div className="container">
      <header>
        <h1 className="titre mt-4">
          ESSPO - Sondage challenge #1
        </h1>
      </header>
      <p className="intro p-3 my-4">
        Voici les créations artistiques réalisées par certains adhérents plutôt inspirés !
        <br />
        Vous pouvez voter pour votre trace GPS préférée tout simplement en cliquant dessus puis en entrant votre email.
      </p>
      <section className="container-fluid">
        <div className="row">
          <div className="col-6 p-2">
            <img
              src={img1}
              className="img-fluid"
              alt=""
              onClick={() => vote(1)}
            />
          </div>
          <div className="col-6 p-2">
            <img
              src={img2}
              className="img-fluid"
              alt=""
              onClick={() => vote(2)}
            />
          </div>
          <div className="col-6 p-2">
            <img
              src={img3}
              className="img-fluid"
              alt=""
              onClick={() => vote(3)}
            />
          </div>
          <div className="col-6 p-2">
            <img
              src={img4}
              className="img-fluid"
              alt=""
              onClick={() => vote(4)}
            />
          </div>
          <div className="col-6 p-2">
            <img
              src={img5}
              className="img-fluid"
              alt=""
              onClick={() => vote(5)}
            />
          </div>
          <div className="col-6 p-2">
            <img
              src={img6}
              className="img-fluid"
              alt=""
              onClick={() => vote(6)}
            />
          </div>
        </div>
      </section>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div className="text-right">
            <button className="btn" onClick={closeModal}>X</button>
          </div>
          <h2>
            {`Vous avez sélectionné la trace GPS de ${prenom}`}
          </h2>

            {
              (voted)
                ? <div>Merci pour votre participation. A tèrs bientôt !</div>
                : (
                  <form>
                    <div class="mb-3">
                      <label for="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={(e) => setEmailInState(e.target.value)}
                      />
                    </div>
                    <div className="text-right">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => envoyerVote()}
                      >
                        Voter !
                      </button>
                    </div>
                  </form>
                )
            }
        </Modal>

    </div>
  )
};

export default Challenge;
