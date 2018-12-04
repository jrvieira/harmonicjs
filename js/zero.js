$(function(){	

	/*fibbonnaci*/
	var fibbonnaci = function (n) {
	  return function(n,a,b) {
	    return n>0 ? arguments.callee(n-1,b,a+b) : a;
	  }(n,0,1);
	}

	/*chromatic or nth*/
	var chromaticornth = function (n){
		var sub = 9;
		return n*Math.pow(2, 1/sub);
	}

	/*octave (double)*/
	var octave = function (n){
		return n*2;
	}

	function prime(n) {
        for (var primes = [], i = 2; primes.length < n; i++) {
                for (var root = Math.sqrt(i), j = 0; primes[j] <= root; j++) {
                        if (i%primes[j] === 0) root = 0;
                }
                if (root) primes.push(i);
        }
        return primes[n - 1];
	}

	/*complete graph edges*/
	var graph = function (n) {
		return (n*(n-1))/2;
	}

	/*n/n+1*/
	var wholefractionsreverse = function (n) {
		return 1-1/n;
	}

	/*1/n*/
	var wholefractions = function (n) {
		return 1/n;
	}

	/*even*/
	var even = function (n) {
		return 2*n;
	}

	/*odd*/
	var odd = function (n) {
		return 2*n-1;
	}

	/*n*/
	var whole = function (n) {
		return n/2;
	}


	var func = prime;
	//var func = function (n) {return n};


	var linevalues = [];


	var ctx = $("#canvas")[0].getContext("2d");
	ctx.fillStyle = 'white';
	ctx.fillRect(0,0,$("#canvas")[0].width,$("#canvas")[0].height);

	var width = $("#canvas")[0].width;
	var height = $("#canvas")[0].height;
	
	var line = 0;
	while(line < height){
		var i = 0;
		var linevalue = func(line);
		linevalues[line] = linevalue;
		while(i++ < width){
			var r = 2*i/width*linevalue;
			var c = Math.round(255*Math.sin(Math.PI*r));
			ctx.fillStyle = 'rgb('+(c>0?255-c:255)+','+(c<0?255+c:255)+',255)';
			ctx.fillRect(i,line,1,1);
		}
		//console.log(line, linevalue);
		line++;
	}

	$('#liner').css({width:width});
	$('#linevalue').css({marginLeft:width});
	
	$('#canvas').mousemove(function (ev) {	//console.log(ev.pageY, ev.pageX);
		var y = ev.pageY;
		var value = linevalues[y];
		$('#linevalue').show().text(value+' ('+y+' in '+width+')').css({marginTop:y-$('#linevalue').height()-height});
		$('#liner').show().css({marginTop:y-height-5});
	});

	$('#linevalue, #liner').hide();

	$('#canvas').mouseout(function (ev) {
		$('#linevalue, #liner').hide();
	});

});