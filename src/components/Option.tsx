import * as React from "react";
import { CSSProperties, } from "react";

type OptionProps = {
    children: JSX.Element | string | (JSX.Element | string)[],
    style?: CSSProperties,
    onClick?: () => void,
    innerStyle?: CSSProperties,
};

export const Option = (props: OptionProps,) => (
    <li className={'option'} style={{
        position: 'relative',
        ...props.style,
    }}>
        <div style={{
            zIndex: 10,
            position: 'relative',
            padding: '25px 20px',
            background: 'url(../static/img/Option.svg) no-repeat',
            margin: '0 10px',
            ...props.innerStyle,
        }}
        onClick={props.onClick}>

            {props.children}
        </div>
    </li>
);
