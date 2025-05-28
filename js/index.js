
showlangth();


function showlangth(){
  document.querySelector('#inputRange').addEventListener('input',e => {
    document.querySelector('#PasswordCounter').textContent = e.target.value;
  });
}

 
  function passwordGeneratorBtn(){
    let display = document.querySelector('#displayElement');
    let as = passwordCreater();
    display.value = as;
    
 }

  function passwordCreater(){
    let langth = document.querySelector('#inputRange').value
    console.log(langth);
    let uppercase =clickOrNot( document.querySelector('#uppercase'));
    console.log(uppercase);
    let lovercase = clickOrNot(document.querySelector('#lovercase'));
    console.log(lovercase);
    let number= clickOrNot(document.querySelector('#number'));
    console.log(number);
    let symbols= clickOrNot(document.querySelector('#symbol'));
    console.log(symbols);

    let password = passwordGenerator(langth,uppercase,lovercase,number,symbols);
    console.log(password);
    return password;

  }

  function passwordGenerator(langth,uppercaseBtn ,lovercaseBtn ,numberBtn,symbolsBtn ){

    let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let lovercase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let numbers = [1,2,3,4,5,6,7,8,9,0];
    let symbols = ['!','@','#','$','%','^','&','*','-','+','=',':','?','|']

    let result ='';
    let i = 1;
    while( i <= langth){

      if(uppercaseBtn !== false && i <= langth){
        result+= password(uppercase);
        i++;
      }
       if(lovercaseBtn !== false && i <= langth){
        result+=password(lovercase) 
        i++;
      }
      if(numberBtn !== false && i <= langth){
        result+=password(numbers) 
        i++;
      }
      if(symbolsBtn !== false && i <= langth){
      result+=password(symbols) 
      i++;
      }
    }
    return result;
  }
  function password(array){
    let index= Math.round(Math.random() * ( array.length - 1) );
    result = array[index];
    return result
  }
  function clickOrNot(chekbox){
    return chekbox.checked;
  }
