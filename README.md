# Pearson Pairs
JavaScript package to form pairs of highest and lowest correlation arrays.

## Install

### To install globally
```
npm pearson-pair
```
### To install locally
```
npm pearson-pair
```

##Import

```JavaScript
const PearsonPair = require('PearsonPair')
```

##Use

###Create a pearson-pair object

```JavaScript
pcor = PearsonPair([[1,2,3],[2,2,4],[3,2,4],[3,4,7]])
```

###Find the closest pair

```JavaScript
pcor.findClosestPair()
```

###Find the most distant pair

```JavaScript
pcor.findDistantPair()
```

###Get the correlation matrix
```JavaScript
pcor.getCorrelationMatrix()
```
###Get the highest correlation along with the pair indices
```JavaScript
pcor.getHighest()
```

###Get the lowest correlation along with the pair indices
```JavaScript
pcor.getLowest()
```

## License: MIT
