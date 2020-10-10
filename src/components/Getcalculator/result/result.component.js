import React from "react";
import PropTypes from "prop-types";
import './result.style.css'
import { Table } from 'reactstrap';

const Result = ({fvc, fvo,quantum,accrudintrst,accrudintrstdays,principalamount,settlementamnt }) => {

    );
};


Result.defaultProps = {
    func: () => <p>Missing numeric value</p>,
    text: "No value provided"
  };
  
  Result.propTypes = {
    func: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
  };
  
  export default Result;