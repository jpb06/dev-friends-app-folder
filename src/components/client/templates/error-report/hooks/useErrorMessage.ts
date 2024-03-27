export const useErrorMessage = (error: Error) => {
  try {
    const res = JSON.parse(error.message);
    if ('status' in res && 'type' in res && 'details' in res) {
      return res as {
        status: number;
        type: string;
        details: string;
      };
    }

    return error.message;
  } catch (e) {
    return error.message;
  }
};
