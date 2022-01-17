let sum = 0
let sumcredit = 0

student = {
    grade: [3,2,3,4,1],
    credit:[1,3,3,3,3]
}

for (var i=0;i<5;i++){
    sum += (student.grade[i] * student.credit[i])
    sumcredit += (student.credit[i])
    
}
console.log((sum/sumcredit).toFixed(2))