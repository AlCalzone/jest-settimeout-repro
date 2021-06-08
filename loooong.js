function loooong() {
	return new Promise(resolve => {
		setTimeout(resolve, 10000)
	})
}

function loooongSync() {
	const start = Date.now();
	while (Date.now() - start < 7500) {
		// waste CPU cycles :)
	}
}

module.exports = {loooong, loooongSync};