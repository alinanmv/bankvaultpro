const STORAGE = sessionStorage;
const KEY = "auth_token";

export function readToken(): string | null {
  return STORAGE.getItem(KEY);
}

export function setToken(username: string) {
  STORAGE.setItem(KEY, username);
}

export function clearToken() {
  STORAGE.removeItem(KEY);
}
