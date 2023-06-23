
import { getPortfolios } from "../api/profile";
import { useEffect, useState } from "../lib";

const PortfolioPage = () => {
  const [data, setData] = useState([]);
  // chạy sau khi render

  useEffect(() => {
    getPortfolios().then((data) => {
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

    <div class="section px-2 px-lg-4 pt-5" id="portfolio">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="marker marker-center">Portfolio </h2>
    </div>
    <div class="grid bp-gallery pb-3" data-aos="zoom-in-up" data-aos-delay="100">
      <div class="grid-sizer"></div>
      ${data.map(({ name, img,describe }) => `
      <div class="grid-item"><a href="https://github.com">
      <figure class="portfolio-item"><img src="${img}" data-caption="Example of an optional caption."/>
        <figcaption> 
          <h4 class="h5 mb-0">${describe}</h4>
          <div>${name}</div>
        </figcaption>
      </figure></a></div>
            `).join("")}
      
     
    </div>
  </div>
</div>

    
  
    
    `;
};
export default PortfolioPage;
