const enum methodTypes {
	GET = "get",
	POST = "post",
	PUT = "put",
	DELETE = "delete"
}

function fetchWithAuth (url: string, method: "post" | "get"){
	console.log("Fetching: ", url, method)
}

fetchWithAuth("https://www.googleapis.com/", "get")



const urler = "GET"

function fetchWithUrl (url: string, method: "post" | "get"){
	console.log("Fetching: ", url, method)
}

fetchWithUrl("https://www.googleapis.com/", urler as "get")