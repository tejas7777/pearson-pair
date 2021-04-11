const PearsonPair = require("PearsonPair.js")

vectors = [[1,2,3,4],[1,1,2,1],[1,2,3,2]]

let cor = new PearsonPair(vectors)
console.log(cor.findHighest())  //[ 0.8164965809277261, 1, 2 ]

console.log(cor.findLowest())  //[ 0.2581988897471611, 0, 1 ]

console.log(cor.getCorrelationMatrix()) //[ [ 0.2581988897471611, 0.6324555320336759 ],[ 0.8164965809277261 ] ]

console.log(cor.findClosestPair()) //[ [ 1, 1, 2, 1 ], [ 1, 2, 3, 2 ] ]

console.log(cor.findDistantPair()) //[ [ 1, 2, 3, 4 ], [ 1, 1, 2, 1 ] ]

