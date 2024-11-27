import '@fortawesome/fontawesome-free/css/all.min.css';
import "./DevCard.css"

const DevCard = () => {
  
  return (
    <div className="profile-card " >

  <img src="public/avtar.png" alt="Profile" />
  <h2>Guillem Garcia</h2>
  <p>Fullstack Developer</p>
  <p>Data since November 2022</p>

  <div className="stats">
    <div>
      <h3>287</h3>
      <p>Issues Resolved</p>
    </div>
    <div>
      <h3>$99</h3>
      <p>Money Earned</p>
    </div>
    <div>
      <h3>76</h3>
      <p>Challenges Won</p>
    </div>
  </div>

  <div className="social-icons">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="icon">
      <i className="fab fa-dribbble"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon">
      <i className="fab fa-github"></i>
    </a>
  </div>
</div>
    

  

  );
};

export default DevCard;
