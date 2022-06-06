function logId(id: string | number): void {
	if(typeof id == "string") {
		console.log(id)
	}else{
		console.log(id)
	}
}

function logError(err: string | string[]){
	if(Array.isArray(err)){
		console.log("Array: ", err)
	}else if(typeof err == "string"){
		console.log("String: ", err)
	}

}

function logObj(obj: {a:  number} | {b:  number}) {
	if("a" in obj){
		console.log("Parametr a: ", obj.a)
	}else if("b" in obj) {
		console.log("Parametr b: ", obj.b)
	}
}

function logMupltipleIds(a: string | number, b: string | number){
	if(a == b) {
		console.log(b)
	}else{
		console.log(b)
	}
}

logId(1)
logError("Hello world")


// Custom type
const a: 1 = 1;