// My Solve
console.log("My Solve")
type officeType = {
	officeId: number,
	isOpened: boolean,
	contacts: {
		phone: string,
		email: string,
		address: {
			city: string
		}
	}
}

const office = {
	officeId: 45,
	isOpened: false,
	contacts: {
		phone: "+998992312433",
		email: "drustamjonov0919@gmail.com",
		address: {
			city: "Tashkent"
		}
	}
}
function getAddress (office: officeType): object {
	return office
}
console.log(getAddress(office))


// Purple solve 
console.log("Purple solve")
let info: {
	officeId: number,
	isOpened: boolean,
	contacts: {
		phone: string,
		email: string,
		address: {
			city: string
		}
	}
}
info = {
	officeId: 45,
	isOpened: false,
	contacts: {
		phone: "+998992312433",
		email: "drustamjonov0919@gmail.com",
		address: {
			city: "Tashkent"
		}
	}
}

console.log(info)