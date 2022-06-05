/* 
	TypeScript primitive data types
	1. String
	2. Number
	3. Boolean
	4. Null
	5. Undefined
	6. Symbol
*/

//1 String
const str1:string = "Hello";
const str2:string = "world";
console.log(`1. String: ${str1 + str2}`);

//2 Number
const num1: number = 1000
const num2: number = 500
console.log(`2. Number: ${num1 + num2}`);


//3 Boolean
const gender_male: boolean = false
const gender_female: boolean = true
console.log(`3. Boolean: ${gender_male} ${gender_female}`);

//4 Null
const result: null = null;
console.log(`4. Null: ${result}`)

//5 Undefined
const user: undefined = undefined;
console.log(`5. Undefined: ${user}`)

//6 Symbol
const objKey: symbol = Symbol("Hello world");
const obj = {
	object: "Hello world",
}
console.log(`6. Symbol: ${obj}`)
