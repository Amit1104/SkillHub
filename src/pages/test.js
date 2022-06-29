const ary = ["task", "desc", "priority"]
let obj2 = {}

for (let i = 0; i < ary.length; i++) {
    obj2 = { ...obj2, [ary[i]]: "" }
}

console.log(obj2)