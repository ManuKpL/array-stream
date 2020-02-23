import { fakeService } from '../data';

import { Hypothesis } from './Hypothesis';

export const runHypotheses = (hypotheses: Hypothesis[]): void => {
  const data$ = fakeService(100000);

  hypotheses.forEach(({ name, method }) => {
    console.time(name);
    method(data$).subscribe(data => {
      console.timeEnd(name);
      console.log(`${name} result`, data.length);
    });
  });
};
