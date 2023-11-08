/*
    index.html에서 사용하는 js 파일.
*/
function add(n1,n2,msg){
    if(msg !== undefined){
        var result = n1 + n2;
        return msg + result;
    }
    return n1 + n2; 
}