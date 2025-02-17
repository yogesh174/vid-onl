const base = 'https://vid-onl-api.herokuapp.com';
// const base = 'http://pop:1337';

async function send({ method, path, data, token }) {
	const opts = {
		method,
		headers: {}
	};

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

async function sendFormData({ method, path, data, token }) {
	const opts = {
		method,
		headers: {}
	};

	if (data) {
		opts.body = data;
	}

	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path, token) {
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function postFormData(path, data, token) {
	return sendFormData({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
