
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return []
    } else {
        const result = []
    
    for (let i = 0; i < matrix.length; i += 1) {
        if (i % 2 !== 0) {
            matrix[i].sort((a, b) => b - a)
        }
        for (let a = 0; a < matrix[i].length; a += 1) {
            result.push(matrix[i][a])
        }
    }
        return result
    }
}
