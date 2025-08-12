import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf, faVideo, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [showAllNews, setShowAllNews] = useState(false);

  const newsItems = [
    { date: 'May 2025', content: <><span className="semibold"><a href="https://doi.org/10.1145/3746059.3747656" target="_blank" rel="noopener noreferrer">EmoShortcuts</a></span> was accepted to UIST 2025. Welcome to Busan 🇰🇷</> },
    { date: 'Apr 2025', content: <>Attending <a href="https://chi2025.acm.org/" target="_blank" rel="noopener noreferrer">CHI 2025</a> 🎡, presenting at <a href="https://xr-and-ai.github.io/" target="_blank" rel="noopener noreferrer">EverydayAR Workshop</a> and serving as a Session Chair for the first time!</> },
    { date: 'Apr 2025', content: <>Gave an invited talk at University of Tokyo, hosted by <a href="https://iis-lab.org/member/koji-yatani/" target="_blank" rel="noopener noreferrer">Koji Yatani</a>. Thank you for the kind invitation!</> },
    { date: 'Apr 2025', content: <>Back in Korea after wrapping up my visiting research at Singapore.</> },
    { date: 'Mar 2025', content: <>Serving as a reviewer for <a href="https://dis.acm.org/2025/" target="_blank" rel="noopener noreferrer">DIS 2025</a> and <a href="https://cc.acm.org/2025/" target="_blank" rel="noopener noreferrer">Creativity & Cognition 2025</a>.</> },
    { date: 'Feb 2025', content: <>Received an outstanding presentation award 🎉 from <a href="https://2025winter.sigchi.kr/" target="_blank" rel="noopener noreferrer">Top Conference Session</a> at <a href="https://conference.hcikorea.org/hcik2025/main/main.asp" target="_blank" rel="noopener noreferrer">HCI Korea 2025</a>.</> },
    { date: 'Dec 2024', content: <>Serving as a reviewer for <a href="https://www.ubicomp.org/ubicomp-iswc-2025/" target="_blank" rel="noopener noreferrer">IMWUT 2025</a>. Excited to contribute to the community!</> },
    { date: 'Oct 2024', content: <>Received <a href="https://buildyourfuture.withgoogle.com/" target="_blank" rel="noopener noreferrer">East Asia Student Travel Grants</a> for my UIST travel from Google. Thank you!</> },
    { date: 'Oct 2024', content: <>Presented my first paper, <span className="semibold"><a href="https://dl.acm.org/doi/10.1145/3654777.3676463" target="_blank" rel="noopener noreferrer">GradualReality</a></span>, at <a href="https://uist.acm.org/2024/" target="_blank" rel="noopener noreferrer">UIST 2024</a>. Awesome people!</> },
    { date: 'Sep 2024', content: <>Just arrived in Singapore🇸🇬 working with <a href="https://faculty.smu.edu.sg/profile/rajesh-krishna-balan-591" target="_blank" rel="noopener noreferrer">Rajesh Balan</a> and <a href="https://www.thivyak.info/" target="_blank" rel="noopener noreferrer">Thivya Kandappu</a> until April 2025.</> },
    { date: 'Jul 2024', content: <>My first first-author paper, <span className="semibold"><a href="https://dl.acm.org/doi/10.1145/3654777.3676463" target="_blank" rel="noopener noreferrer">GradualReality</a></span>, was accepted to UIST 2024. See you all in Pittsburgh 🏴‍☠️</> },
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
            <img src={`${process.env.PUBLIC_URL}/profile.jpg`} className="profile-pic" alt="HyunA Seo" />
            <div className="profile-description">
              <h1>Hi, I'm HyunA Seo!</h1>
              <p>
                I’m a PhD student at <a href="https://hcs.snu.ac.kr/" target="_blank" rel="noopener noreferrer">Human-Centered Computing Systems Lab</a>, Seoul National University, under the guidance of <a href="https://youngkilee.blogspot.com/" target="_blank" rel="noopener noreferrer">Youngki Lee</a>.
              </p>
              <p>
                I design novel eXtended Reality (XR) interactions and systems that frictionlessly blend the physical and virtual worlds. To realize everyday XR beyond spatiotemporal constraints, my research focuses on optimally modeling user context and gradually bridging the gap between physical and virtual interactions. Recently, I have been expanding the notion of virtuality to include multimodal agents, aiming to seamlessly integrate them into users’ everyday tasks with careful consideration of users’ capabilities.
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
                  <div className="publication-image">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/EmoShortcuts_Preview.jpg`}
                      alt="EmoShortcuts Preview"
                    />                  
                  </div>
                  <div className="publication-description">
                    <h3>EmoShortcuts: Emotionally Expressive Body Augmentation for Social Mixed Reality Avatar</h3>
                    <p className="publication-authors"><strong><u>HyunA Seo</u></strong>, <a href="https://youngkilee.blogspot.com/" target="_blank" rel="noopener noreferrer">Youngki Lee</a>, <a href="" target="_blank" rel="noopener noreferrer">Rajesh Balan</a>, <a href="https://www.thivyak.info/" target="_blank" rel="noopener noreferrer">Thivya Kandappu</a></p>
                    <p className="publication-venue"><em>UIST 2025</em></p>
                    <div className="publication-links">
                      <a href="https://doi.org/10.1145/3746059.3747656" target="_blank" rel="noopener noreferrer">DOI</a>
                      <a href={`${process.env.PUBLIC_URL}/pdfs/EmoShortcuts(UIST2025).pdf`} target="_blank" rel="noopener noreferrer">PDF</a>
                      <a href="https://github.com/hyunaseo/EmoShortcuts" target="_blank" rel="noopener noreferrer">Code</a>
                      <a href="https://youtu.be/kupnLM0QBkY" target="_blank" rel="noopener noreferrer">Preview Video</a>
                    </div>
                  </div>
                </li>

                <li className="publication-item">
                  <div className="publication-image">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/GradualReality_Preview.jpg`}
                      alt="GradualReality Preview"
                    />                  
                  </div>
                  <div className="publication-description">
                    <h3>GradualReality: Enhancing Physical Object Interaction in Virtual Reality via Interaction State-Aware Blending</h3>
                    <p className="publication-authors"><strong><u>HyunA Seo</u></strong>, <a href="https://juheonyi.github.io/" target="_blank" rel="noopener noreferrer">Juheon Yi</a>, <a href="https://faculty.smu.edu.sg/profile/rajesh-krishna-balan-591" target="_blank" rel="noopener noreferrer">Rajesh Balan</a>, <a href="https://youngkilee.blogspot.com/" target="_blank" rel="noopener noreferrer">Youngki Lee</a></p>
                    <p className="publication-venue"><em>UIST 2024</em></p>
                    <div className="publication-links">
                      <a href="https://dl.acm.org/doi/10.1145/3654777.3676463" target="_blank" rel="noopener noreferrer">DOI</a>
                      <a href={`${process.env.PUBLIC_URL}/pdfs/GradualReality(UIST2024).pdf`} target="_blank" rel="noopener noreferrer">PDF</a>
                      <a href="https://github.com/hyunaseo/GradualReality" target="_blank" rel="noopener noreferrer">Code</a>
                      <a href="https://youtu.be/R0vnikegaKo?si=2jlC2twPCTttSDlb" target="_blank" rel="noopener noreferrer">Demo</a>
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
