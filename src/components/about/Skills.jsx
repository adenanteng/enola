import React from "react";
// import heroImg from "../../assets/img/hero/dark.jpg";
// import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const skillsContent = [
  { icon: "fa-docker", skillName: "Docker", skillDesc: "Build, Ship, Run." },
  { icon: "fa-digital-ocean", skillName: "Digital Ocean", skillDesc: "Advance Server." },
  { icon: "fa-github", skillName: "Github", skillDesc: "Version Control." },
  { icon: "fa-vuejs", skillName: "Vue JS", skillDesc: "Front-End." },
  { icon: "fa-react", skillName: "React", skillDesc: "Front-End." },
  { icon: "fa-laravel", skillName: "Laravel", skillDesc: "Artisan." },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        // <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
        //   <div className={`c100 ${val.skillClass}`}>
        //     <span>{val.skillPercent}%</span>
        //     {/* <i className={`fa fa-duotone ${item.icon}`}></i> */}
        //     <i className={`fa fa-brands fa-react`}></i>
        //     <div className="slice">
        //       <div className="bar"></div>
        //       <div className="fill"></div>
        //     </div>
        //   </div>
        //   <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
        //     {val.skillName}
        //   </h6>
        // </div>

        <div className="col-12 col-md-3" key={i}>
          <div className="box-brands with-margin d-flex justify-content-start gap-3">
            <i className={`fa fa-brands fa-4x ${val.icon}`}></i>
            <div>
              <h5 className="poppins-font position-relative">{val.skillName}</h5>
              <p className="open-sans-font m-0 position-relative">{val.skillDesc}</p>
            </div>
          </div>
        </div>

      ))}
    </>
  );
};

export default Skills;
