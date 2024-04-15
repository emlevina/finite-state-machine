const apiKey = process.env.REACT_APP_RAPID_API_KEY!;
const localApiUrl = process.env.REACT_APP_API_URL;

const getNumberRapid = async (number: string) => {
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

const getNumberLocal = async (number: string) => {
  const response = await fetch(`${localApiUrl}/api/facts/${number}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.fact;
};

console.log("localApiUrl", localApiUrl);

export const getNumber = !!localApiUrl ? getNumberLocal : getNumberRapid;
