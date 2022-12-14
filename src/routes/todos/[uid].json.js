import { api } from './_api';

// PATCH /todos/:uid.json
export const PATCH = async (event) => {
	const data = await event.request.formData();

	return api(event, `todos/${event.locals.userid}/${event.params.uid}`, {
		text: data.get('text'),
		done: data.has('done') ? !!data.get('done') : undefined
	});
};

// DELETE /todos/:uid.json
export const DELETE = async (event) => {
	return api(event, `todos/${event.locals.userid}/${event.params.uid}`);
};
