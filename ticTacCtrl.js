var TicTacCtrl = function($scope){
	$scope.ticTacToe= [[0,0,0],[0,0,0],[0,0,0]];
  
var turn=1


$scope.clickSqr = function(row,column){
	if ($scope.ticTacToe[row][column]==0) {							
		if(turn % 2 ==1) {
			event.target.innerHTML="X";
			$scope.ticTacToe[row][column]=1;
		}
		else{
			event.target.innerHTML="O"
			$scope.ticTacToe[row][column]=-1;	
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
		((a+b+c==3)) 
			|| 
		((d+e+f==3))
			|| 
	  	((g+h+i==3))
	  		||
	  	((a+d+g==3)) 	
	  		|| 
	  	((b+e+h==3))
	  		|| 
		((c+f+i==3)) 
			||
		((a+e+i==3)) 
			|| 
		((c+e+g==3))
	)	
		{
	  		alert('1p WINS')
	  	}
	 else if(
		((a+b+c==-3)) 
			|| 
		((d+e+f==-3))
			|| 
	  	((g+h+i==-3))
	  		||
	  	((a+d+g==-3)) 	
	  		|| 
	  	((b+e+h==-3))
	  		|| 
		((c+f+i==-3)) 
			||
		((a+e+i==-3)) 
			|| 
		((c+e+g==-3))
	)
		{
	  		alert('2p WINS')
	  		
	  	}
	 else{
	 	if(turn==10){
	 		alert('DRAW.....')
	 	}
	 }
}
	
}

