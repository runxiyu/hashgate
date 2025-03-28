async function sha256_from_bytes(bytes) {
	const hash_buffer = await crypto.subtle.digest("SHA-256", bytes);
	return Array.from(new Uint8Array(hash_buffer))
		.map(b => b.toString(16).padStart(2, "0"))
		.join("");
}

