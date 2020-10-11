import React, { Component } from 'react';
import axios from 'axios';


class P2Y extends Component {
  constructor(props){
    super(props);
    this.state  = {
      isopen:false,
      ISIN: "",
      Price:0,
      stdate:"",
      accured_interest:0,
      YTC:0,
      YTM:0,
      price_coupan:[],
      serial_number:[],
      IP_date:[],
      serial_number_ytc:[],
      price_coupan_ytc:[],
      IP_date_ytc:[]

    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSUbmit=this.handleSUbmit.bind(this);
  }
  handleChange=(e)=> {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value});
    console.log(this.state.ISIN)
    console.log(this.state.Price)
    
}
handleSUbmit=(e)=>{
  const url ='http://13.233.124.3/Common/BondService.asmx/P2Y';
  const   bodyData  =  {
    "ISIN": this.state.ISIN,
    "Price": this.state.Price,
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
    
    var value= (resp.data.d).split(',')
    console.log(value)
  //   const fvc=value[3].slice(20,27)
  //  const fvo=value[2].slice(30,37)
      const ytc=value[3].slice(7,14)
     const ytm=value[4].slice(7,14)
  //  const cytc=value[6].slice(15,19)
  //  const cytm=value[4].slice(15,19)
       const ai=value[2].slice(25,41)
       var pc=[]
       pc.push(value[325].slice(19,28))
       for(var i=328;i<=337;i=i+3){
       pc.push(value[i].slice(19,25))
       }
       pc.push(value[340].slice(19,27))
      pc= pc.map(i=>parseFloat(i))
      var sr=[]
       sr.push(value[324].slice(30,31))
       for(var j=327;j<=339;j=j+3){
      sr.push(value[j].slice(13,14))
        }
       sr= sr.map(j=>parseInt(j))
       var ipd=[]
       for(var k=326;k<=341;k=k+3){
      ipd.push(value[k].slice(14,25))
        }
        var srytc=[]
        srytc.push(value[5].slice(30,31))
        for(var l=8;l<=29;l=l+3){
       srytc.push(value[l].slice(13,14))
         }
         for(var m=32;m<=299;m=m+3){
          srytc.push(value[m].slice(13,15))
            }
            for(var n=302;n<=320;n=n+3){
              srytc.push(value[n].slice(13,16))
                }
        srytc= srytc.map(l=>parseInt(l),m=>parseInt(m),n=>parseInt(n))
        var pcytc=[]
       pcytc.push(value[6].slice(19,28))
       for(var o=9;o<=318;o=o+3){
       pcytc.push(value[o].slice(19,25))
       }
       pcytc.push(value[321].slice(19,27))
      pcytc= pcytc.map(o=>parseFloat(o))
      var ipdytc=[]
       for(var p=7;p<=322;p=p+3){
      ipdytc.push(value[p].slice(14,25))
        }
       console.log(ipdytc)
 
  
  // console.log(posts)
   this.setState({accured_interest:ai,YTC:ytc,YTM:ytm,price_coupan:pc,serial_number:sr,IP_date:ipd,serial_number_ytc:srytc,price_coupan_ytc:pcytc,IP_date_ytc:ipdytc,isopen:!this.state.isopen});
  })
  .catch((error) => {
    // this.setState({ error, isLoading: false })
    console.log(error);
  });
}

  // renderTableData() {
  //   const Rohit = JSON.stringify(this.state.data);
  //   // console.log(Shivam.length)
  //   return Rohit.map((student,index) => {
  //     <li key={index} data={student} />

  //       })}
  render() {
    const open=this.state.isopen;
    return (
      <div className="container">
        <label for="ISIN">ISIN:</label>
  <input type="text" id="ISIN" name="ISIN" onChange={this.handleChange}/><br/>
  <label for="PRice">Price:</label>
  <input type="text" id="price" name="Price" onChange={this.handleChange}/><br/>
  <label for="Settlement date">SETTLEMENT DATE:</label>
  <input type="text" id="sdate" name="stdate" onChange={this.handleChange}/><br/>
  <button type="submit" onClick={this.handleSUbmit}> submit </button>
  {open? <table>
        <tr>
    <th>Accured Interest</th>
    <th>YTM </th>
    <th>YTC</th>
    <th>cashflow ytc</th>
    <th>cashflow ytm</th>
  </tr>
  <tr>
    <td>{this.state.accured_interest}</td>
    <td>{this.state.YTC}</td>
    <td>{this.state.YTM}</td>
    <td>
    serial_number  ytc{
        this.state.serial_number_ytc.map((num,j)=>
        <td key={j}>{num}</td>
        )}
      Price_coupan ytc {
        this.state.price_coupan_ytc.map((num,j)=>
                         <td key={j}>{num}</td>
        )}
        IP Date YTC {
        this.state.IP_date_ytc.map((num,j)=>
                         <td key={j}>{num}</td>
        )}
    </td>
    <td>
      serial_number{
        this.state.serial_number.map((num,j)=>
        <td key={j}>{num}</td>
        )}
      Price_coupan  {
        this.state.price_coupan.map((num,j)=>
                         <td key={j}>{num}</td>
        )}
         IP Date {
        this.state.IP_date.map((num,j)=>
                         <td key={j}>{num}</td>
        )}
        </td>
  </tr>
        </table>:void(0)}
       
      </div>
    );
  }
}

export default P2Y;