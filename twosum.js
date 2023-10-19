  const nums = [3,2,4];
  const alvos = 6;
  const resultado = twoSum(nums, alvos);
  console.log(resultado);  // Deve imprimir [0, 1]

function twoSum (numeros, alvo){
    let indice = {};
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let complete = alvo - numero;

        if (complete in indice){
            return [indice[complete], i];
        }
        indice[numero] = i;
    }
    return null;
}
