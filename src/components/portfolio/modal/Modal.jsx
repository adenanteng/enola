import React from "react";
import img1 from "../../../assets/img/portfolio/project-1.jpg";
import img2 from "../../../assets/img/portfolio/project-2.jpg";
import portfolioVideo from "../../../assets/img/portfolio/video.mp4";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ modalId, setGetModal }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

    return (
      <div className="modal_portfolio ">
        <div
          className="modal__outside"
          onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
          {PortfolioData.filter((item) => item.id === modalId).map((item) => {
            return (
              <div key={item.id} data-aos="fade">
                <h2 className="heading mb-2">{item.type}</h2>
                <div className="modal__details">
                  {item.modalDetails.map((details, i) => {
                    return (
                      <div key={i} className="row open-sans-font">
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-duotone fa-file-text pr-2"></i>
                          Project:{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-duotone fa-user pr-2"></i>
                          Client :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-duotone fa-code pr-2"></i>
                          Language :{" "}
                          <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                        </div>
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-duotone fa-external-link pr-2"></i>
                          Preview :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <figure className="modal__img">
                  <img src={item.image} alt="portfolio project demo" />
                </figure>

                <button
                  className="close-modal"
                  onClick={() => setGetModal(false)}
                >
                  <img src={CloseImg} alt="portfolio project demo" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );

};

export default Modal;
