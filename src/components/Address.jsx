import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-duotone fa-map position-absolute"></i>
        <span className="d-block">Alamat</span>Jl. Lintas Sumatera, Baradatu, Way Kanan.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-duotone fa-envelope-open position-absolute"></i>
        <span className="d-block">Surel</span>{" "}
        <a href="mailto:admin@enola.space">admin@enola.space</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-duotone fa-phone-square position-absolute"></i>
        <span className="d-block">Telepon</span>{" "}
        <a href="https://wa.me/6285156875180">+62 581 5687 5180</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
