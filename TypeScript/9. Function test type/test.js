
/* 

//Request
{
	"topicId" : 5,
	"status":"published" // "published" "draft" "deleted"
}

// Response
[
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": ["popular", "new"],
		"likes": 3,
		"status":"published"
	}
]
*/
/*
	async function getFaqs (req) {
		const res = await fetch('/faqs', {
			method: 'POST',
			body: JSON.stringify (req)
		});
		const data = await res.json();
		return data;
	}
*/
