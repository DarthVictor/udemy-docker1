import { expect, it } from 'vitest'

import { render } from '@testing-library/preact';

import { App } from './app.tsx'

it('App should render', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
