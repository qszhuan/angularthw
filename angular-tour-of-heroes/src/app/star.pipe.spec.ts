import { StarPipe } from './star.pipe';

describe('StarPipe', () => {
  it('should wrap by stars', () => {
    const pipe = new StarPipe();

    expect(pipe.transform('x')).toBe('***x***');
  });
});
