export const BASE_URL = 'https://api.github.com';

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export async function request(url, ...args) {
  const fixedUrl = url.startsWith('/') ? url.slice(1) : url;
  const response = await fetch(`${BASE_URL}/${fixedUrl}`, args);
  checkStatus(response);
  return response.json();
}
