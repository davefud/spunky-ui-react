import React from 'react';
import renderer from 'react-test-renderer';
import Input from './Input';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('toggles input type when show/hide password clicked', () => {
    const wrapper = shallow(<Input
        htmlId='test'
        name='test'
        value=''
        onChange={() => {}}
        showVisibilityToggle />
    );

    // Password input should have a type of password initially
    expect(wrapper.find({type: 'password'})).toHaveLength(1);
    expect(wrapper.find({type: 'text'})).toHaveLength(0);

    // simulate a click on the icon
    wrapper.find('span').simulate('click'); // jquery style selectors

    // Password input should have a type of text after clicking eye icon to toggle
    expect(wrapper.find({type: 'password'})).toHaveLength(0);
    expect(wrapper.find({type: 'text'})).toHaveLength(1);
    
});

test('hides password quality by default', () => {
    const tree = renderer.create(<Input
        htmlId='test'
        name='test'
        onChange={() => {}}
        value='IUacac#7wfe' />).toJSON();
    expect(tree).toMatchSnapshot();
});