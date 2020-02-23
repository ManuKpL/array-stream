import { Hypothesis } from './Hypothesis';
import { singleDataChunk } from './singleDataChunk';
import { streamDataChunks } from './streamDataChunks';

export const hypotheses: Hypothesis[] = [
  {
    name: 'singleDataChunk',
    method: singleDataChunk,
  },
  {
    name: 'streamDataChunks',
    method: streamDataChunks,
  },
];
