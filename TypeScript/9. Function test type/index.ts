enum QuestionStatus {
	PUBLISHED = 'published',
	DRAFT = "draft",
	DELETE = "delete"
}

async function getFaqs (
	req: {
		topicId: number,
		status: QuestionStatus
	}
): Promise<{
	question: string,
	answer: string,
	tags: string[],
	likes: number,
	status: QuestionStatus
}[]>{
	const res = await fetch('/topics', {
		method: 'POST',
		body: JSON.stringify (req)
	});
	const data = await res.json();
	return data;
}