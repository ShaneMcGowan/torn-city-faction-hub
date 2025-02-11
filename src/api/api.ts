const BASE_URL: string = 'https://api.torn.com/v2'

async function get<T>(path: string, apiKey: string): Promise<T> {

  const headers = new Headers();
  headers.append("Authorization", `ApiKey ${apiKey}`)

  const response = await fetch(`${BASE_URL}/${path}`, {
    headers: headers
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  //    And can also be used here ↴
  return await response.json() as T;
}

export {
  get
}