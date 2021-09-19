function sum(a,b){
    return a+b;
}

function sum2(a,b,c){
    return a+b+c;
}
// module.exports = sum;

//*ES6
//Cách1
// export default sum;

//Cách 2
export {sum, sum2};