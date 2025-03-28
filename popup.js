document.addEventListener("DOMContentLoaded", () => {
	const hash_input = document.getElementById("hash_input");
	const save_button = document.getElementById("save_button");

	browser.storage.local.get("allowed_hashes").then(result => {
		if (result.allowed_hashes) {
			hash_input.value = result.allowed_hashes.join("\n");
		}
	}).catch(err => {
		console.error("load hashes:", err);
	});

	save_button.addEventListener("click", () => {
		const hashes = hash_input.value
			.split("\n")
			.map(h => h.trim())
			.filter(h => h.length > 0);

		browser.storage.local.set({ allowed_hashes: hashes }).catch(err => {
			console.error("save hashes:", err);
		});
	});
});
