import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
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
          <div className="news-section">
            <div className="news-content">
              <h2 className="news-title">Latest News & Travels</h2>
              <ul className="news-list">
              <li><span className="news-date">June 2024:</span> I have been selected as <strong>a visiting research student at Singapore Management University</strong>! 
              I will be working with <a href="https://faculty.smu.edu.sg/profile/rajesh-krishna-balan-591" target="_blank" rel="noopener noreferrer">Rajesh Balan</a> 
              and <a href="https://www.thivyak.info/" target="_blank" rel="noopener noreferrer">Thivya Kandappu</a> on a Mixed Reality system with emotion sensing technology. 
              My visit will last from September 2024 to March 2025, and I am very excited for this new journey.</li>
              
              <li><span className="news-date">April 2024:</span> Just submitted my paper to <strong>UIST 2024</strong>! 
              Big thanks to my co-author Juheon Yi for sticking through despite the busy times moving to the UK!</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;








