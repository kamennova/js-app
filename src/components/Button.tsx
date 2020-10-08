import * as React from 'react';
import { Colors, } from "../Colors";

export default function Button(props: { label: string, onClick: () => void },) {
    return (
        <button style={{
            padding: '14px 20px',
            backgroundColor: Colors.Primary,
            borderRadius: 12,
            width: '100%',
            maxWidth: 286,
            color: 'white',
            fontWeight: 600,
            fontSize: 20,
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
        }} onClick={props.onClick}>
            {props.label}
        </button>
    );
}
