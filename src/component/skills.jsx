import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Skills = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2 className="text-center">Skills</h2>
      </div>
      <h4 className="text-center text-muted">
        Experienced mobile developer well-versed in creating cutting-edge applications for both iOS and Android platforms.
      </h4>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div>
            <h5 className="text-dark">Programming Languages</h5>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                95%
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div>
            <h5 className="text-dark">Mobile Platforms</h5>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                80%
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div>
            <h5 className="text-dark">UI/UX</h5>
            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                85%
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div>
            <h5 className="text-dark">APIs</h5>
            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                90%
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Skills;
