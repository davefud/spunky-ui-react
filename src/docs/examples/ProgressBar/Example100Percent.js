import React from 'react';
import ProgressBar from 'spunky-ui-react/ProgressBar';

/** 100% progress and height of 20px */
export default function Example100Percent() {
    return <ProgressBar percent={100} width={150} height={20} />;
}