var generate = function(numRows) {
    if (numRows <= 0) {
        return [];
    }

    const triangle = [[1]];

    while (triangle.length < numRows) {
        const lastRow = triangle[triangle.length - 1];
        const newRow = [1];
        for (let i = 1; i < lastRow.length; i++) {
            newRow.push(lastRow[i - 1] + lastRow[i]);
        }
        newRow.push(1);
        triangle.push(newRow);
    }

    return triangle;
}

const numRows = 10;
const pascalTriangle = generate(numRows);
for (const row of pascalTriangle) {
    console.log(row);
}
