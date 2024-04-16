const localApiUrl = "https://finite-state-machine.vercel.app";

export const getNumber = async (number: string) => {
  const response = await fetch(`${localApiUrl}/api/facts/${number}`);
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error ?? "Failed to fetch data");
  }
  const data = await response.json();
  return data.fact;
};
