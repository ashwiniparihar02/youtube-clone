 export const API_KEY='AIzaSyBm1p-QNtvhjSaQ0c1DtIExlwbBm3Yk3vU';

 export const value_converter=(value)=>{
  if(value>=1000000)
  {
    return Math.floor(value/10000000)+"M";
  }
  else if(value>=1000)
  {
    return Math.floor(value/1000)+"K";
  }
  else
  {
return value;
  }
 }