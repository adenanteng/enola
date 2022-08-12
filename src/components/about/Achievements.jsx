import React from "react";

const achievementsContent = [
  { title: "2", subTitle1: "tahun", subTitle2: "pengalaman" },
  { title: "8", subTitle1: "proyek", subTitle2: "terselesaikan" },
  { title: "100", subTitle1: "pengguna", subTitle2: "aplikasi" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
