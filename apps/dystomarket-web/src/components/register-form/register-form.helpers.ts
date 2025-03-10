import urlJoin from 'url-join';

export type RegisterData = {
  username: string;
  email: string;
  password: string;
};

export async function postRegister({
  username,
  email,
  password,
}: RegisterData) {
  const response = await fetch(
    urlJoin(import.meta.env.VITE_API_URL, 'register'),
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(response.status.toString());
  }

  return response.json();
}
