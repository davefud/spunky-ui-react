import React from 'react';
import Icons from 'spunky-ui-react/Icons';
import Label from 'spunky-ui-react/Label'

/** All Icons */
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
        return (
            <div key={icon} style={{margin: '25px', display: 'inline-block'}}>
                <div style={{padding: '12px',  borderRadius: '3px', justifyContent: 'center'}} title={icon}>
                    <Icons name={icon} viewBox={24} width={55} height={55} color={'rgb(0,0,0,0.85'} />
                </div>
                <span style={{textAlign: 'center', width: 50, maxWidth: 50, fontSize: '12px', color: 'rgba(0,0,0,.6)', overflow: 'hidden', textOverflow: 'ellipsis'}} title={icon}>
                    <Label htmlFor='' label={icon} />
                </span>
            </div>
        );
    });
    
    return <div>{icons}</div>;
}



