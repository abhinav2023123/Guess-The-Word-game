player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")

player1_score=0
player2_score=0

document.getElementById("player1_name").innerHTML=player1_name+" - "
document.getElementById("player2_name").innerHTML=player2_name+" - "

document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score

document.getElementById("player_question").innerHTML="question_turn - "+player1_name
document.getElementById("player_answer").innerHTML="answer_turn - "+player2_name

function send() {

	getword=document.getElementById("word").value;
	word=getword.toLowerCase()
	console.log(word)

	char1=word.charAt(1)
	console.log(char1)

	length2=Math.floor(word.length/2)
	char2=word.charAt(length2)
	console.log(char2)	

	length1=word.length-1
	char3=word.charAt(length1)
	console.log(char3)

	remove1=word.replace(char1,"_")
	remove2=remove1.replace(char2,"_")
	remove3=remove2.replace(char3,"_")
	console.log(remove3)

	question="<h4 id='word_display'> quetsion: "+remove3+"</h4>"
	box =  '<br>answer: <input type="text" id="inputbox">'
	button= '<br><br><button class="btn btn-info" onclick="check()">check</button>'
	row = question+box+button
	document.getElementById("output").innerHTML=row
	document.getElementById("word").value=""
}

questionTurn="player1"
answerTurn="player2"

function  check() {
	getanswer=document.getElementById("inputbox").value
	answer=getanswer.toLowerCase()
	if (answer==word){
		if (answerTurn=="player1") {
			player1_score=player1_score+1
			document.getElementById("player1_score").innerHTML=player1_score	
		}
		else{
			player2_score=player2_score+1
			document.getElementById("player2_score").innerHTML=player2_score
		}
		
	}

	if (questionTurn=="player1"){
		questionTurn="player2"
		document.getElementById("player_question").innerHTML="question Turn- "+player2_name
	}
	else{
		questionTurn="player1"
		document.getElementById("player_question").innerHTML="question Turn- "+player1_name
	}

	if (answerTurn=="player1"){
		answerTurn="player2"
		document.getElementById("player_answer").innerHTML="answer Turn- "+player2_name
	}
	else{
		answerTurn="player1"
		document.getElementById("player_answer").innerHTML="answer Turn- "+player1_name
	}
	document.getElementById("output").innerHTML=""
}