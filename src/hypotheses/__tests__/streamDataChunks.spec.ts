import { streamDataChunks } from '../streamDataChunks';
import sharedHypothesisTest from './sharedHypothesisTest';

describe('streamDataChunks()', () => {
  sharedHypothesisTest(streamDataChunks);
});
