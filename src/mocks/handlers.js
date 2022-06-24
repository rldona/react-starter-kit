/* istanbul ignore file */

import {rest} from 'msw';

export const handlers = [
  rest.post(`http://localhost/ping`, (req, res, ctx) =>
    res(ctx.status(200), ctx.text('pong!')),
  ),
];
