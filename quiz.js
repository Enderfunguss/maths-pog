function send(){
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    actualAnswer = parseInt(number1) + parseInt(number2);
    questionNumber = "<h4>" + number1 + "x" + number2 + "</h4>";
    inputBox = "<br> Answer this: <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br>  <button class='btn btn-info' onclick='check()'>Check</button>";
    row = questionNumber + inputBox + checkButton;
    document.getElementById('output').innerHTML = row;
    number1 = document.getElementById('number1').value = "";
    number2 = document.getElementById('number2').value = "";
    
}