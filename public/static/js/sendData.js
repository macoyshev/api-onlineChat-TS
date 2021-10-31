export async function sendRequest(type, url, data = null) {
  const options = {
    method: type,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  console.log(url);
  const response = await fetch(url, options);
}
