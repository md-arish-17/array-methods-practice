
const details = [
    {firstName:"arish",age:13},
    {firstName:"umar",age:92},
    {firstName:"sana",age:23},
    {firstName:"anas",age:42},
    {firstName:"usman",age:2},
]

const personValues = details.map((user)=>{
    return user.firstName
})

console.log(personValues)