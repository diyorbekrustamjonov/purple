// Optional types
interface User{
	user_phone?: string;
	user_password?: string;
}
const user: User = {
	user_phone: "+998992312433",
	user_password: "adminadmin"
}

console.log(user)

function multiple (first: number, second?: number): number{
	if(!second) {
		return first
	}
	return first * second
}

multiple(10, 20)

interface UserPro {
	user_password?: {
		type: "primary" | "secondary"
	}
}

function testPass(user: UserPro){
	const t = user.user_password?.type
	return t
}

console.log({
	user_password: "adminadmin",
})


function test(param?: string) {
	const t = param ?? multiple(5)
	return t
}

console.log(test())