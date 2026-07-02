import lucene from 'lucene';

export const MAX_LUCENE_SEARCH_LENGTH = 256;

export default function validateLuceneQuery(query) {
  if (typeof query !== 'string') {
    return { valid: false, error: 'Invalid search query' };
  }

  const trimmed = query.trim();
  if (!trimmed) {
    return { valid: false, error: 'Empty search query' };
  }

  if (trimmed.length > MAX_LUCENE_SEARCH_LENGTH) {
    return { valid: false, error: 'Search query is too long' };
  }

  if (/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(trimmed)) {
    return { valid: false, error: 'Invalid search query characters' };
  }

  try {
    lucene.parse(trimmed);
  } catch (error) {
    return { valid: false, error: 'Invalid Lucene search syntax' };
  }

  return { valid: true };
}
