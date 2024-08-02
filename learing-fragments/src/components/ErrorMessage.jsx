const ErrorMessage = ({items}) =>{
  // in props location we define items. it is a value which stored array in App.js so we have  to define same name in the place of props using destructuring 
  return <>
    {items.length===0 && <h2>still, I am hungry</h2>}
    </>
};

export default ErrorMessage;