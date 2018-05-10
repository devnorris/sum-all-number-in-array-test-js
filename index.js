function sumItems(array) {
    let answer = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            answer += sumItems(array[i])
        } else {
            answer += array[i];
        }
    }
    return answer;
}


module.exports = sumItems;