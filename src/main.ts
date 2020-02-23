import { hypotheses, runHypotheses } from './hypotheses';

const TEN_THOUSAND = 10000;

runHypotheses(hypotheses, { iterations: 100, size: TEN_THOUSAND });
