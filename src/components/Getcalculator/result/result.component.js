import React from "react";
import PropTypes from "prop-types";
import './result.style.css'
import { Table } from 'reactstrap';

const Result = ({fvc, fvo,quantum,accrudintrst,accrudintrstdays,principalamount,settlementamnt,lastipdate }) => {
    console.log("######",fvo)
    return (
        <div 
        style={{
          display:"flex",
          justifyContent:"space-between",
        }}
        >
        <Table 
        style={{
            marginTop:"20px", 
            color:"#c57254",
            padding:"5px",
            width:"56%",
            textAlign : "center",
            border:"1px solid grey",
            borderRadius:"10px",
            }}>
          <thead>
          <tr>
             <td colspan = "8" style={{color:"aqua"}} >---</td>
          </tr>
    
            <tr>
            <th scope="row">face value current</th>
    <th>Face value original </th>
    <th>quantum</th>
    <th>Last ip date</th>
    <th>accured interest days</th>
    <th>accured interest</th>
    <th>principal amount</th>
    <th>settlement amount</th>
            </tr>
          </thead>
    
          <tbody style={{color:"#09C2DE"}}>
            <tr>
          <td>{fvc}</td>
          <td>{fvo}</td>
          <td>{quantum}</td>
          <td>{lastipdate}</td>
          <td>{accrudintrstdays}</td>
          <td>{accrudintrst}</td>
          <td>{principalamount}</td>
          <td>{settlementamnt}</td>
            </tr>
          </tbody>
       </Table>
       </div>
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