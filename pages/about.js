// import Header from "../components/Header";

import {  getPosts } from "../api/post";
import { useEffect, useState } from "../lib";

const AboutPage = () => {

  const [data, setData] = useState([]);
  // chạy sau khi render

  useEffect(() => {
    getPosts().then((data) => {
      setData(data);
    });
  }, []);

    return `
    <html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VA 501.F</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"/>
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&amp;display=swap"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&amp;display=swap" media="print" onload="this.media='all'"/>
    <noscript>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&amp;display=swap"/>
    </noscript>
    <link href="./css/font-awesome/css/all.min.css?ver=1.2.0" rel="stylesheet">
    <link href="./css/bootstrap-icons/bootstrap-icons.css?ver=1.2.0" rel="stylesheet">
    <link href="./css/bootstrap.min.css?ver=1.2.0" rel="stylesheet">
    <link href="./css/main.css?ver=1.2.0" rel="stylesheet">
    <noscript>
      <style type="text/css">
        [data-aos] {
            opacity: 1 !important;
            transform: translate(0) scale(1) !important;
        }
      </style>
    </noscript>
  </head>
  <body id="top">
    <header class="bg-light">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="header-nav" role="navigation">
        <div class="container"><a class="link-dark navbar-brand site-title mb-0" href="/home">VA 501.F</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-2">
              <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
              <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
              <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
              <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
              <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="section pt-4 px-3 px-lg-4" id="about">
  <div class="container-narrow">
    <div class="row">
      <div class="col-md-6">
      ${data.map(({  content,title,name, age }) => `
        <h2 class="h4 my-2">Hello! I’m ${name}.</h2>
        <p>I am passionate about Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
        <div class="row mt-3">
          <div class="col-sm-2">
            <div class="pb-1">Age:</div>
          </div>
          <div class="col-sm-10">
            <div class="pb-1 fw-bolder">${age}</div>
          </div>
          <div class="col-sm-2">
            <div class="pb-1">Email:</div>
          </div>
          <div class="col-sm-10">
            <div class="pb-1 fw-bolder">${content}</div>
          </div>
          <div class="col-sm-2">
            <div class="pb-1">Hobby:</div>
          </div>
          <div class="col-sm-10">
            <div class="pb-1 fw-bolder">Play sports, Travel...</div>
          </div>
          <div class="col-sm-2">
            <div class="pb-1">Phone:</div>
          </div>
          <div class="col-sm-10">
            <div class="pb-1 fw-bolder">${title}</div>
          </div>
          <div class="col-sm-2">
            <div class="pb-1">Address:</div>
          </div>
          <div class="col-sm-10">
            <div class="pb-1 fw-bolder">Thanh Tri, Ha Noi</div>
          </div>
          <div class="col-sm-2">
            <div class="pb-1">Staus:</div>
          </div>
          <div class="col-sm-10">
            <div class="pb-1 fw-bolder">Single</div>
          </div>
        </div>
      </div>
      `).join("")}
      <div class="col-md-5 offset-md-1" data-aos="fade-left" data-aos-delay="100"><img class="avatar img-fluid mt-2" src="images/avatar2.jpg" width="400" height="400" alt="Walter Patterson"/></div>
    </div>
  </div>
</div>


<footer class="pt-4 pb-4 text-center bg-light">
  <div class="container">
    <div class="my-3">
      <div class="h4">Nguyen Viet Anh</div>
      <p>Web Developer</p>
      <div class="social-nav">
        <nav role="navigation">
          <ul class="nav justify-content-center">
            <li class="nav-item"><a class="nav-link" href="https://twitter.com/templateflip" title="Twitter"><i class="fab fa-twitter"></i><span class="menu-title sr-only">Twitter</span></a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/templateflip" title="Facebook"><i class="fab fa-facebook"></i><span class="menu-title sr-only">Facebook</span></a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.instagram.com/templateflip" title="Instagram"><i class="fab fa-instagram"></i><span class="menu-title sr-only">Instagram</span></a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/" title="LinkedIn"><i class="fab fa-linkedin"></i><span class="menu-title sr-only">LinkedIn</span></a></li>
            <li class="nav-item"><a class="nav-link" href="https://www.behance.net/templateflip" title="Behance"><i class="fab fa-behance"></i><span class="menu-title sr-only">Behance</span></a></li>
          </ul>
        </nav>
      </div>
    </div>
    
    `
};
export default AboutPage;
