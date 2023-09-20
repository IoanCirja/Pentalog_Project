import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import News from './News';
import Charts from './Charts';
import Modal from 'react-modal';
import SignupForm from './SignupForm';
import FDAEventCalendar from './Calendar'; 
import "./Footer.css";
import "./Home.css"

Modal.setAppElement('#root');

function App() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/news" element={<News />} />
        <Route path="/calendar" element={<FDAEventCalendar />} /> 
        <Route path="/charts" element={<Charts />} /> 
        <Route path="/" element={<Home openSignupModal={openSignupModal} />} />
      </Routes>
      <Modal
        isOpen={isSignupModalOpen}
        onRequestClose={closeSignupModal}
        contentLabel="Login"
      >
        <SignupForm isOpen={isSignupModalOpen} onRequestClose={closeSignupModal} />
      </Modal>
    </Router>
  );
}

function Home({ openSignupModal }) {


  const handleScroll = () => {
    const scrollButton = document.getElementById("scroll");
    if (scrollButton) {
      if (window.scrollY > 100) {
        scrollButton.classList.add("fade-in");
        scrollButton.classList.remove("fade-out");
      } else {
        scrollButton.classList.remove("fade-in");
        scrollButton.classList.add("fade-out");
      }
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div className="App">
      <div className="header">
        <div className="left">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>


        </div>

        <button
          onClick={handleScrollToTop}
          className="scrollbtn fade-out"
          id="scroll"
        >
          ↑
        </button>
        <div className="right">
          <Link to="/news">
            <button>News</button>
          </Link>
          <Link to="/calendar"> 
          <button>Calendar</button>
        </Link>
        <Link to="/charts"> 
          <button>Charts</button>
        </Link>
     
        </div>
      </div>

      <main>
        <h1 id="h1Main">The World’s Leading <br></br>
          Stock Tracking Platform</h1>

        <h2 id="h2Main">Keep an eye on your favorite stocks, get up-to-date news about World’s Finances, and much more!</h2>

        <ul id="mainList">
          <li>✔ Trusted by more than 80M users world-wide</li>
          <li> ✔ Leader in regulatory compliance and security certifications</li>
          <li> ✔ The industry’s most comprehensive insurance coverage and verified proof of reserves</li>
        </ul>
      <div id="cryptoWorld">
        <div id="btn-h2-main">
        <button id="btnDialog" onClick={openSignupModal}>START TRACKING ➡</button>
        <h2 id="h2Main">Your finance journey starts here.</h2>
        
        </div>
        <ul id="mainList">
          <li>⚪ Track Company Stocks</li>
          <li> ⚪ FDA Events</li>
          <li> ⚪ Price Alerts</li>
          <li> ⚪ Finances Newsletter</li>
         
        </ul>
        </div>
      </main>
      
      <footer>
      {
        <div className="footer-elements">


<div id="footer1">
<h2 id="h2f1">OUR VISION</h2>
<h1 id="h1f1">Financials in<br></br>
Every Mind™</h1>
<div className="footer-logo1">
          <img src="/stock-logo-footer.svg" alt="Stock Tracker Logo"/>
          <h1 id="h1Logo">Stock Tracker</h1>
</div>
<div id="About">

  <div id="year">
<h2 id="h2f1">Founded in</h2>
<h1 id="h1f1">2023</h1>
</div>

<div id="users">
<h2 id="h2f1">Users</h2>
<h1 id="h1f1">80M</h1>
</div>

</div>
</div>


<div id="footer2">
        <div className="footer-logo">
          <img src="/stock-logo.svg" alt="Stock Tracker Logo" />
          <h1>Stock Tracker</h1>
        </div>

        <div className="aboutApp">

        <div className="contact">
        <p>CONTACT</p>
        <p> ✆ Phone: +1-543-123-4567</p>
        <p>✉ Stock-Tracker@gmail.com</p>
        </div>

        <div className="usefulLinks">
        <p>USEFUL LINKS</p>
        <Link id="link1" to="https://www.minerone.pro/Usage_Policy.html">Usage Policy</Link>
        <Link id="link1" to="https://www.minerone.pro/Privacy_Policy.html">Privacy Policy</Link>
        </div>

        <div className="follow-us">
        <p>LET'S KEEP IN TOUCH!</p>
        <Link id="link1" to="https://www.facebook.com/">
        <img id="icon" src="/icons8-facebook.svg" alt="Facebook Logo" />
        </Link>

        <Link id="link1" to="https://www.instagram.com/">
        <img id="icon" src="/icons8-instagram.svg" alt="Instagram Logo" />
        </Link>

        <Link id="link1" to="https://www.youtube.com/">
        <img id="icon" src="icons8-youtube.svg" alt="Instagram Logo" />
        </Link>
        </div>
        </div>
        <p id="copyright">COPYRIGHT © 2023 Stock Tracker ALL RIGHT RESERVED</p>
        </div>


        </div>


      }
     
    </footer>

    </div>
  );
}

export default App;