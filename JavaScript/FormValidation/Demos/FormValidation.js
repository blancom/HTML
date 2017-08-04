function checkLength(text, min=1, max=10000){

	if (text.length < min || text.length > max) {
		return false;
	}
	return true;
}