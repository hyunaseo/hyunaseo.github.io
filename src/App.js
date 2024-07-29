import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="/" className="site-title">Hyuna Seo</a>
        </nav>
      </header>
      <main>
        <div className="profile-container">
          <img src={`${process.env.PUBLIC_URL}/profile.jpg`} className="profile-pic" alt="Hyuna Seo" />
          <div className="profile-description">
            <h1>Hi, I'm Hyuna Seo!</h1>
            <p>
              I’m a PhD student at the <a href="https://hcs.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Human-Centered Computing Systems Lab</a>, Department of Computer Science and Engineering, Seoul National University, since 2021.02 under the guidance of <a href="https://youngkilee.blogspot.com/" target="_blank" rel="noopener noreferrer">Youngki Lee</a>.
            </p>
            <p>
              My research is focused on designing Cross Reality systems that allow users to remain deeply immersed in virtual environments while seamlessly interacting with the real world according to their needs. I have been exploring a context-aware approach, gradually integrating the real world into the virtual environment based on the user's interaction state.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:hyuna.seo@hcs.snu.ac.kr">hyuna.seo@hcs.snu.ac.kr</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                <a href="https://github.com/hyunas1996" target="_blank" rel="noopener noreferrer">https://github.com/hyunas1996</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;