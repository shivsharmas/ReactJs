function ShowingTime(){
  let time = new Date();


  return(
    <div>
      <p>This is Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default ShowingTime;