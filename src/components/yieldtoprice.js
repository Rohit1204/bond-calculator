import React, { Component } from "react";
import axios from 'axios'

import {Calculator} from './calculator/calculator.component'
import Result from './result/result.component'

class YieldCalculator extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      isopen:false,
      ISIN: "",
      Yield:0,
      stdate:"",
      accured_interest:0,
      YTC:"0",
      YTM:0,
      price_coupan:[],
      serial_number:[],
      IP_date:[],
      serial_number_ytc:[],
      price_coupan_ytc:[],
      IP_date_ytc:[],
      cashflow_YTM : [],
      cashflow_YTC : '',
      Price:0,
      bonds:0,
      face_value_current:0,
      face_value_original:0,
      quantum:0,
      last_IP_date:"",
      accured_interest_days:0,
      accued_interest:0,
      principal_amount:0,
      settlement_amount:0
   }
   this.handleChange=this.handleChange.bind(this);
 }

 componentDidUpdate =(e)=>{
  const url ='http://13.233.124.3/Common/BondService.asmx/Y2P';
  const   bodyData  =  {
    "ISIN": this.state.ISIN,
    "Yield": this.state.Yield,
    "ValueDate": this.state.stdate, 
    "Generate_CashFlow": 1
  }
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    "Content-Type" : "application/json"
  };
  axios
  .post(url,bodyData,headers)
  .then((resp) => {
    
    // var value= (resp.data.d).split(',')
    // console.log("Value",value)
    var val=JSON.parse(resp.data.d)
            
    var value= (resp.data.d).split(',')
    console.log(value)
    const ytm=val[0]['OUTPUT'][0]['data'][0]['YTM']
    const ytc=val[0]['OUTPUT'][0]['data'][0]['YTC']
    const accrudintrst=val[0]['OUTPUT'][0]['data'][0]['AccrudIntrst']
    const cashflow_ym=val[0]['OUTPUT'][0]['data'][0]['CashFlow_YTM']
    const cashflow_ytc=val[0]['OUTPUT'][0]['data'][0]['CashFlow_YTC']
    const cashflow_ytm = JSON.parse(cashflow_ym)  

    console.log("CASHFLOW : ",cashflow_ytc)
   
   this.setState({accured_interest:accrudintrst,
                  YTC:ytc,
                  YTM:ytm,
                  cashflow_YTM : cashflow_ytm,
                  cashflow_YTC : cashflow_ytc,
                  // price_coupan:price_coupon,
                  // serial_number:sr,
                  // IP_date:ipd,
                  // serial_number_ytc:srytc,
                  // price_coupan_ytc:pcytc,
                  // IP_date_ytc:ipdytc,
                  // isopen:!this.state.isopen
                });

   })
  .catch((error) => {
    console.log(error);
  });


}

// componentDidUpdate =(e)=>{
//   const url ='http://13.233.124.3/Common/BondService.asmx/Get_Settl_Calc';
//     const   bodyData  =  {
//       "ISIN": this.state.ISIN,
//       "Price": this.state.Price,
//       "ValueDate": this.state.stdate, 
//       "No_Of_Bonds": this.state.bonds
//     }
//     const headers = {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
//       "Content-Type" : "application/json"
//     };
//     axios
//     .post(url,bodyData,headers)
//     .then((resp) => {
      
//       var val=JSON.parse(resp.data.d)
            
//       var value= (resp.data.d).split(',')
//       console.log(value)
//     const pa=val[0]['OUTPUT'][0]['data'][0]['Principal_Amount']
//     const aid=val[0]['OUTPUT'][0]['data'][0]['Accrued_Interest_Days']
//     const sa=val[0]['OUTPUT'][0]['data'][0]['Settlment_Amount']
//     const ai=val[0]['OUTPUT'][0]['data'][0]['Accrued_Interest']
//     const sd=val[0]['OUTPUT'][0]['data'][0]['Stamp_Duty']
//     const CA=val[0]['OUTPUT'][0]['data'][0]['Consideration_Amount']
//     const fvc=val[0]['OUTPUT'][0]['data'][0]['FaceValue_Current']
//     const fvo=val[0]['OUTPUT'][0]['data'][0]['FaceValue_Original']
//     const q=val[0]['OUTPUT'][0]['data'][0]['Quantum']
//     const lid=val[0]['OUTPUT'][0]['data'][0]['LastIp_Date']

      
//       let dict=[]
//      this.setState({ 
//        face_value_current:fvc,
//        face_value_original:fvo,
//        quantum:q,
//        last_IP_date:lid,
//        accured_interest_days:aid,
//        accued_interest:ai,
//        principal_amount:pa,
//        settlement_amount:sa,
//        isopen:!this.state.isopen
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
 
  handleYield = value => {
    this.setState({ Yield: value });
    console.log(this.state.Yield)
  };
  handleBond = value => {
    this.setState({ bonds: value });
    console.log(this.state.bonds)
  };

  handleChange = value => {
    this.setState({ state: value });
  };

  handleChange=(e)=> {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value});
    console.log(this.state.ISIN)
    console.log(this.state.Yield)
  }

  render() {
    const { Yield, stdate,YTM, YTC, accured_interest,bonds, cashflow_YTM,cashflow_YTC } = this.state;
    console.log(YTM)
    return (
      <div className='App'>
          <div className='container'>
             <Calculator 
              Yield={Yield} 
              month={stdate} 
              Bond= {bonds}
              handleBond ={this.handleBond}
              handleYield={this.handleYield}
              handleChange={this.handleChange}
              
            />
            <Result
              ytc = {YTC}  
              ytm = {YTM}
              accrudintrst = {accured_interest} 
              cashflow_ytm = {cashflow_YTM}
              cashflow_ytc = {cashflow_YTC}
            />
          </div>  
      </div>
 
    );
  }
}

export default YieldCalculator;