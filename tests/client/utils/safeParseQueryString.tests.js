import queryString from 'query-string';
import { expect } from 'chai';
import { describe, it } from 'mocha';

import safeParseQueryString from '../../../client/utils/safeParseQueryString';

describe('Client-Utils-safeParseQueryString', () => {
  it('matches query-string.parse for valid query strings', () => {
    const queries = [
      'search=email%3Ajohn',
      'returnUrl=%2Fusers%3Fsearch%3Demail%3Ajohn',
      'search=email%3A%22john%40doe.com%22&page=1',
      'foo=bar&foo=baz',
      'flag',
      ''
    ];

    queries.forEach((query) => {
      expect(safeParseQueryString(query)).to.deep.equal(queryString.parse(query));
    });
  });

  it('does not throw for malformed percent-encoding', () => {
    expect(() => safeParseQueryString('search=%')).to.not.throw();
    expect(() => safeParseQueryString('search=%GG')).to.not.throw();
    expect(safeParseQueryString('search=%')).to.deep.equal({});
    expect(safeParseQueryString('search=%GG')).to.deep.equal({});
  });

  it('keeps valid params when another param is malformed', () => {
    expect(safeParseQueryString('search=email%3Ajohn&bad=%')).to.deep.equal({
      search: 'email:john'
    });
  });
});
