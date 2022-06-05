// Array type
let skills: string[] = ["Dev", "DevOps", "Testing"] // => String[]

// String array type
let developers: string[] = ["Front-end", "Back-end", "Mobile dev", "Desktop Dev"] // => String[]

// Number array type
let years: number[] = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] // => Number[]


// Any it should not be used
let mixSingTypes: any[] = ["Front-end", 2019, "Back-end", 2021, "DevOps", 2022,]


for(let skill of skills) {
	console.log(skill)
}

// 
skills = skills
    .filter((s: string) => s !== "DevOps")
	.map((s: string) => s + "!");
console.log(skills)



let countrys: string[];
countrys = ["Uzbekistan", "Russian", "Belarus", "Tadzjikistan"]
console.log(countrys)