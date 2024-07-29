import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="/" className="site-title">I'm Hyuna Seo!</a>
        </nav>
      </header>
      <main>
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} className="profile-pic" alt="Hyuna Seo" />
        <h1>Hello I'm Hyuna Seo!</h1>
        {/* 여기에 추가적인 콘텐츠를 작성합니다. */}
      </main>
    </div>
  );
}

export default App;
