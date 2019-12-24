function randomBoolean(){
    var booArray = [
        true,false
    ];

    return booArray[getRandomInt(booArray.length)]

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function myFunction(form){
    var word = form.text.value;
    var newWord = ""; 
    for (i = 0; i<word.length; i++){
        if (randomBoolean()==true){
            newWord = newWord + word.charAt(i).toUpperCase();
        }
        else{
            newWord = newWord + word.charAt(i);
        }
        
    }
    document.getElementById("mixedText").innerHTML = newWord;

}
