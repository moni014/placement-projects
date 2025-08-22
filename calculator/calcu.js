const display =document.getElementById('display');

function insert(value)
 {
   display.value=display.value+value;
  }
  
  function all_clear()
   {
    display.value=" ";
  }
  
  function calculation() 
  {
  try{ 
    display.value=eval(display.value);
    } catch (e) {
     display.value='errorX';
    }
  }
  