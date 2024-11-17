import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'; // PDF 아이콘 추가
import { faVideo, faFilm} from '@fortawesome/free-solid-svg-icons';

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
              <li><span className="news-date">Oct 2024:</span> Serving as a reviewer for <a href="https://chi2025.acm.org/for-authors/case-studies/" target="_blank" rel="noopener noreferrer">CHI 2025 Case Studies</a>. Excited to contribute to the community!</li>
              <li><span className="news-date">Oct 2024:</span> Received <a href="https://buildyourfuture.withgoogle.com/" target="_blank" rel="noopener noreferrer">East Asia Student Travel Grants</a> for my UIST travel from Google. Thank you!</li>              
              <li><span className="news-date">Oct 2024:</span> Presented my first paper, <b href="https://dl.acm.org/doi/10.1145/3654777.3676463" target="_blank" rel="noopener noreferrer">GradualReality</b>, at <a href="https://uist.acm.org/2024/" target="_blank" rel="noopener noreferrer">UIST 2024</a>. Awesome people!</li>              
              <li><span className="news-date">Sep 2024:</span> Just arrived in Singapore🇸🇬 Working with <a href="https://faculty.smu.edu.sg/profile/rajesh-krishna-balan-591" target="_blank" rel="noopener noreferrer">Rajesh Balan</a> and <a href="https://www.thivyak.info/" target="_blank" rel="noopener noreferrer">Thivya Kandappu</a> until April 2025.</li>                
              <li><span className="news-date">Jul 2024:</span> One paper is accepted to <a href="https://uist.acm.org/2024/" target="_blank" rel="noopener noreferrer">UIST 2024</a>. See you all in Pittsburgh 🏴‍☠️</li>
              <li><span className="news-date">Jun 2024:</span> Selected as a visiting research student at <a href="https://www.smu.edu.sg/" target="_blank" rel="noopener noreferrer">Singapore Management University</a>.</li>
              <li><span className="news-date">Apr 2024:</span> Submitted one paper to <a href="https://uist.acm.org/2024/" target="_blank" rel="noopener noreferrer">UIST 2024</a>! 
              Big thanks to my co-author <a href="https://juheonyi.github.io/" target="_blank" rel="noopener noreferrer">Juheon</a> for the support during my move to the UK!</li>
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
                                <a href="https://dl.acm.org/doi/10.1145/3654777.3676463" target="_blank" rel="noopener noreferrer">Paper</a> 
                                

                                <a href="https://github.com/hyunaseo/GradualReality" target="_blank" rel="noopener noreferrer">Code</a> 


                                <a href="https://youtu.be/R0vnikegaKo?si=2jlC2twPCTttSDlb" target="_blank" rel="noopener noreferrer">Demo Video</a> 

                                
                                <a href="https://youtu.be/MpIXc-GUvLs?si=l52TB1ktbC2QHpTR" target="_blank" rel="noopener noreferrer">Conference Video</a>
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