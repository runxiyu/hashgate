browser.webRequest.onBeforeRequest.addListener(
	async function(details) {
		const { allowed_hashes = [] } = await browser.storage.local.get("allowed_hashes");
		const allowed_set = new Set(allowed_hashes);

		const filter = browser.webRequest.filterResponseData(details.requestId);
		const chunks = [];

		filter.ondata = event => {
			chunks.push(event.data);
		};

		filter.onstop = async () => {
			const total_length = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
			const full_data = new Uint8Array(total_length);

			let offset = 0;
			for (const chunk of chunks) {
				full_data.set(new Uint8Array(chunk), offset);
				offset += chunk.byteLength;
			}

			const hash = await sha256_from_bytes(full_data);

			if (allowed_set.has(hash)) {
				for (const chunk of chunks) {
					filter.write(chunk);
				}
			} else {
				console.log("HashGate blocked", hash);
			}
			filter.disconnect();
		};

		return {};
	},
	{ urls: ["<all_urls>"], types: ["script"] },
	["blocking"]
);
