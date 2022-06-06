enum UserRoles {
	ADMIN,
	USER,
	PARTNER
}

interface User {
	user_id: number,
	user_name: string,
	user_phone: string | number,
	
	// function in interface
	log: (id: number) => string
}

interface Role {
	user_role: UserRoles
}

interface UserWithRole extends User, Role {
	created_at: Date,
}

const user: UserWithRole = {
	user_id: 1,
	user_name: 'Diyorbek',
	user_phone: '+998992312433',
	user_role: UserRoles.ADMIN,
	created_at: new Date(),

	// function in interface
	log: (id) => 'Diyorbek'
}


interface userDictionary {
	[index: number]: User
}

type userDictionary2 = {
	[index: number]: User
}
