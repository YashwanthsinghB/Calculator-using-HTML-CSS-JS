let string="";
let buttons =document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      try{
      string =eval(string);
      document.querySelector('#display').value = string;
      }catch{
        string ="Error";
        document.querySelector('#display').value = string;

      }
    }else if(e.target.innerHTML == "C"){
      string = "";
      document.querySelector('#display').value = string;
    }else if(e.target.innerHTML =="Del"){
        string = string.slice(0, -1);
        document.querySelector('#display').value = string;
    }
    else{
      string = string+e.target.innerHTML;
      document.querySelector('#display').value = string;
    }  
  });
});