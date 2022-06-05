// Tuples
const skills: string[] = ["Dev", "DevOps", "Testing"]

const skill: [number, string] =[1, "DevOps"]

const skillId = skill[0]
const skillName = skill[1]

skill.push("Hello world")

const [id, namer] = skill
console.log(id, namer)

const res: [number , string , ...boolean[]] = [1, "Diyorbek", true, true,  true, true, true, true, true, true]
console.log(res)