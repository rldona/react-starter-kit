import axios from 'axios';

export default async function getPhoneList(): Promise<unknown> {
  const endPoint = `http://localhost:4000/phones`;

  const response = await axios.get(endPoint);

  return response.data;
}
