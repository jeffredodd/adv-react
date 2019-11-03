import React from 'react';

export default function Mouse(props) {
    const style = {
        'font-size': '96px'
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