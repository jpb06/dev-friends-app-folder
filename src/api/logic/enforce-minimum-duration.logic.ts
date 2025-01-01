const delay = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const enforceMinimumDuration = async <TResult>(
  promise: Promise<TResult>,
  minDuration: number,
) => {
  const [result] = await Promise.all([promise, delay(minDuration)]);

  return result;
};
