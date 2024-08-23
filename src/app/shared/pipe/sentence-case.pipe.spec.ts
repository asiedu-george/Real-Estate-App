import { SentenceCasePipe } from './sentence-case.pipe';

describe('SentenceCasePipe', () => {
  it('create an instance', () => {
    const pipe = new SentenceCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform to sentence case', () => {
    const pipe = new SentenceCasePipe()
    const value = 'sentence case'
    let sentence = pipe.transform(value)
    expect(sentence).toBe('Sentence case')
  })
});
