import React from 'react';
import renderer from 'react-test-renderer';
import PasswordInput from './PasswordInput';

test('hides password quality by default', () => {
    const tree = renderer.create(<PasswordInput
        htmlId='test'
        name='test'
        onChange={() => {}}
        value='IUacac#7wfe' />).toJSON();
    expect(tree).toMatchSnapshot();
});