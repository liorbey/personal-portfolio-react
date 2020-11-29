import NavbarCustom from "./utils/navbar";
import profilePic from "./profile-pic.jpg";
import championsLogo from "./champions-logo.png";
import georgiaTech from "./GeorgiaTech.jpg";
import Baruch from "./Baruch.jpg";
import TutorDashboard from "./TutorDashboard.png"
import MLERT from "./MLERT.png"
import { Container, Row, Col, Card } from "react-bootstrap";
import Particles from "react-particles-js";
function App() {
  return (
    <div>
      <div style={{position: 'absolute', height: '100vh', width: '100vw'}}>
        <Particles
        position= 'absolute'
        height = '420vh'
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
        </div>

      <Container
        className="intro-container"
        style={{ backgroundColor: "black" }}
      >
        <NavbarCustom />


        <div id="intro">
          <Row className="d-flex justify-content-center">
            <h1 id="intro-text">Hey,</h1>
          </Row>
          <Row className="d-flex justify-content-center">
            <h1 id="intro-text-bold">I'm Lior</h1>
          </Row>
          <p id="intro-description">
            Software engineer focused on harnessing the power of data
          </p>
          <img src={profilePic} style={{borderRadius: "40%", display:'block', marginLeft: 'auto', marginRight: 'auto', width: '20%'}}></img>
        </div>
        
        <Row className="d-flex justify-content-center" id="section-header">
          <h1 id="header-text-bold">Journey</h1>
        </Row>
        <Row
          style={{ marginTop: "4rem" }}
          className="d-flex justify-content-center"
        >
          <Col sm={1}></Col>
          <Col sm={3} id="journey-img">
            <img
              width="250px"
              style={{ borderRadius: "30%" }}
              src={championsLogo}
            ></img>
          </Col>
          <Col sm={4}>
            <h3 id="journey-title">Champions Oncology</h3>
            <h4 id="journey-subtitle">Feb 2020 - Current</h4>
            <p>
              At champions, I started out as a consultant in February of 2020,
              and came on full time in July where I quickly gained the trust of
              my collegues by taking on Champions' largest software projects.{" "}
            </p>
            <br />
            <p>
              I've been lucky to play a major role in developing{" "}
              <a href="https://finance.yahoo.com/news/champions-oncology-announces-launch-lumin-214000173.html">
                Lumin Bioinformatics
              </a>
              , the largest growing product Champions has ever offered. Lumin is
              a SAAS product that provides bioinformaticists with the tools
              necessary to get a deeper understanding of tumor cell biology by
              allowing user to visualize and run analysis on Champions'
              propeitery data or their own. A large part of my time is now spent
              on upkeep. Some of my daily tasts include: updating our
              APIs/datasets, and developing new features and D3 visualizations{" "}
            </p>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "4rem" }}
          className="d-flex justify-content-center"
        >
          <Col sm={1}></Col>
          <Col sm={3} id="journey-img">
            <img
              width="250px"
              style={{ borderRadius: "30%" }}
              src={georgiaTech}
            ></img>
          </Col>
          <Col sm={4}>
            <h3 id="journey-title">Georgia Tech</h3>
            <h4 id="journey-subtitle">August 2019 - Current</h4>
            <p>
              Georgia Tech presented me with the oppurtunity to attain a Masters
              in Computer Science with a specialization in Machine Learning.
              Since starting this program, I have been challenged in ways that I
              have never been before. Lots of nights have been spent awake to
              say the least, however this experience has so far been extremely
              rewarding.
            </p>
            <br />
            <p>
              I'm expecting to graduate in at the end of 2021. So far, my new
              skills have already served me where I currently work, and I can't
              wait to keep expanding my knowledge, and contribute in the machine
              learning world.
            </p>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "4rem" }}
          className="d-flex justify-content-center"
        >
          <Col sm={1}></Col>
          <Col sm={3} id="journey-img">
            <img
              width="250px"
              style={{ borderRadius: "30%" }}
              src={Baruch}
            ></img>
          </Col>
          <Col sm={4}>
            <h3 id="journey-title">CUNY Baruch</h3>
            <h4 id="journey-subtitle">
              Graduated, bachelors in Math/Physics 2017
            </h4>
            <p>
              My main takeaway from Baruch was the ability to condense complex
              problems into simple and elegent solutions. I realized that
              gaining a solid intution for complexity is simply a product of
              hard work. During this time I've also helped hundrends of fellow
              students achieve their academic goals both as a tutor and adjunct
              lecturer, and entered the student academic consulting center{" "}
              <a href="https://www.baruch.cuny.edu/sacc/hall_fame.htm">
                'hall of fame'
              </a>{" "}
            </p>
            <br />
            <p>
              During this time I've also started my own venture, a portable
              coffee maker, with the help of the{" "}
              <a href="https://cunystartups.com/accelerator/">
                CUNY startup accelerator
              </a>
              , where I recieved a first round investment seed of $5000. That,
              along with my experience of starting my own tutoring company has
              showed me my love for innovation and creativity that can be
              achieved with a wealth of inspiring people that I was surrounded
              with.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center" id="section-header">
          <h1 id="header-text-bold">Projects</h1>
        </Row>
        <Row>
          <div id="gallery-section" style={{ marginTop: "4rem" }}>
            <div id="thumbnail-gallery-container">
              <div class="thumbnail">
              <h4 id='project-header'>Tutor Dashboard</h4>
                <p>Developed a full stack tutoring management dashboard for my former tutoring buisness in order to manage lessons, locations, student levels and everything associated with the lessons. In the future I'd like to add the ability to store lessons, and associated files in AWS S3 buckets associated to each client, along with the ability for clients to access those files in a user facing frontend</p>
                <p id='project-tech'><b>Tech used:</b> React, google firebase, MongoDB, Node.js, express.js</p>
                <a href='https://tutoring-dashboard-mern.firebaseapp.com/'>
                <img
                  class="thumbnail-image"
                  src={TutorDashboard}
                  alt=""
                />
                </a>
              </div>

              <div class="thumbnail">
                <h4 id='project-header'>ML trader</h4>
                <p>Worked in a team to build an ARIMA based price prediction model for the top 200 most popular stocks. The single page application allows users to view and predict stock prices with the power of big data and machine learning. Once predicted, the stock goes into a 3 level client side alert system that provides the user with feedback based off how the real stock price vs the predicted price is doing.</p>
                <p  id='project-tech'><b>Tech used:</b> React, Flask, MySQL, AWS lambda</p>
              <a href='https://cse6242project-mlert.herokuapp.com/'>
                <img
                  class="thumbnail-image"
                  src={MLERT}
                  alt=""
                />
                </a>
              </div>
          </div>
          </div>
        </Row>
        <Card>
  <Card.Body id='quoteEnd' style={{textAlign: 'center'}}>Talk is cheap. Show me the code - Linus Torvalds </Card.Body>
</Card>
      </Container>
    </div>
  );
}

export default App;
