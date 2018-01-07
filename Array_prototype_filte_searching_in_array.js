var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
    return fruits.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;//있을때를 출력하기 위한거구나
    })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']