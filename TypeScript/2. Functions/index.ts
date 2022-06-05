// In Function
function getFullName(firstName: string, lastName: string): string {
	return `${firstName} ${lastName}`;
};

console.log(getFullName("Diyorbek", "Rustamjonov"))
// In Arrow Functions
const getFullNameArrow = (firstName: string, lastName: string): string => {
	return `${firstName} ${lastName}`;
};

console.log(getFullNameArrow("Diyorbek", "Rustamjonov"))

