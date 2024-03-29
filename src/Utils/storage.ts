export const STORAGE = {
	LANGUAGE: 'LANGUAGE',
	USER_TOKEN: 'USER_TOKEN',
	USER_DATA: 'USER_DATA',
};

export function getLocalStorage(key: any) {
	return localStorage.getItem(key);
}

export function setLocalStorage(key: any, value: any) {
	return localStorage.setItem(key, value);
}

export function removeLocalStorage(key: any) {
	return localStorage.removeItem(key);
}

export function clearLocalStorage() {
	return localStorage.clear();
}