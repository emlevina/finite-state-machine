const apiKey = process.env.REACT_APP_RAPID_API_KEY!;

export const getNumberRapid = async (number: string) => {
  const response = await fetch(
    `https://numbersapi.p.rapidapi.com/${number}/trivia`,
    {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.text();
  return data;
};

export const getNumber = async (number: string) => {
  const response = await fetch(`http://localhost:3001/api/facts/${number}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.fact;
};
