import React, { useState } from "react";
// import Modal from "react-modal";
// import heroImg from "../../assets/img/hero/dark.jpg";
import heroImg from "../../assets/img/hero/enola.png";
import heroImgMobile from "../../assets/img/hero/enola.png";
// import cancelImg from "../../assets/img/cancel.svg";
// import Index from "../../components/about/index";
// import {TabPanel} from "react-tabs";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "ENOLA",
  heroDesignation: "Jika orang lain bisa, maka kami belum tentu.",
  heroDescriptions: ``,
  heroBtn: "Kunjungi Enola Clinic",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div className="col-lg-5 position-fixed d-none d-lg-block"
          // style={{backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage})`,}}
        >
          <img src={heroContent.heroMobileImage} className="align-items-center float-end" alt="logo"/>
        </div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid  d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            {/*<button className="button" onClick={toggleModalOne}>*/}
            <a href={`https://clinic.enola.space`} rel="noreferrer">
            <button className="button" >
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-duotone fa-arrow-right"></span>
            </button>
            </a>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      {/*<Modal*/}
      {/*  isOpen={isOpen}*/}
      {/*  onRequestClose={toggleModalOne}*/}
      {/*  contentLabel="My dialog"*/}
      {/*  className="custom-modal dark hero"*/}
      {/*  overlayClassName="custom-overlay dark"*/}
      {/*  closeTimeoutMS={500}*/}
      {/*>*/}
      {/*  <div>*/}
      {/*    <button className="close-modal" onClick={toggleModalOne}>*/}
      {/*      <img src={cancelImg} alt="close icon" />*/}
      {/*    </button>*/}
      {/*    /!* End close icon *!/*/}

      {/*    <div className="box_inner about">*/}
      {/*      <div data-aos="fade-up" data-aos-duration="1200">*/}
      {/*        <div className="title-section text-left text-sm-center">*/}
      {/*          <h1>*/}
      {/*            tentang <span>kami</span>*/}
      {/*          </h1>*/}
      {/*          <span className="title-bg">Resume</span>*/}
      {/*        </div>*/}
      {/*        /!* End title *!/*/}
      {/*        <Index />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  /!* End modal box news *!/*/}
      {/*</Modal>*/}
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
