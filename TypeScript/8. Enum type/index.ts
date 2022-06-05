const enum Roles{
	ADMIN,
	USER,
	PARTNER
}


const users = [
	{
		user_id: 1,
		user_phone: "998992312433",
		user_role: Roles.ADMIN 
	},
	{
		user_id: 2,
		user_phone: "998992312422",
		user_role: Roles.USER 
	},
]


users.map((user: {user_id: number, user_phone: string, user_role: number}) => {
	if(user.user_role == Roles.ADMIN){
		console.log(user)
	}
})