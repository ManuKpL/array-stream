import { fakeService } from '../data';

import { Hypothesis } from './Hypothesis';

export const runHypotheses = (hypotheses: Hypothesis[], { iterations = 1, size = 10 } = {}): void => {
  console.table({ testParams: { size, iterations } });
  const data$ = fakeService(size);

  for (let i = iterations; i > 0; i--) {
    hypotheses.forEach(({ name, method }) => {
      console.time(name);
      method(data$).subscribe(() => {
        console.timeEnd(name);
      });
    });
  }
};
