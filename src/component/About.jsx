import React from 'react';
import myImage from '../image/me.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Hello! I am a mobile Developer.
          </p>
        </div>

        <div className="row profile-section">
  <div className="col-lg-4">
    <div className="profile-img">
      <img src={myImage} className="img-fluid rounded" alt="" />
    </div>
    <br />
    <h2 className='name'>Shrouk Ibrahim</h2>
  </div>

  <div className="col-lg-8 pt-4 pt-lg-0 content profile-info">
    <h3>Mobile Developer</h3>
    <p className="fst-italic">
      I am a professional mobile Developer creating modern and responsive designs.
    </p>
    <div className="row">
      <div className="col-lg-6">
        <ul>
          <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>019446568</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>EGYPT</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
        </ul>
      </div>
      <div className="col-lg-6">
        <ul>
          <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>Shrouk_ibrahim@gmail.com</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
          <li><i className="bi bi-chevron-right"></i> <strong>My GitHub:</strong> <span>github.com/yourusername</span></li>
        </ul>
      </div>
    </div>
    <p className="h4 fw-light">
      Let's discuss how we can collaborate to achieve your business goals.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
