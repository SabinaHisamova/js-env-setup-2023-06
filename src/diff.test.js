import { diff } from './diff';

describe('diff', () => {
  it('diff 100 and 120', () => {
    expect(diff(100, 120)).toEqual(20);
  });
  it('diff 350 and 30', () => {
    expect(diff(350, 30)).toEqual(320);
  });
  it('diff 10 and 100', () => {
    expect(diff(10, 100)).toEqual(90);
  });
});
