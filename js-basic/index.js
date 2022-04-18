let myArray = [
  {
    id: 1,
    name: 'hoang',
    coin: 200
  },
  {
    id: 2,
    name: 'ha',
    coin: 220
  },
  {
    id: 3,
    name: 'hanh',
    coin: 40
  }
]

var totalCoin = myArray.reduce(function(total, course) {
  return total = total + course.coin
}, 0)

console.log(totalCoin)