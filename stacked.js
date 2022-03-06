import { Problem } from './generator.js';

export function subtractionStacked(...subends) {
    const answer = subends.reduce((ans, term, i) => i === 0 ? term : ans - term, 0);
    const prob = genericStacked(subends, '-', answer);
    prob.className = 'subtraction';
    return prob;
}

export function additionStacked(...addends) {
    const answer = addends.reduce((ans, term) => term + ans, 0);
    const prob = genericStacked(addends, '+', answer);
    prob.className = 'addition';
    return prob;
}

function genericStacked(terms, sign, answer) {
    const root = document.createElement('div');
    root.className = 'problem problem-stacked';
    const nodes = [];
    terms.forEach(term => {
        const node = document.createElement('div');
        node.className = 'term';
        node.innerText = term;
        nodes.push(node);
    });
    const answerNode = document.createElement('div');
    answerNode.className = 'answer';
    answerNode.innerText = answer
    nodes.push(answerNode);
    
    nodes.forEach(node => root.appendChild(node));
    return new Problem(root);
}
