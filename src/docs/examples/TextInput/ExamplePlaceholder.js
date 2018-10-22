import React from 'react';
import { TextInput } from 'spunky-ui-react';

/** TextInput with placeholder */
export default class ExamplePlaceholder extends React.Component {
    render() {
        return <TextInput 
                htmlId='example-placeholder'
                label='First Name'
                name='firstname'
                placeholder='Type first name here'
                onChange={() => {}}
            />;
    }
};
