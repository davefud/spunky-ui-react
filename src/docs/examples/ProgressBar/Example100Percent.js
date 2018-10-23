import React from 'react';
import ProgressBar from 'spunky-ui-react/ProgressBar';

/** 100% progress */
export default function Example100Percent() {
    return <ProgressBar 
                percent={100} 
                width={450} 
                height={25} 
            />;
}