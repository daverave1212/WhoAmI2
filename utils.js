

var findInArray(ar, property, value){
	for(let i = 0; i<ar.length; i++){
		if(ar[i][property] == value){
			return i
		}
	}
	return null
}

exports.module.findInArray = findInArray