evens = [0,2,4,6,8,10,12,14,16,18,29]

odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)

console.log(nums)