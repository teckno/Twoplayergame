// example one

const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMaker= "x"
const playerTwoMarker = "o"

// example two

const playerOne = {
	
	name: "tim",
	marker: "X"
}

const playerTwo ={
	
	name: "jenn",
	marker: "o"
}


function printName(player){
	
	console.log(player.name)

}

console.log(playerOneName)
console.log(playerTwoName)

// function for the winning player

function gameOver(winningPlayer){
	
	console.log("Congratulations!")
	console.log(winningPlayer.name + " Is the winner!")
}




