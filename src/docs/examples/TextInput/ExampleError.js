import React from 'react';
import { TextInput } from 'spunky-ui-react';

/** Required TextInput showing an error */
export default class ExampleError extends React.Component {
    render() {
        return <TextInput 
                htmlId='example-required'
                label='First Name'
                name='firstname'
                onChange={() => {}}
                required
                error='First name is required.'
            />;
    }
};
