type httpMethod = "get" | "post" | "put" | "delete";
type coolString = "string" 

function fetchWithAuth(url: coolString, method: httpMethod): 1 | -1{
	return 1
}



// Type alias in object
type user = {
	user_id: number,
	user_name: string,
	user_age: number,
	user_skills: string[],
}

const user1: user = {
	user_id: 1,
	user_name: "Diyorbek",
	user_age: 17,
	user_skills: ["JavaScript", "TypeScript"],
}
console.log(user1)


enum typeRoles {
	ADMIN,
	USER,
	PARTNER,
}

type Role = {
	user_role: typeRoles
}

type UserWithRole = user | Role


const user2: UserWithRole = {
	user_id: 1,
	user_name: "Diyorbek",
	user_age: 17,
	user_skills: ["JavaScript", "TypeScript"],
	user_role: typeRoles.ADMIN
}
console.log(user2)