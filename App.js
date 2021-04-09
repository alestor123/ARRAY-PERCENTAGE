module.exports = arr => {
var perc = [];
[...new Set(arr)].forEach(arrr =>   perc.push({lics:arrr,percent:arr.filter(itm => itm === arrr).length * 100 / arr.length}))
return perc
}