function AddTodo(){

  return(
  <div class='container'>
      

  <div className="row item-row">
      <div className='col-6'>
        <input type="text" placeholder='Enter todo here' />
      </div>
      
      <div className='col-4'>
        <input type="date" />
      </div>

      <div className='col-2'>
        <button type='button' className='btn btn-success item-button'>Add</button>
      </div>
  </div>
  </div>
  )
}

export default AddTodo;