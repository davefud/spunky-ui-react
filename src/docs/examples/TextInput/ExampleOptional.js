import React from 'react';
import { TextInput } from 'spunky-ui-react';

/** Optional TextInput */
export default class ExampleOptional extends React.Component {
    render() {
        return <TextInput 
                htmlId='example-optional'
                label='First Name'
                name='firstname'
                onChange={() => {}}
            />;
    }
};
