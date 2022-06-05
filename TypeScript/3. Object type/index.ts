function getFullData (userEntity: {firstName: string; lastName: string, city: string, age: number}): string{
	return `${userEntity.firstName} ${userEntity.lastName} ${userEntity.city} ${userEntity.age}`
}

const user = {
	firstName: "Diyorbek",
	lastName: "Rustamjonov",
	city: "Tashkent",
	age: 20,
	skills: {
		dev: true,
		devops: true
	}
}

console.log(getFullData(user))


// type for object
type userObjectType = {
	user_firstname: string,
	user_lastname: string,
	user_phone: string,
	user_password: string,
	user_age: number
}

// function include userObjectType data
function getUserData(data: userObjectType): string {
	return `${data.user_firstname} ${data.user_lastname} ${data.user_phone} ${data.user_password}${data.user_age}`
}

console.log(getUserData(
	{
		user_firstname: "Diyorbek",
		user_lastname: "Rustamjonov",
		user_phone: "998992312433",
		user_password: "adminadmin",
		user_age: 24
	}
))