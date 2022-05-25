import About from './About';
import Work from './Work';
import Education from './Education';
import profile from './profile.jpg';
import resume from './resumeData.json'

import './App.css';
import './resume.css';

function App() {

  return (
    <div className="App">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Amal Qurany</span>
          <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="..." /></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#work">Work</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li> */}
          </ul>
        </div>
      </nav>
      {/* <!-- Page Content--> */}
      <div className="container-fluid p-0">
        {/* <!-- About--> */}
        <About data={resume.basics}/>
        <hr className="m-0" />

        {/* <!-- Work--> */}
        <Work data={resume.work}/>
        <hr className="m-0" />

        {/* <!-- Education--> */}
        <Education data={resume.education}/>
        <hr className="m-0" />

        {/* <!-- Skills--> */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item"><i className="fab fa-react"></i></li>
              <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
              <li className="list-inline-item"><i className="fab fa-wordpress"></i></li>
              <li className="list-inline-item"><i className="fab fa-aws"></i></li>
              <li className="list-inline-item"><i className="fab fa-docker"></i></li>
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Cross Functional Teams
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* <!-- Interests--> */}
        {/* <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
            <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
          </div>
        </section>
        <hr className="m-0" /> */}

        {/* <!-- Awards--> */}
        {/* <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards & Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                Google Analytics Certified Developer
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                Mobile Web Specialist - Google Certification
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                1
                <sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech Competition 2009
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                1
                <sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                2
                <sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech Competition 2008
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                1
                <sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                3
                <sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
              </li>
            </ul>
          </div> 
        </section>*/}
      </div>
      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="js/scripts.js"></script>
    </div>
  );
}

export default App;
