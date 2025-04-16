

function timer() {
    let count = 0;
    return function incr(){
        count++;
        console.log("inside it is ",count)
        return count
    }
}
let t = timer()
t()
t()


