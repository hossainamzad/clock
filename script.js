$(document).ready(function(){

	var startTime = new Date(); 
	globalHour = startTime.getHours();
	globalMinute = startTime.getMinutes();
	var nextTick = setInterval(function(){
 	
		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);
		if (min%2==1){
			$("h3").css("color","white");
		} else {
			$("h3").css("color","yellow");
		};
		
        var backgroundColor = ["yellow","green", "red","white","pink","maroon"]; 
        var randomNumber = Math.floor(Math.random()*backgroundColor.length);
        var randomColor = backgroundColor[randomNumber];
        if (min%5==0 && min!= globalMinute){
        	$("#clock").css("backgroundColor",randomColor);
        	globalMinute=min;
        }

        var hourColor = ["black","limegreen","purple"];
        var index = 0;
        if (hr!=globalHour){
        	$("h1").css("color",hourColor[index]);
        	if (index < 2){
        		index++
        	} else {
        		index=0;
        	};
        	globalHour=hr;
        }
    
	}, 1);

});