const isPlaywrightTest = process.env.PLAYWRIGHT === 'true';

const delay = async (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const enforceMinimumDuration = async <TResult>(
  promise: Promise<TResult>,
  minDuration: number,
) => {
  if (isPlaywrightTest) {
    return await promise;
  }

  const [result] = await Promise.all([promise, delay(minDuration)]);

  return result;
};
