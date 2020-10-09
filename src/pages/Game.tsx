import { navigate, } from "gatsby";
import { useState, } from "react";
import * as React from 'react';
import { Colors, } from "../Colors";
import { LEVEL_MONEY, QUESTIONS, } from "../GameRules";
import { formatMoney, } from "../helpers";
import { Option, } from "../components/Option";

export default function Game() {
    const [level, setLevel,] = useState(0,);
    const question = QUESTIONS[level];

    const onSelect = (i: number,) => {
        const isTrue = i === question.trueOption;

        if (level !== QUESTIONS.length - 1 && isTrue) {
            setLevel(level + 1,);
        } else {
            navigate('/GameEnd', { state: { level: isTrue ? level + 1 : level, }, },)
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexGrow: 1,
            backgroundColor: Colors.BgGrey,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                padding: '80px 141px 80px 133px',
            }}>
                <h2 style={{
                    marginTop: 0,
                }}>
                    {question.content}
                </h2>
                <ul style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingLeft: 0,
                    listStyle: 'none',
                    marginTop: 'auto',
                }}>
                    {question.options.map((q, i,) => (
                        <AnswerOption content={q}
                            isTrue={question.trueOption === i}
                            i={i}
                            onSelect={() => onSelect(i,)}/>),)}
                </ul>
            </div>

            <LevelsDisplay activeLevel={level}/>
        </div>
    );
}

const LevelsDisplay = (props: { activeLevel: number },) => (
    <aside style={{
        display: 'flex',
        width: 300,
        flexShrink: 0,
        backgroundColor: 'white',
    }}>
        <ul style={{
            display: 'flex',
            flexGrow: 1,
            alignSelf: 'center',
            flexDirection: 'column-reverse',
            listStyle: 'none',
            paddingLeft: 0,
            margin: 0,
        }}>
            {LEVEL_MONEY.map((money, i,) => (
                <Option style={{
                    marginTop: 8,
                    color: i < props.activeLevel ? 'lightgrey' : (i === props.activeLevel ? 'orange' : 'grey'),
                }}
                innerStyle={{
                    textAlign: 'center',
                    padding: '8px 10px',
                    marginLeft: 20,
                    marginRight: 20,
                    borderColor: i === props.activeLevel ? 'orange' : '#D0D0D8',
                }}>
                    {formatMoney(money,)}
                </Option>
            ),)}
        </ul>
    </aside>
);

const AnswerOption = (props: { content: string, isTrue: boolean, onSelect: () => void, i: number },) => (
    <Option style={{
        cursor: 'pointer',
        width: '50%',
        fontSize: 20,
        marginTop: '32px',
    }} onClick={props.onSelect}>
        <span style={{
            color: Colors.Primary,
            padding: '0 12px',
            fontWeight: 600,
        }}>
            {getOptionLetter(props.i,)}
        </span>

        {props.content}
    </Option>
);

const getOptionLetter = (i: number,) => ['A', 'B', 'C', 'D',][i];
