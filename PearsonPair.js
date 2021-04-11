module.exports = class PearsonPair{
    constructor(vectors){
        this.vectors = vectors
        this.arr = []
        this.correlation(vectors)
    }

    correlation(vectors){
        for(var i=0; i< vectors.length; i++){
        var corr_arr = []

            for(var j = i + 1; j < vectors.length;j++)
            {
                var corrval = this.corr(vectors[i],vectors[j]);
                corr_arr.push(corrval)
                }

            if(i<vectors.length-1){
                this.arr.push(corr_arr);
            }
        }
    }

    corr(d1,d2){
        let { min, pow, sqrt } = Math
        let add = (a, b) => a + b
        let n = min(d1.length, d2.length)
        if (n === 0) {
          return 0
        }
        [d1, d2] = [d1.slice(0, n), d2.slice(0, n)]
        let [sum1, sum2] = [d1, d2].map(l => l.reduce(add))
        let [pow1, pow2] = [d1, d2].map(l => l.reduce((a, b) => a + pow(b, 2), 0))
        let mulSum = d1.map((n, i) => n * d2[i]).reduce(add)
        let dense = sqrt((pow1 - pow(sum1, 2) / n) * (pow2 - pow(sum2, 2) / n))
        if (dense === 0) {
          return 0
        }
        return (mulSum - (sum1 * sum2 / n)) / dense
    }

    findHighest(){
        var max = 0
        var maxrow = 0
        var maxcolumn = 0
        for (var i=0; i < this.arr.length; i++){
            for(var j=0; j <this.arr[i].length;j++){
                if(this.arr[i][j]>max){
                    max = this.arr[i][j]
                    maxrow = i
                    maxcolumn = j
                }
            }
        }
    
        return [max,maxrow,maxrow + maxcolumn + 1]
    }
    
    findLowest(){
        var min = 2
        var minrow = 0
        var mincolumn = 0
        for (var i=0; i < this.arr.length; i++){
            for(var j=0; j <this.arr[i].length;j++){
                if(this.arr[i][j]<min){
                    min = this.arr[i][j]
                    minrow = i
                    mincolumn = j
                }
            }
        }
    
        return [min,minrow,minrow + mincolumn + 1]
    }
    
    getCorrelationMatrix(){
        return this.arr
    }

    findClosestPair(){
        var result = this.findHighest()
        return [this.vectors[result[1]],this.vectors[result[2]]]
    }

    findDistantPair(){
        var result = this.findLowest()
        return [this.vectors[result[1]],this.vectors[result[2]]]
    }

}

