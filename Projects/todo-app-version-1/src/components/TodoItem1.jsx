function TodoItem1(){
  let todoName = 'But Milk';
  let todoDate = '04/10/2023';
  return (


<div class='container'>

    <div className="row item-row">
        <div className='col-6'>
          {todoName}
        </div>
        
        <div className='col-4'>
         {todoDate}
        </div>

        <div className='col-2'>
          <button type='button' className='btn btn-danger item-button'>Delete</button>
        </div>
    </div>

</div>
  )
}

export default TodoItem1;