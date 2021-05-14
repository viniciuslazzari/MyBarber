export const TOKEN_KEY = "x-access-token";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const handleLogin = (token: string) => {
	localStorage.setItem(TOKEN_KEY, token);
};

export const handleLogout = () => {
	localStorage.removeItem(TOKEN_KEY);
};