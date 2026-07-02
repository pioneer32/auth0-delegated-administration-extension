import { expect } from 'chai';
import { describe, it } from 'mocha';

import validateLuceneQuery, { MAX_LUCENE_SEARCH_LENGTH } from '../../../client/utils/validateLuceneQuery';

describe('Client-Utils-validateLuceneQuery', () => {
  it('accepts valid lucene queries', () => {
    expect(validateLuceneQuery('email:"john@doe.com"')).to.deep.equal({ valid: true });
    expect(validateLuceneQuery('name:john')).to.deep.equal({ valid: true });
    expect(validateLuceneQuery('name:john OR email:jane')).to.deep.equal({ valid: true });
    expect(validateLuceneQuery('name:john AND email:jane')).to.deep.equal({ valid: true });
    expect(validateLuceneQuery('NOT blocked:true')).to.deep.equal({ valid: true });
    expect(validateLuceneQuery('logins_count:[100 TO 200]')).to.deep.equal({ valid: true });
  });

  it('rejects empty and invalid queries', () => {
    expect(validateLuceneQuery('')).to.deep.equal({ valid: false, error: 'Empty search query' });
    expect(validateLuceneQuery('   ')).to.deep.equal({ valid: false, error: 'Empty search query' });
    expect(validateLuceneQuery(null)).to.deep.equal({ valid: false, error: 'Invalid search query' });
    expect(validateLuceneQuery('foo) OR (user_id:evil')).to.deep.equal({
      valid: false,
      error: 'Invalid Lucene search syntax'
    });
    expect(validateLuceneQuery('((((')).to.deep.equal({
      valid: false,
      error: 'Invalid Lucene search syntax'
    });
  });

  it('rejects queries that are too long', () => {
    const query = `email:${'a'.repeat(MAX_LUCENE_SEARCH_LENGTH)}`;
    expect(validateLuceneQuery(query)).to.deep.equal({
      valid: false,
      error: 'Search query is too long'
    });
  });

  it('rejects control characters', () => {
    expect(validateLuceneQuery('email:john\x00doe')).to.deep.equal({
      valid: false,
      error: 'Invalid search query characters'
    });
  });
});
