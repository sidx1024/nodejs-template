import { test } from 'uvu';
import * as assert from 'uvu/assert';

import { sum } from '#utils/math.js';

test('sum', () => {
  assert.type(sum, 'function');
  assert.is(sum(1, 2), 3);
  assert.is(sum(-1, -2), -3);
  assert.is(sum(-1, 1), 0);
});

test.run();
