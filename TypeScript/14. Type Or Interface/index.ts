interface User{
	name: string;
}

interface User {
	age: number;
}

const user: User = {
	name: "Diyorbek",
	age: 17
}

console.log(user)


type ID = string | number

interface IDI {
	ID: string | number
}
