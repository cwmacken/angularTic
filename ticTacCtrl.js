var p1Name = 'Player 1';
var p2Name = 'PLayer 2';



function home(){
  // var lookup=['a','b','c','d','e','f','g','h','i'];

//   for(var z=0;z<=8;z++){
   
//         document.getElementById(lookup[z]).value=0;
//         document.getElementById(lookup[z]).innerHTML="";
        
//         turn =1
// };
      document.getElementsByClassName('alertBox')[0].style.display = "none";
      document.getElementById('game').style.display="none";
      document.getElementById('startPage').style.display="inline";
		reset();		
}

var turn=1

function choose(x){
  
  // var pickX = "O";
  // var pickO = "X";
  // choiceX = pickX ;
  // choiceO = pickO;
  turn = x;
  drawFix=x;
  
  // return choiceX, choiceO;
  if (x==2){
  	p1Score = -1;
  	p2Score = 1
  }
  else{
  	p1Score =1;
  	p2Score= -1;
  }
  
  strGame();

};

function strGame(){
	  document.getElementById('game').style.display="inline";
	  document.getElementById('startPage').style.display="none";
	  var p1Hold = document.getElementById('p1').value;
	  var p2Hold = document.getElementById('p2').value;
	  document.getElementById('x').innerHTML = (p1Hold.toUpperCase())+'\'S';
	  p1Name = p1Hold.toUpperCase();
	  p2Name = p2Hold.toUpperCase();
	  return p1Name, p2Name;
}


var TicTacCtrl = function($scope){
		$scope.ticTacToe= [[0,0,0],[0,0,0],[0,0,0]]

	 $scope.ericisreset= function(row,column){
        
        document.getElementsByClassName('alertBox')[0].style.display = "none";
        document.getElementById('o').innerHTML = "TURN";
        document.getElementById('x').innerHTML = p1Name+'\'S';
        
       for (var a = 0; a <= this.ticTacToe.length - 1; a++) {
       	alert('reset tiggering')
        for (var b = 0; b <= this.ticTacToe.length - 1; b++) {
        this.ticTacToe[a][b] = 0;
        this.ticTacToe[a][b].innerHTML = "";
        };
      };
     }; 
	


	$scope.clickSqr = function(row,column){
		if ($scope.ticTacToe[row][column]==0) {							
			if(turn % 2 ==1) {
				event.target.innerHTML="X";
				$scope.ticTacToe[row][column]=p1Score;
				document.getElementById('x').innerHTML = p2Name+'\'S';
			}
			else{
				event.target.innerHTML="O"
				$scope.ticTacToe[row][column]=p2Score;
				document.getElementById('x').innerHTML = p1Name+'\'S';	
			}
			turn++
		}
		else{

		};
	}
		


	$scope.check = function(row,column) {
			// asign a unique value to each unique box name 
			var a = $scope.ticTacToe[0][0];
			var b = $scope.ticTacToe[0][1];
			var c = $scope.ticTacToe[0][2];
			var d = $scope.ticTacToe[1][0];
			var e = $scope.ticTacToe[1][1];
			var f = $scope.ticTacToe[1][2];
			var g = $scope.ticTacToe[2][0];
			var h = $scope.ticTacToe[2][1];
			var i = $scope.ticTacToe[2][2];
		

		if(
			(a+b+c==3) 
				|| 
			(d+e+f==3)
				|| 
		  	(g+h+i==3)
		  		||
		  	(a+d+g==3) 	
		  		|| 
		  	(b+e+h==3)
		  		|| 
			(c+f+i==3) 
				||
			(a+e+i==3) 
				|| 
			(c+e+g==3)
		)	
			{
		  		alert('1p WINS');
		  		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = p1Name+" WINS!!!";
	  			// setTimeout("reset();",3000);
		  	}
		 else if(
			(a+b+c==-3) 
				|| 
			(d+e+f==-3)
				|| 
		  	(g+h+i==-3)
		  		||
		  	(a+d+g==-3) 	
		  		|| 
		  	(b+e+h==-3)
		  		|| 
			(c+f+i==-3) 
				||
			(a+e+i==-3) 
				|| 
			(c+e+g==-3)
		)
			{
		  		alert('2p WINS');
		  		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = p2Name+" WINS!!!";
	  			// setTimeout("reset();",3000);
		  		
		  	}
		 else{
		 	if(turn==10 && drawFix==1){
		 		alert('DRAW.....')
		 		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  			setTimeout("reset();",3000);
		 	}
		 	else if(turn==11 && drawFix==2){
		 		alert('DRAW.....')
		 		document.getElementById('x').innerHTML = "";
	  			document.getElementById('o').innerHTML = "";
	  			document.getElementsByClassName('alertBox')[0].style.display = "inline";
	  			document.getElementsByClassName('alertText')[0].innerHTML = "DRAW...";
	  			// setTimeout("reset();",3000);
		 	}
		 	else{

		 	}
		 }
		}
		
	}

