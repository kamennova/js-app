import { navigate, } from "gatsby";
import * as React from 'react';
import Button from "../components/Button";

export default function GameStart() {
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
                <h2 style={{
                    fontSize: '56px',
                    fontWeight: 600,
                    marginBottom: 34,
                }}>Who wants to be<br/> a millionaire?</h2>
                <Button label={'Start'} onClick={() => navigate('/Game',)}/>
            </div>
        </div>
    );
}
