import React from "react";
import "./MintPage.css";
import Mint_Lower_Lights from "assets/images/Desktop/Mint_Lower_Lights.svg";
import Mint_Lower_Lights_rotated from "assets/images/Desktop/Mint_Lower_Lights-rotated.svg";
import Mint_upper_Lights from "assets/images/Desktop/Mint_upper_Lights.svg";
import mintMonkeyLeft from "assets/images/Desktop/mint-monkey-left.svg";
import mintMonkeyRight from "assets/images/Desktop/mint-monkey-right.svg";

import { useFormik } from "formik";

const MintPage = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.number) {
      errors.number = "Required";
    } else if (values.number <= 0) {
      errors.number = "Must be greator than 0";
    } else if (values.number > 20) {
      errors.number = "Must be less than 20";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      number: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="mint-page-wrapper">
      <div className="container-wrapper">
        <div className="mint-page-form">
          <img
            className="mint-page-form-img-lower"
            src={Mint_Lower_Lights_rotated}
            alt=""
          />
          {/* <img
            className="mint-page-form-img-upper"
            src={Mint_upper_Lights}
            alt=""
          /> */}

          <form action="" className="mb-5px" onSubmit={formik.handleSubmit}>
            <div className="mint-page-form-btn-wrapper">
              <img src={mintMonkeyLeft} className="mint-monkey-left" alt="" />
              <img src={mintMonkeyRight} className="mint-monkey-right" alt="" />
              <button
                type="submit"
                className="fs-22px white text-center pointer"
              >
                Mint
              </button>
            </div>
            <input
              type="number"
              className="mint-page-form-input fs-22px gray"
              placeholder="QTY Input"
              name="number"
              onChange={formik.handleChange}
              value={formik.values.number}
            />

            <p className="input-error fs-16px">
              {formik.errors.number ? <div>{formik.errors.number}</div> : null}
            </p>
          </form>
          <a
            href="/"
            className="mint-page-form-link text-center block red fs-18px"
          >
            Connect to Boba L2
          </a>
        </div>
      </div>
    </div>
  );
};

export default MintPage;
