interface FetchParams {
  [key: string]: string | number | boolean;
}

export const createRequestParams = (params: FetchParams) => {
  return Object.keys(params).reduce((acc, key, idx) => {
    const trimmedKey = key.trim();
    let value = params[key];

    if (typeof value === 'string') {
      value = value.trim();
    }

    return `${acc}${idx > 0 ? '?' : ''}${trimmedKey}=${value}`;
  }, '&');
};
