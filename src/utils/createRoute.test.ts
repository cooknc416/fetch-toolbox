import { createRoute } from './createRoute';

describe('createRoute', () => {
  it('should create query params from a given FetchParams object', () => {
    const params = createRoute(['route1', 'route2']);

    expect(params).toEqual('/route1/route2');
  });

  it('should trim routes', () => {
    const params = createRoute(['route1 ', ' route2']);

    expect(params).toEqual('/route1/route2');
  });

  it('should not include the leading slash if passed true', () => {
    const params = createRoute(['route1', 'route2'], false);

    expect(params).toEqual('route1/route2');
  });
});
