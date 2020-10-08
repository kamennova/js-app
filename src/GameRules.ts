import { Question, } from "./Question";

export const QUESTIONS: Question[] = [
    {
        content: 'Do you really want to be a millionaire?',
        options: ['Idk', 'Yes!', 'Nope', 'Not sure',], trueOption: 1,
    },
    {
        content: 'Which Disney character famously leaves a glass slipper behind at a royal ball?',
        options: ['Pocahontas', 'Sleeping Beauty', 'Little Mermaid', 'Cinderella',], trueOption: 3,
    },
    {
        content: 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from' +
            ' the plane to baggage reclaim?',
        options: ['Hangar', 'Terminal', 'Concourse', 'Carousel',],
        trueOption: 3,
    },
    {
        content: ' Which of these brands was chiefly associated with the manufacture of household locks? ',
        options: ['Phillips', 'Flymbo', 'Chubb', 'Ronseal',], trueOption: 2,
    },
    { content: 'a?', options: ['a', 'b', 'c', 'd',], trueOption: 0, },
    { content: 'a?', options: ['a', 'b', 'c', 'd',], trueOption: 0, },
    { content: 'a?', options: ['a', 'b', 'c', 'd',], trueOption: 0, },
    { content: 'a?', options: ['a', 'b', 'c', 'd',], trueOption: 0, },
    { content: 'a?', options: ['a', 'b', 'c', 'd',], trueOption: 0, },
    { content: 'a?', options: ['a', 'b', 'c', 'd',], trueOption: 0, },
    { content: 'a?', options: ['a', 'b', 'c', 'd',], trueOption: 0, },
    { content: 'a?', options: ['a', 'b', 'c', 'd',], trueOption: 0, },
];

export const LEVEL_MONEY = [500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000,];

export const LEVELS_NUM = 12;
