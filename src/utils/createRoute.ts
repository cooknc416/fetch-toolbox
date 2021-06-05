export type FetchRoute = string[];

export const createRoute = (route: FetchRoute, includeLeadingSlash = true) => {
  return route.reduce((acc, val, idx) => {
    return `${acc}${idx > 0 ? '/' : ''}${val.trim()}`;
  }, includeLeadingSlash ? '/' : '');
};
