export const throwIfNotOk = async (res: Response) => {
  const json = await res.json();
  if (!res.ok) {
    throw new Error(
      JSON.stringify({
        details: json.message,
        type: json.error,
        status: json.statusCode,
      }),
    );
  }

  return json;
};
