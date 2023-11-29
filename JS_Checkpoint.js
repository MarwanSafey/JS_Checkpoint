// How Edabit Works
function hello() {
	return "hello edabit.com"
}

// Return the Sum of Two Numbers
function addition(a, b) {
	return a + b;
}

// Convert Minutes into Seconds
function convert(minutes) {
	return minutes * 60 ;
}

// Convert Hours into Seconds
function howManySeconds(hours) {
	return hours * 3600;
}

// Return the Remainder from Two Numbers
function remainder(x, y) {
	return x % y ;
}

// Convert Age to Days
function calcAge(age) {
	return age * 365;
}

// Return Something to Me!
function giveMeSomething(a) {
	return `something ${a}`
}

//Buggy Code (Part 1)
function cubes(a) {
	return a ** 3
}

// Matchstick Houses
function matchHouses(step) {
	if (step == 0) {
		return 0;
	}
	else {
		return (step*5) + 1 ;
	}
}

// Add up the Numbers from a Single Number
function addUp(num) {
	var sum = 0;
	for (i = 1 ; i <= num ; i++) {
		 sum += i ;
	}
	return sum;
}

//Find the Smallest and Biggest Numbers
function minMax(arr) {
	var min = Math.min(...arr);
	var max = Math.max(...arr);
	return [min,max];
}

// Is it Time for Milk and Cookies?
function timeForMilkAndCookies(date) {
	if (date.getMonth() == 11 && date.getDate()== 24) {
		return true;
	}
	else return false;
}

// A Redundant Function
function redundant(str) {
	return function() {
	  return str;
	}
  }

// How Much is True?
function countTrue(arr) {
	var	count = 0;
		for(i = 0 ; i < arr.length ; i++){
			if (arr[i] == true){
				count++;
			}
		}
		return count;
	}

// Find Number of Digits in Number
function num_of_digits(num) {
	num = Math.abs(num);
	var digit = String(num).split('');
    var count = digit.length;
    return count;
}

// Returning an "Add" Function
function add(n) {
	return function(m) {
		return n + m;
	}
}
