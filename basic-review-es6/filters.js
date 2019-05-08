var users = [
    {name: 'vini', vip: true},
    {name: 'kamm', vip: false},
    {name: 'cast', vip: true},
    {name: 'zand', vip: false},
    {name: 'alve', vip: true},
]

var onlyVipUsers = users.filter((person)=>{
    return person.vip
})

console.log('Original users:')
console.log(users)
console.log('Vip users')
console.log(onlyVipUsers)
