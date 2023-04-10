const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click" , countvowel);

function countvowel(){
   let vowelcount = 0;
   let countval = word.value.toLowerCase();
   

   for(i=0 ; i < countval.length; i++){
    let letter = countval[i];
    if(letter.match(/([a,e,i,o,u])/)){
      vowelcount++;
    }


   }
   result.innerHTML = `${word.value.toUpperCase()} has ${vowelcount} Vowels`;

}


