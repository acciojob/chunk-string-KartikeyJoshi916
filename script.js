function stringChop(str, chunkLength) {
    // Return an empty array if the input string is null or the chunk length is invalid
    if (!str || chunkLength <= 0) return [];

    const result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength));
    }

    return result;
}
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 
   

