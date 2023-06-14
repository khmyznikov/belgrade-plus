export function getThemeMode() {
	try {
		return localStorage.getItem("preferred-theme") || "system"
	}
	catch (e) {
		return "system";
	}
}

export function setThemeMode(mode?: string) {
	const _theme = getThemeMode();
	localStorage.setItem("preferred-theme", mode || _theme);
	document.documentElement.setAttribute("data-theme", mode || _theme);
}