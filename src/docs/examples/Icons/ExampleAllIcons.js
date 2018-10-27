import React from 'react';
import Icons from 'spunky-ui-react/Icons';
import Label from 'spunky-ui-react/Label'

/** All Icons */
export default function ExampleAllIcons() {
    let availableIcons = [
        'code',
        'edit',
        'file_copy',
        'github',
        'menu',
        'more_horiz',
        'unfold_more',
        'unfold_less',
        'visibility',
        'visibility_off'
    ].sort();

    let icons = availableIcons.map((icon) => {
        return (
            <div key={icon} style={{
                margin: '25px', 
                display: 'inline-block'
            }}>
                <div style={{
                    padding: '12px',  
                    borderRadius: '3px', 
                    justifyContent: 'center'
                }} title={icon}>
                    <Icons 
                        name={icon} 
                        viewBox={24} 
                        width={55} 
                        height={55} 
                        color={'rgb(0,0,0,0.85'} />
                </div>
                <span style={{
                    textAlign: 'center', 
                    width: 50, 
                    maxWidth: 50, 
                    fontSize: '12px', 
                    color: 'rgba(0,0,0,.6)'
                }} title={icon}>
                    <Label htmlFor='' label={icon} />
                </span>
            </div>
        );
    });
    
    return <div>{icons}</div>;
}



