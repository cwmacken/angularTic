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

$scope.check = function(row,column) {
		
		// asign a unique value to each unique box name 
		var a= event.target.value;
		var b = event.target.value;
		var c = event.target.value;

		var d = event.target.value;
		var e = event.target.value;
		var f = event.target.value;

		var g = event.target.value;
		var h = event.target.value;
		var i = event.target.value;
		

	if(
		(
			(a+b+c==3) 
		) 
			|| 
		(
			(d+e+f==3)
		)
			|| 
	  	(
	  		(g+h+i==3) 
	  	)
	  		||
	  	(
	  		(a+d+g==3)
	  	) 	
	  		|| 
	  	(
	  		(b+e+h==3) 
	  	)
	  		|| 
		( 
			(c+f+i==3)
		) 
			||
		(
			(a+e+i==3)
		) 
			|| 
		(
			(c+e+g==3) 
		)
	)	{
	  		alert('1p WINS')
	  	}
	 else if(
		(
			(a+b+c==-3)  
		) 
			|| 
		(
			(d+e+f==-3) 
		)
			|| 
	  	(
	  		(g+h+i==-3)
	  	)
	  		||
	  	(
	  		(a+d+g==-3) 
	  	) 	
	  		|| 
	  	(
	  		(b+e+h==-3) 
	  	)
	  		|| 
		( 
			(c+f+i==-3) 
		) 
			||
		(
			(a+e+i==-3) 
		) 
			|| 
		(
			(c+e+g==-3) 
		)
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

