import React from 'react';
import '../styles/styles.css';
import myImage1 from '../image/portfolio-1.jpg';
import myImage2 from '../image/portfolio-2.jpg';
import myImage3 from '../image/portfolio-3.jpg';
import myImage4 from '../image/portfolio-4.jpg';
import myImage5 from '../image/portfolio-5.jpg';
import myImage6 from '../image/portfolio-6.jpg';
const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Here is some of the services I can offer</p>
        </div>

        <div className="row">

          <div  className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-orange rounded" style={{ backgroundColor: "#dce8f8" }}>
              <div className="row align-items-stretch">
                <img src={myImage1} className="img-fluid" alt="" />
              </div>
              <h4><a href="">Mobile Application Development</a></h4>
              <p>This is the core service provided by mobile developers. You can build custom mobile applications from scratch based on client requirements. Whether it's developing a native app for a specific platform (iOS or Android) or creating cross-platform applications using frameworks like React Native or Flutter, you can develop robust and feature-rich mobile apps.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange rounded" style={{ backgroundColor: "#dce8f8" }}>
              <div className="row align-items-stretch">
                <img src={myImage6} alt="" />
              </div>
              <h4><a href="">App UI/UX Design</a></h4>
              <p>Mobile developers often have expertise in user interface (UI) and user experience (UX) design. You can offer services related to designing intuitive and visually appealing app interfaces, ensuring a seamless user experience, and optimizing the app's usability and accessibility.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange rounded" style={{ backgroundColor: "#dce8f8" }}>
              <div className="row align-items-stretch">
                <img src={myImage3} alt="" />
              </div>
              <h4><a href="">Accessibility</a></h4>
              <p>ensure that web applications and websites are accessible to users with disabilities, including those who use assistive technologies like screen readers.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange rounded" style={{ backgroundColor: "#dce8f8" }}>
              <div className="row align-items-stretch">
                <img src={myImage2} alt="" />
              </div>
              <h4><a href="">Customization and Extension</a></h4>
              <p>Mobile developers can also offer customization and extension services for existing mobile apps. This involves adding new features, modifying functionalities, integrating additional modules, or adapting the app for specific business requirements.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange rounded" style={{ backgroundColor: "#dce8f8" }}>
              <div className="row align-items-stretch">
                <img src={myImage5} alt="" />
              </div>
              <h4><a href="">Responsive design</a></h4>
              <p>I ensure that web applications and websites are optimized for different devices, such as desktops, tablets, and smartphones.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box iconbox-orange rounded" style={{ backgroundColor: "#dce8f8" }}>
              <div className="row align-items-stretch">
                <img src={myImage4} alt="" />
              </div>
              <h4><a href="">App Store Submission and Optimization</a></h4>
              <p>Mobile developers can guide clients through the process of submitting their apps to relevant app stores, such as the Apple App Store or Google Play Store. They can ensure that the app meets the store's guidelines, optimize its listing, and assist with marketing strategies to increase visibility and downloads.</p>
            </div>
          </div>

      </div>

    </div>
    </section>
  );
}

export default Services;
