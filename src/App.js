import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf, faVideo, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [showAllNews, setShowAllNews] = useState(false);

  const newsItems = [
    { date: 'Apr 2025', content: <>Attending <a href="https://chi2025.acm.org/" target="_blank" rel="noopener noreferrer">CHI 2025</a> 🎡, presenting at <a href="https://xr-and-ai.github.io/" target="_blank" rel="noopener noreferrer">EverydayAR Workshop</a> and serving as a Session Chair for the first time!</> },
    { date: 'Apr 2025', content: <>Gave an invited talk at University of Tokyo, hosted by <a href="https://iis-lab.org/member/koji-yatani/" target="_blank" rel="noopener noreferrer">Koji Yatani</a>. Thank you for the kind invitation!</> },
    { date: 'Apr 2025', content: <>Back in Korea after wrapping up my visiting research at Singapore.</> },
    { date: 'Mar 2025', content: <>Serving as a reviewer for <a href="https://dis.acm.org/2025/" target="_blank" rel="noopener noreferrer">DIS 2025</a> and <a href="https://cc.acm.org/2025/" target="_blank" rel="noopener noreferrer">Creativity & Cognition 2025</a>.</> },
    { date: 'Feb 2025', content: <>Received an outstanding presentation award 🎉 from <a href="https://2025winter.sigchi.kr/" target="_blank" rel="noopener noreferrer">Top Conference Session</a> at <a href="https://conference.hcikorea.org/hcik2025/main/main.asp" target="_blank" rel="noopener noreferrer">HCI Korea 2025</a>.</> },
    { date: 'Dec 2024', content: <>Serving as a reviewer for <a href="https://www.ubicomp.org/ubicomp-iswc-2025/" target="_blank" rel="noopener noreferrer">IMWUT 2025</a>. Excited to contribute to the community!</> },
    { date: 'Oct 2024', content: <>Received <a href="https://buildyourfuture.withgoogle.com/" target="_blank" rel="noopener noreferrer">East Asia Student Travel Grants</a> for my UIST travel from Google. Thank you!</> },
    { date: 'Oct 2024', content: <>Presented my first paper, <b><a href="https://dl.acm.org/doi/10.1145/3654777.3676463" target="_blank" rel="noopener noreferrer">GradualReality</a></b>, at <a href="https://uist.acm.org/2024/" target="_blank" rel="noopener noreferrer">UIST 2024</a>. Awesome people!</> },
    { date: 'Sep 2024', content: <>Just arrived in Singapore🇸🇬 working with <a href="https://faculty.smu.edu.sg/profile/rajesh-krishna-balan-591" target="_blank" rel="noopener noreferrer">Rajesh Balan</a> and <a href="https://www.thivyak.info/" target="_blank" rel="noopener noreferrer">Thivya Kandappu</a> until April 2025.</> },
    { date: 'Jul 2024', content: <>One paper is accepted to <a href="https://uist.acm.org/2024/" target="_blank" rel="noopener noreferrer">UIST 2024</a>. See you all in Pittsburgh 🏴‍☠️</> },
    { date: 'Jun 2024', content: <>Selected as a visiting research student at <a href="https://www.smu.edu.sg/" target="_blank" rel="noopener noreferrer">Singapore Management University</a>.</> },
    { date: 'Apr 2024', content: <>Submitted one paper to <a href="https://uist.acm.org/2024/" target="_blank" rel="noopener noreferrer">UIST 2024</a>! Big thanks to my co-author <a href="https://juheonyi.github.io/" target="_blank" rel="noopener noreferrer">Juheon</a> for the support during my move to the UK!</> },
  ];

  const displayedNews = showAllNews ? newsItems : newsItems.slice(0, 6);

  return (
    <div className="App">
      <div className='wrapper'>
        <header className="App-header"></header>
        <main>
          <div className="profile-container">
            <img src={`${process.env.PUBLIC_URL}/profile.jpg`} className="profile-pic" alt="Hyuna Seo" />
            <div className="profile-description">
              <h1>Hi, I'm Hyuna Seo!</h1>
              <p>
                I’m a PhD student at <a href="https://hcs.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Human-Centered Computing Systems Lab</a>, Seoul National University, under the guidance of <a href="https://youngkilee.blogspot.com/" target="_blank" rel="noopener noreferrer">Youngki Lee</a>.
              </p>
              <p>
                My research focuses on designing Cross Reality systems that keep users deeply immersed in virtual environments while enabling seamless interaction with the real world. I explore context-aware approaches that integrate the real world into the virtual environment based on the user's interaction state.
              </p>
              <p>You can download my CV <a href={`${process.env.PUBLIC_URL}/CV-HyunA.pdf`} target="_blank" rel="noopener noreferrer">here</a>.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                  <a href="mailto:hyuna.seo@hcs.snu.ac.kr">hyuna.seo@hcs.snu.ac.kr</a>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                  <a href="https://github.com/hyunaseo" target="_blank" rel="noopener noreferrer">https://github.com/hyunaseo</a>
                </div>
              </div>
            </div>
          </div>

          <div className="news-section">
            <div className="news-content">
              <h2 className="news-title">Latest News & Travels</h2>
              <ul className="news-list">
                {displayedNews.map((item, index) => (
                  <li key={index}><span className="news-date">{item.date}:</span> {item.content}</li>
                ))}
              </ul>
              <button onClick={() => setShowAllNews(!showAllNews)} className="news-toggle-btn">
                {showAllNews ? '▲ Show Less' : '▼ Show More'}
              </button>
            </div>
          </div>

          <div className="publication-section">
            <div className='publication-content'>
              <h2 className="publication-title">Publications</h2>
              <ul className="publication-list">
                <li className="publication-item">
                  <div className="publication-video">
                    <iframe width="320" height="240" src="https://www.youtube.com/embed/3xO93qFvpqA?si=E7ZT7_icBOqSmyg5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <div className="publication-description">
                    <h3>GradualReality: Enhancing Physical Object Interaction in Virtual Reality via Interaction State-Aware Blending</h3>
                    <p className="publication-authors"><strong><u>Hyuna Seo</u></strong>, <a href="https://juheonyi.github.io/" target="_blank" rel="noopener noreferrer">Juheon Yi</a>, <a href="https://faculty.smu.edu.sg/profile/rajesh-krishna-balan-591" target="_blank" rel="noopener noreferrer">Rajesh Balan</a>, <a href="https://youngkilee.blogspot.com/" target="_blank" rel="noopener noreferrer">Youngki Lee</a></p>
                    <p>GradualReality enables physical object interaction while being highly immersed into the virtual environment. We designed Interaction State-Aware Blending approach, which gradually integrates physical world information into the virtual world based on the user's current interaction state. Please refer to our demo video!</p>
                    <div className="publication-links">
                      <a href="https://dl.acm.org/doi/10.1145/3654777.3676463" target="_blank" rel="noopener noreferrer">Paper</a>
                      <a href="https://github.com/hyunaseo/GradualReality" target="_blank" rel="noopener noreferrer">Code</a>
                      <a href="https://youtu.be/R0vnikegaKo?si=2jlC2twPCTttSDlb" target="_blank" rel="noopener noreferrer">Demo Video</a>
                      <a href="https://youtu.be/MpIXc-GUvLs?si=l52TB1ktbC2QHpTR" target="_blank" rel="noopener noreferrer">Conference Video</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
