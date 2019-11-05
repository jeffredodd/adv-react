import React from 'react';

export default function Mouse(props) {
    const style = {
        'fontSize': '128px'
    };

    return (
        <span
            aria-label='mouse'
            role='img'
            style={style}
            {...props}>
            🐭
        </span>
    );
}