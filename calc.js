
const inner = document.getElementById("inner-container");

let display = document.getElementById('displayNumbers');






display.value = ''


function appendValue(value){

 
  display.value += value;

}

function cleardisplay(){
  display.value = ''
}


function clearonedisplay(){


  let displayString = display.value
  let lastIndex = displayString.length;
 
  let modifiedString = displayString.slice(0,lastIndex-1);
  display.value = modifiedString


}


function modulusValue(){

 display.value = Number(display.value)*1/100



}


function equatingresult(){

  try{

    if(display.value === ''){
      display.value = ''
    }
    else{
      display.value = eval(display.value)
    }
    
  }
  catch(error){
    display.value  = 'Error'
  }
}


  inner.onmousedown = function (event) {
    const rect = inner.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    function onMouseMove(e) {
      const outerRect = inner.parentElement.getBoundingClientRect();
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      // Ensure the container stays within bounds
      inner.style.left = Math.max(0, Math.min(newX, outerRect.width - rect.width)) + "px";
      inner.style.top = Math.max(0, Math.min(newY, outerRect.height - rect.height)) + "px";
    }

    document.addEventListener("mousemove", onMouseMove);

    document.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  };




  