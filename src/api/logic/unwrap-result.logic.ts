export const unwrapResult = <TInput>(wrapped: { result: TInput }) =>
  wrapped.result;
