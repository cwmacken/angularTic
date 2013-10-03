var TicTacCtrl = function($scope){
$scope.ticTacToe= [['X','','O'],['','X',''],['','O','']];
  
var turn=1
$scope.clickSqr = function(row,column){
	if(turn % 2 ==1){
		event.target.innerHTML="X";
		event.target.value=1;
	}
	else{
		event.target.innerHTML="O"
		event.target.value=-1;	
	}
	turn++

};

}

