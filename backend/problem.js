console.log('Problem state is ...')


const arr = [2,1,6,9,3,4,5]

let k = 0;

const sorted = arr.map((el)=> {
    if (el > k) {
       k = el
    }

    return k;
})

console.log(sorted)