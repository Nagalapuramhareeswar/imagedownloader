	const urlInput = document.querySelector("#inbox"); 
	const downloadBtn = document.querySelector("#buttons");
	downloadBtn.addEventListener("click", async () => {
	try {
		const response = await fetch(urlInput.value);
		const file = await response.blob();
		const link = document.createElement("a");
		link.href= URL.createObjectURL(file);
		link.download= new Date().getTime().toString();
		link.click();
		alert("Image downloaded");
	} catch(error) {
		alert("Failed to download the file!\nretry again");
	}
	});
