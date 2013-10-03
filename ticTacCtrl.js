var TicTacCtrl = function($scope){
$scope.ticTacToe= [['X','','O'],['','X',''],['','O','']];
  
var turn=1
$scope.clickSqr = function(row,column){
	alert(event.target);
	event.target.innerHTML="X"
	alert('row');
	alert('column')

};}

