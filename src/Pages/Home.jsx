import React, { useRef } from 'react'
import './Home.css'
import { Button, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './component/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const skills = [
    { name: "Design Thinking", percentage: "80%" },
    { name: "Double Diamond", percentage: "75%" },
    { name: "HCD", percentage: "85%" },
    { name: "Figma", percentage: "90%" },
    { name: "Adobe XD", percentage: "85%" },
    { name: "Sketch", percentage: "70%" },
    { name: "Miro", percentage: "80%" },
    { name: "Photoshop", percentage: "60%" },
    { name: "Trello", percentage: "80%" },
    { name: "UI Design", percentage: "85%" },
    { name: "Wireframing", percentage: "75%" },
    { name: "UX Design", percentage: "90%" },
    { name: "Prototyping", percentage: "80%" },
    { name: "Empathize", percentage: "85%" },
    { name: "User Research", percentage: "80%" },
    { name: "HTML", percentage: "95%" },
    { name: "CSS", percentage: "90%" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100, // Adjust speed here
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 100 // Adjust autoplay speed here
  };

  // Create references for each section
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className='' style={{ overflow: "hidden", backgroundColor: "#F4F4F4", minHeight: "100vh" }}>
      {/* header */}
      <Row className='mt-5 ms-'>
        <Col md={1}> </Col>
        <Col md={1}><img className='logo' src="https://i.postimg.cc/vmRtgtZ4/LOGO.png" alt="" /> </Col>
        <Col md={3}> </Col>
        <Col md={3}>
          <Navbar collapseOnSelect className='nav'>
            <Container>
              <Nav>
                <Nav.Link onClick={() => scrollToSection(aboutRef)} className='ms- navitems'>About</Nav.Link>
                <Nav.Link onClick={() => scrollToSection(worksRef)} className='ms-4 navitems'>Works</Nav.Link>
                <Nav.Link onClick={() => scrollToSection(contactRef)} className='ms-4 navitems'>Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
        <Col md={2}> </Col>
        <Col md={2}><Button className='cwtbutton' type='button' variant="contained">Can We Talk?</Button> </Col>
      </Row>

      {/* head & p */}
      <div className='mt-5'>
        <h5 className='firsthead '>“LET’S CREATE YOUR SUCCESS TOGETHER”</h5>
        <h1 className='mainhead'>Sarang.UsereXperienceDesign.com</h1>
        <p className='headabout mt-5'>Hey There! I'm Sarang, a Process based UI/UX Designer who loves creating amazing digital stuff. Hailing from Kerala, India's own paradise with its
          stunning sceneries.  I mix my culture with my tech skills to make cool designs, With a passion for meticulous research and an eye for detail,
          I strive to make every interaction a delightful journey for users.</p>
        <center><Button className='hirebutton mt-3' type='button' variant="contained"><b>Hire me</b></Button></center>
      </div>

      {/* main img */}
      <div className="carousel-container mt-5">
        <Slider {...settings}>
          <div>
            <img className='mainimg' src="https://i.postimg.cc/D06dDSLn/Property-1-Default.png" alt="" />
          </div>
          <div>
            <img className='mainimg' src="https://i.postimg.cc/VLcxhPGt/Property-1-Variant2.png" alt="" />
          </div>
          <div>
            <img className='mainimg' src="https://i.postimg.cc/hv85nhyd/Property-1-Variant3.png" alt="" />
          </div>
          <div>
            <img className='mainimg' src="https://i.postimg.cc/Mp3rqCDd/Property-1-Variant4.png" alt="" />
          </div>
          <div>
            <img className='mainimg' src="https://i.postimg.cc/R0jsnw2t/Property-1-Variant5.png" alt="" />
          </div>
          <div>
            <img className='mainimg' src="https://i.postimg.cc/4xyBL8gt/Property-1-Variant7.png" alt="" />
          </div>
          <div>
            <img className='mainimg' src="https://i.postimg.cc/zBrwr79x/Property-1-Variant6.png" alt="" />
          </div>
          <div>
            <img className='mainimg' src="https://i.postimg.cc/y83032Kf/Property-1-Variant9.png" alt="" />
          </div>
        </Slider>
        <div className="logoz-container">
          <img className="logoz" src="https://i.postimg.cc/vmRtgtZ4/LOGO.png" alt="logo" />
        </div>
      </div>

      {/* about */}
      <div ref={aboutRef}>
        <div className="line-container ms-5 mt-5">
          <div className="line ms-2" />
          <h3 className='abouthead ms-2'>Just about me</h3>
        </div>
        <div className="App">
          <Row className='mt-5 about-section'>
            <Col md={1}></Col>
            <Col md={7} className='about-text'>
              <p>I'm Sarang, and I come from the beautiful land of Kerala, also known as "God's own country".
                I love two things the most: designing cool stuff and making music with my bass guitar.</p>
              <p>I've been working as a UI/UX designer for a year now. After I finished my BCA degree, I wanted to
                learn more about making apps, so I studied something called Flutter Full stack Development. But
                then, I had some health issues that made it hard for me to keep going with it. Later on, I joined NSID
                to learn more about designing cool things on computers, especially under some very smart teachers
                from NID NIFT.</p>
              <p>I also got to work at Quebex Technologies, where I learned a lot as a UI/UX Design intern.
                At the same time, I was also a part-time product designer at Coodeedex Technologies. It's been quite
                a journey, and I'm excited to see where it takes me next! Oh, and don't forget, I also sing in the
                NAKARA Music Band.</p>
            </Col>
            <Col md={3} className='about-image-container'>
              <div className="about-image">
                <img className='sarimage' src="https://i.postimg.cc/YSBcvXj6/About-Session.png" alt="About Me" />
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <Row><Col md={1}></Col>
        <Col md={5}>
          <h4 className='mt-5' style={{ fontWeight: "390" }}>Do's</h4>
          <div className='mt-5' style={{ alignItems: "center", justifyContent: "center", backgroundColor: "white", width: "100%", height: "70%", padding: '20px', }}>
            <ul style={{ fontFamily: "font-family: 'Jost', sans-serif;,", fontSize: "15px", textAlign: "justify" }}>
              <li>I'm excited about design methods like Double Diamond, HCD
                and Design Thinking—I find joy in every step of the process</li>
              <br />
              <li>I use tools like Figma, XD, Photoshop, and Spline to create
                websites and apps that are both visually appealing and easy to
                use. Making sure they work smoothly and look great is my
                priority</li>
              <br />
              <li>I enjoy digging into what users need and what the business
                wants to achieve, so we can meet everyone's goals</li>
            </ul>
          </div>
        </Col>
        <Col md={5}>
          <h4 className='mt-5' style={{ fontWeight: "390" }}>Don'ts</h4>
          <div className='mt-5' style={{ alignItems: "center", justifyContent: "center", backgroundColor: "white", width: "100%", height: "70%", padding: '20px', }}>
            <ul style={{ fontFamily: "font-family: 'Jost', sans-serif;,", fontSize: "15px", textAlign: "justify" }}>
              <li>I'm a bit hesitant to rush into projects to meet deadlines
                because I believe good work Needs tim</li><br />
              <li>Starting a project without study, without clear ideas, or only
                with a name and logo will degrade its quality, thus I'm not
                interested in doing that.</li><br />
              <li>Also, I value originality and high-quality work</li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* skills */}
      <div>
        <div className="line-container ms-5 mt-5">
          <div className="line ms-2" />
          <h3 className='abouthead ms-2'>Skills</h3>
        </div>
        <div className="App">
          <div className="skills-container">
            <div className="skills-grid">
              {skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  {skill.name}
                  <div className="percentage">{skill.percentage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Works */}
      <div ref={worksRef} style={{ backgroundColor: "black" }}>
        <div className="line-container ms-5 mt-5">
          <div className="lineed ms-2" />
          <h3 className='abouthead p-5' style={{ color: "white" }}>Works i have done</h3>
        </div>
        <div>
          <Carousel data-bs-theme="dark" className="mt-3 caro">
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto"
                src="https://i.postimg.cc/3JWVwMr4/Amanathobe.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto"
                src="https://i.postimg.cc/V6QxbJhJ/Mr-GO.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src="https://i.postimg.cc/zfwPQ87M/SLB.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src="https://i.postimg.cc/9M813M7x/Spares.png"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Contact */}
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
