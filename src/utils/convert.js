export const toSimpleObject = (res) => {
	if (typeof res === Object) {
		return JSON.parse(JSON.stringify(res));
	}
	return res.map((item) => JSON.parse(JSON.stringify(item)));
};
