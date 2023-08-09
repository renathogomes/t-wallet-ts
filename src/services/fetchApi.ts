const url = 'https://economia.awesomeapi.com.br/json/all';

export const fetchApi = async () => {
  const response = await fetch(url);
  const data = await response.json();

  delete data.USDT;
  return data;
};
