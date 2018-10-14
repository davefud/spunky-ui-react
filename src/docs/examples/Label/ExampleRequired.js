import React from 'react';
import Label from 'spunky/Label';

/** Label for a required input */
export default function ExampleRequired() {
    return <Label htmlFor='test' label='Required Label' required={true} />;
}