import React from 'react';
import Icons from 'spunky-ui-react/Icons';
import Label from 'spunky-ui-react/Label'

export default function ExampleAllIcons() {
    let availableIcons = [
        'code',
        'github',
        'unfold_more',
        'visibility',
        'visibility_off',
        'edit',
        'file_copy',
        'unfold_less',
        'more_horiz',
        'menu'
    ];

    let icons = availableIcons.map((icon) => {
        let codeIcon = Icons({name: icon, paths: null, viewBox: 24, className: ''});
        return (
            <div key={icon} style={{margin: '5px', display: 'inline-block', }}>
                <div style={{padding: '12px', border: '1px solid lightgray', width: 24, height: 24, borderRadius: '3px'}} title={icon}>
                    {codeIcon}
                </div>
                <span style={{margin: '0', width: 50, maxWidth: 50, fontSize: '12px', color: 'rgba(0,0,0,.6)', overflow: 'hidden', textOverflow: 'ellipsis'}} title={icon}>
                    <Label htmlFor='' label={icon} />
                </span>
            </div>
        );
    });
    return <div>{icons}</div>;
}



