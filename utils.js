

var findInArray = function(ar, property, value){
	for(let i = 0; i<ar.length; i++){
		if(ar[i][property] == value){
			return i
		}
	}
	return null
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

module.exports.findInArray = findInArray
module.exports.shuffle = shuffle