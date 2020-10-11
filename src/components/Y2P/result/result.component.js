import React from "react";
import PropTypes from "prop-types";
import './result.style.css'
import { Table } from 'reactstrap';

const Result = ({accrudintrst, ytc,ytm,cashflow_ytm,cashflow_ytc }) => {
  console.log("######",cashflow_ytc)
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
        width:"32%",
        textAlign : "center",
        border:"1px solid grey",
        borderRadius:"10px",
        }}>
      <thead>
      <tr>
         <td colspan = "3" style={{color:"aqua"}} >---</td>
      </tr>

        <tr>
          <th scope="row">AccrudIntrst</th>
          <th>YTM</th>
          <th>YTC</th>
        </tr>
      </thead>

      <tbody style={{color:"#09C2DE"}}>
        <tr>
      <td >{accrudintrst}</td>
      <td>{ytm}</td>
      <td>{ytc}</td>
        </tr>
      </tbody>
   </Table>
   <Table 
    style={{
        marginTop:"20px", 
        color:"#c57254",
        padding:"5px",
        width:"32%",
        textAlign : "center",
        border:"1px solid grey",
        borderRadius:"10px",
        }}>

      <thead>
      <tr>
         <td colspan = "3" style={{color:"aqua"}} >Cashflow YTC</td>
      </tr>
        <tr>
          <th>Sr_No</th>
          <th>Price_Coupon</th>
          <th>IP_Date</th>
        </tr>
      </thead>
      {
          <tbody style={{color:"#09C2DE"}} >
           <tr>
            <td colspan = "3" >{cashflow_ytc}</td>
          </tr>
         </tbody>
        }
   </Table>

   <Table 
    style={{
        marginTop:"20px", 
        color:"#c57254",
        padding:"5px",
        width:"32%",
        textAlign : "center",
        border:"1px solid grey",
        borderRadius:"10px",
        }}>

      <thead>
      <tr>
         <td colspan = "3" style={{color:"aqua"}}>Cashflow YTM</td>
      </tr>
        <tr>
          <th>Sr_No</th>
          <th>Price_Coupon</th>
          <th>IP_Date</th>
        </tr>
      </thead>
      {
        cashflow_ytm.slice(0,3).map(buc =>(
          <tbody style={{color:"#09C2DE"}} >
           <tr>
            <td>{buc["Sr_No"]}</td>
            <td>{buc["Price_Coupon"]}</td>
            <td>{buc["IP_Date"]}</td>
          </tr>
         </tbody>
        ))}
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