import { navigate, } from "gatsby";
import * as React from 'react';
import Button from "../components/Button";
import { LEVEL_MONEY, } from "../GameRules";
import { formatMoney, } from "../helpers";

export default function GameEnd({ location, },) {
    const level = location.state !== undefined ? location.state.level : 0;

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '1200px',
            margin: '0 auto',
            alignContent: 'center',
            position: 'relative',
        }}>
            <img src={'../static/img/hand.png'} style={{ width: 451, height: 356, }}/>
            <div style={{
                marginLeft: 118,
            }}>
                <span>{level === 12 ? "You won! Your score:" : "Total score:"}</span>
                <h2 style={{
                    fontSize: '56px',
                    fontWeight: 600,
                    marginBottom: 34,
                }}>{formatMoney(level === 0 ? 0 : LEVEL_MONEY[level - 1],)}</h2>
                <Button label={'Try again'} onClick={() => navigate('/Game',)}/>
            </div>
        </div>
    );
}
