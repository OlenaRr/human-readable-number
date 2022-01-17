module.exports = function toReadable (numb) {
    const zeroToNine = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	const evelevToNineteen = ["ten", "eleven", "twelve", "thirteen", "fourteen" ,"fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	const twentyToNinety = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	let answ = "";
	if (typeof(numb) === "number") {
		if (numb < 1000) {
			if (numb.toString().length === 1) {
				answ = (zeroToNine[numb]);
                return (answ);
			} else if (numb.toString().length === 2) {
				if (numb < 20) {
					answ = (evelevToNineteen[numb - 10]);
                    return (answ);
				} else if (numb % 10 === 0) {
					answ = (twentyToNinety[(numb / 10) - 2]);
                    return (answ);
				} else {
					answ = (twentyToNinety[Math.floor(numb / 10) - 2] + " " + zeroToNine[numb % 10]);
                    return (answ);
				}
			} else if (numb.toString().length === 3) {
				//100-109
				if (numb % 100 === 0) {
					answ = (zeroToNine[Number(numb.toString()[0])] + " hundred");
                    return (answ);
				}
				if (numb % 100 < 10 && numb % 100 > 0) {
					answ = (zeroToNine[Number(numb.toString()[0])] + " hundred " + zeroToNine[numb % 100]);
                    return (answ);
				//109-119
				} else if (numb % 100 < 20 && numb % 100 > 0) {
					answ = (zeroToNine[Number(numb.toString()[0])] + " hundred " + evelevToNineteen[numb % 100 - 10]);
                    return (answ);
				//120, 130, ...
				} else if (numb % 100 > 19 && numb % 10 === 0) {
					answ = (zeroToNine[Number(numb.toString()[0])] + " hundred " + twentyToNinety[Number(numb.toString()[1]) - 2]);
					//console.log (zeroToNine[Number(numb.toString()[0])] + " hundred " + twentyToNinety[Math.floor((numb % 100) / 10) - 2])
                    return (answ);
				}
				else if (numb % 100 > 19 && numb % 10 > 0) {
					answ = (zeroToNine[Number(numb.toString()[0])] + " hundred " + twentyToNinety[Number(numb.toString()[1]) - 2] + " " +zeroToNine[Number(numb.toString()[2])]);
                    return (answ);
				}
			}
		} else {
		answ = "999+";
        return (answ);
		}
	} else {
		answ = "Not a number!";
		return (answ);
	}
}
