import * as actionTypes from './actionTypes';

export const solveProblemStart = () => {
    return {
        type: actionTypes.SOLVE_PROBLEM_START
    };
};

export const solveProblemSuccess = (objective, primalSol) => {
    return {
        type: actionTypes.SOLVE_PROBLEM_SUCCESS,
        objective: objective,
        primalSol: primalSol
    };
};

export const solveProblemFailed = error => {
    return {
        type: actionTypes.SOLVE_PROBLEM_FAILED,
        solveProblemError: error
    };
};

export const solveProblem = () => {
    return {
        type: actionTypes.SOLVE_PROBLEM_INITIAL
    };
};
