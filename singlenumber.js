var singleNumber = function (lst) {
    let resultado = 0;
    for (let numero of lst){
        resultado ^= numero
    }
    return resultado
}

const lst = [2, 2, 1, 1, 7];
const single = singleNumber(lst);
console.log(single);
