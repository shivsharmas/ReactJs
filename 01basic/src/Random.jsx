function Random(){
  let number = Math.floor(Math.random() * 100) + 1;
  
  return  <h4 style={{backgroundColor : "#547185", color : "#fff"}}>Random number is: {number}</h4>
}

export default Random;