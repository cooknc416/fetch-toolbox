import { createRequestParams } from './createRequestParams';

describe('createRequestParams', () => {
  it('should create query params from a given FetchParams object', () => {
    const params = createRequestParams({
      param1: 'value1'
    });

    expect(params).toEqual('&param1=value1');
  });

  it('should trim keys and string values', () => {
    const params = createRequestParams({
      'param1 ': 'value1 '
    });

    expect(params).toEqual('&param1=value1');
  });

  it('should not trim number and boolean values', () => {
    const params = createRequestParams({
      param1: true,
      param2: 2
    });

    expect(params).toEqual('&param1=true?param2=2');
  });
});
