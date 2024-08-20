import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'; // PDF 아이콘 추가

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header className="App-header">
          {/* <nav>
            <a href="/" className="site-title">Hyuna Seo</a>
          </nav> */}
        </header>
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
              <p>You can download my CV <a href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" rel="noopener noreferrer">here</a>.</p>
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
              <li><span className="news-date">Jul 2024:</span> <strong>"GradualReality"</strong> is accepted to <strong>ACM UIST 2024</strong>. See you all in Pittsburgh!!!</li>
              
              <li><span className="news-date">June 2024:</span> I have been selected as <strong>a visiting research student at Singapore Management University</strong>! 
              I will be working with <a href="https://faculty.smu.edu.sg/profile/rajesh-krishna-balan-591" target="_blank" rel="noopener noreferrer">Rajesh Balan</a> and <a href="https://www.thivyak.info/" target="_blank" rel="noopener noreferrer">Thivya Kandappu</a> on a Mixed Reality system with emotion sensing technology. 
              My visit will last from September 2024 to March 2025, and I am very excited for this new journey.</li>
              
              <li><span className="news-date">April 2024:</span> Submitted one paper to <strong>UIST 2024</strong>! 
              Big thanks to my co-author Juheon Yi for his support during the busy times of moving to the UK!</li>
              </ul>
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
                      <a href="https://github.com/hyunaseo/GradualReality" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="publication-icon" />
                      </a>
                      <a href="https://doi.org/10.1145/3654777.3676463" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFilePdf} className="publication-icon" />
                      </a>
                    </div>
                  </div>
                </li>
                {/* 예시로 두 번째 비디오와 설명 쌍을 추가합니다. 필요에 따라 더 추가할 수 있습니다. */}
                {/* <li className="publication-item">
                  <div className="publication-video">
                    <iframe width="320" height="240" src="https://www.youtube.com/embed/다른_비디오_URL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <div className="publication-description">
                    <h3>다른 프로젝트 제목</h3>
                    <p>다른 프로젝트에 대한 간략한 설명을 여기에 작성합니다.</p>
                    <div className="publication-links">
                      <a href="https://github.com/다른_깃허브_URL" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="publication-icon" />
                      </a>
                      <a href="https://doi.org/다른_DOI_URL" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFilePdf} className="publication-icon" />
                      </a>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;