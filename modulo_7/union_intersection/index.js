"use strict";
function findPerson(cpf) {
    if (typeof cpf === 'string') {
        return cpf.toUpperCase();
    }
    return cpf.toFixed(2);
}
findPerson('33');
findPerson(33);
