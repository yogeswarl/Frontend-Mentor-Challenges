let priceValue=document.querySelectorAll('.card');
window.onload = function(){
  document.getElementById('toggle').onclick = (e)=> {
    console.log(e.target.checked);
    if(e.target.checked){
      priceValue.forEach(value=> value.classList.remove('annually'))
    }
    else{
      priceValue.forEach(value=> value.classList.add('annually'))
    }
  }
}