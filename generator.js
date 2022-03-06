export function generator(numProblems, problemFunc) {
    const problems = Array(numProblems).fill(null).map(problemFunc);
    return new ProblemSet(problems);
}

export class Problem {
    constructor(node) {
        this._node = node;
    }

    get node() {
        if (this._className) {
            this._node.classList.add(this._className);
        }
        return this._node;
    }

    set className(className) {
        this._className = className;
    }
}

export class ProblemSet {
    constructor(problems) {
        this.problems = problems;
    }

    node() {
        const root = document.createElement('div');
        root.className = 'problem-set';
        this.problems.forEach(problem => root.appendChild(problem.node));
        return root;
    }
}