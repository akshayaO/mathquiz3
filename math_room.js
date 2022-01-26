
function send(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    actual_answer = parseInt(player1) * parseInt(number2);
}

question_number = "<h4>" + number1 + "X"+ number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id = 'input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>";
row = question_number + input_box +check_button;


document.getElementById("player1").value = "";
document.getElementById("player2").value = "";