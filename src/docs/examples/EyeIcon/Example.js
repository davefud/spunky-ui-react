import React from 'react';
import EyeIcon from 'spunky-ui-react/EyeIcon';

/** Eye Icon */
export default function Example() {
    return (
        <div className={'availableIcons--container'}>
            <div className={'availableIcons--preview'}>
                <div><EyeIcon size={16} /></div>
            </div>
            <div className={'availableIcons--preview'}>
                <div><EyeIcon size={32} /></div>
            </div>
        </div>
    );
}