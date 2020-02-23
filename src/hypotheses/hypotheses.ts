import { Hypothesis } from './Hypothesis';
import { singleDataChunk } from './singleDataChunk';
import { streamDataChunks } from './streamDataChunks';

export const hypotheses: Hypothesis[] = [
  {
    name: 'Array',
    method: singleDataChunk,
  },
  {
    name: 'Stream',
    method: streamDataChunks,
  },
];
