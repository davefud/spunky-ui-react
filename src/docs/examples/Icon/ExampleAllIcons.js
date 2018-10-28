import React from 'react';
import Icon from 'spunky-ui-react/Icon';
import Label from 'spunky-ui-react/Label';
import * as Icons from 'spunky-ui-react/Icon/AvailableIcons';

/** All Icons */
export default function ExampleAllIcons() {

    let icons = Object.keys(Icons).map((icon) => {
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
                    <Icon
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
