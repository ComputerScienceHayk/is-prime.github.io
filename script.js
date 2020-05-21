var isPrime = $('button:nth-child(1)'),
	output = $('ul');

//Checks if entered number is prime or not
$(isPrime).on('click', () => {
	
	var input = $('input').val(),
		flag = 0;
	//Removes Previous Results
	output.empty();
	output.css('grid-template-columns','1fr');
	for(var i=2;i<=Math.floor(input/2);++i){
		if(input%i==0){
			flag = 1;
			break;
		}
	}
	if(flag == 0){
		output.append('<li>' + input +' is a Prime Number!</li>');
	}
	else {
		output.append('<li>' + input +' is not a Prime Number!</li>');
	}
	
});