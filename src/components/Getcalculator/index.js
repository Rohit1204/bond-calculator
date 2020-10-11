import React, { Component } from "react";
import axios from 'axios'
import {Calculator} from './Getcalculator/calculator/calculator.component'
import Result from './Getcalculator/result/result.component'

class GetCalculator extends Component {
  constructor(props){
    super(props);
    this.state  = {
      isopen:false,
      ISIN: "",
      Price:0,
      bonds:0,
      stdate:"",
      face_value_current:0,
      face_value_original:0,
      quantum:0,
      last_IP_date:"",
      accured_interest_days:0,
      accued_interest:0,
      principal_amount:0,
      settlement_amount:0,
      Stamp_duty:0,
      Consideration_Amount:0
    };
    this.handleChange=this.handleChange.bind(this);

  }

  handlePrice = value => {
    this.setState({ Price: value });
    console.log(this.state.Price)
  };
  handleBond = value => {
    this.setState({ bonds: value });
    console.log(this.state.bonds)
  };

  handleChange=(e)=> {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value});
    console.log(this.state.ISIN)
    console.log(this.state.Price)
    
}
componentDidUpdate =(e)=>{
  const url ='http://13.233.124.3/Common/BondService.asmx/Get_Settl_Calc';
    const   bodyData  =  {
      "ISIN": this.state.ISIN,
      "Price": this.state.Price,
      "ValueDate": this.state.stdate, 
      "No_Of_Bonds": this.state.bonds
    }
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      "Content-Type" : "application/json"
    };
    axios
    .post(url,bodyData,headers)
    .then((resp) => {
      
      var val=JSON.parse(resp.data.d)
            
      var value= (resp.data.d).split(',')
      console.log(value)
    const pa=val[0]['OUTPUT'][0]['data'][0]['Principal_Amount']
    const aid=val[0]['OUTPUT'][0]['data'][0]['Accrued_Interest_Days']
    const sa=val[0]['OUTPUT'][0]['data'][0]['Settlment_Amount']
    const ai=val[0]['OUTPUT'][0]['data'][0]['Accrued_Interest']
    const sd=val[0]['OUTPUT'][0]['data'][0]['Stamp_Duty']
    const CA=val[0]['OUTPUT'][0]['data'][0]['Consideration_Amount']
    const fvc=val[0]['OUTPUT'][0]['data'][0]['FaceValue_Current']
    const fvo=val[0]['OUTPUT'][0]['data'][0]['FaceValue_Original']
    const q=val[0]['OUTPUT'][0]['data'][0]['Quantum']
    const lid=val[0]['OUTPUT'][0]['data'][0]['LastIp_Date']

    


  
      
    
      
      // JSON.parse(JSON.stringify(resp.data.d)).map(feature=>{
      //   let dict = {name:feature[0],isActive:Boolean(feature[1])}
      //   data.push(dict)        
      // })
     //const posts = JSON.parse(resp.data.body);
    // console.log(posts)
     this.setState({ face_value_current:fvc,face_value_original:fvo,quantum:q,last_IP_date:lid,accured_interest_days:aid,accued_interest:ai,principal_amount:pa,settlement_amount:sa,isopen:!this.state.isopen,Stamp_duty:sd,Consideration_Amount:CA});
    })
    .catch((error) => {
      // this.setState({ error, isLoading: false })
      console.log(error);
    });
}

  // componentDidMount() {
  //   const url ='http://13.233.124.3/Common/BondService.asmx/Get_Settl_Calc';
  //   const   bodyData  =  {
  //     "ISIN": this.state.ISIN,
  //     "Price": 100,
  //     "ValueDate": '2020-06-27', 
  //     "No_Of_Bonds": 10
  //   }
  //   const headers = {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  //     "Content-Type" : "application/json"
  //   };
 
  render() {
    const { Price, stdate,accured_interest_days, face_value_current, accued_interest,bonds, principal_amount,face_value_original,quantum,last_IP_date,settlement_amount } = this.state;
    return (
      <div className='App'>
          <div className='container'>
             <Calculator 
              Price={Price}
              month={stdate} 
              bonds= {bonds}
              handleBond ={this.handleBond}
              handlePrice={this.handlePrice}
              handleChange={this.handleChange}
              
            />
              <Result
              fvc = {face_value_current}  
              fvo = {face_value_original}
              quantum={quantum}
              accrudintrst = {accued_interest} 
              accrudintrstdays = {accured_interest_days}
              principalamount = {principal_amount}
              settlementamnt={settlement_amount}
              lastipdate={last_IP_date}
            />
            
 
        </div>  
      </div>
    );
  }
}

export default GetCalculator;