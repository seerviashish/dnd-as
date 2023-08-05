import renderer from 'react-test-renderer';
import { expect, it } from 'vitest';
import { Basic } from '../../../src/examples/SimpleDragAndDrop';

it('SimpleDragAndDrop/Basic tests', () => {
  const tree = renderer.create(<Basic />).toJSON();
  expect(tree).toMatchSnapshot();
});
