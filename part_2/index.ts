/* 1. Написать функцию которая: учитывает массив несортированных чисел
и определяет являются ли числа в массиве последовательными*/

const array = [3, 1, 2, 4, 6, 5]

const checkSequenceOfNumbers = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        let rez = false
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;
            if (Math.abs(arr[i] - arr[j]) === 1) {
                rez = true
            }
            if (arr[i] === arr[j]) {
                return false
            }
        }
        if (!rez) return false
    }
    return true
}


/* 2 Необходимо реализовать функцию, которая принимает этот массив в качестве аргумента и возвращает новый массив,
содержащий только уникальные элементы. Новый массив должен быть отсортирован по возрастанию.*/

const array2 = [3, 1, 2, 4, 45, 22, 68, 3, 2]

const sort = (arr: number[]): number[] => {
    const innerArr = [...arr]
    if (innerArr.length <= 1) {
        return innerArr
    }
    let pivotIndex = Math.floor(innerArr.length / 2)
    let pivot = innerArr[pivotIndex]
    let less: number[] = []
    let greater: number[] = []
    for (let i = 0; i < innerArr.length; i++) {
        if (i === pivotIndex) {
            continue;
        }
        if (innerArr[i] < pivot) {
            less.push(innerArr[i])
        }
        if (innerArr[i] > pivot) {
            greater.push(innerArr[i])
        }
    }
    const rez = [...sort(less), pivot, ...sort(greater)]
    return Array.from(new Set(rez))
}

/*3. Написать функцию которая принимает в качестве аргумента массив чисел и
возвращает новый массив с количеством повторений первоначального массива {число: кол во повторений}
*/

const array3 = [1, 2, 5, 5, 6, 6]

const repCounting = (arr: number[]) => {
    const map: { [p: number]: number } = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in map) {
            map[arr[i]] = ++map[arr[i]]
            continue;
        }
        map[arr[i]] = 1
    }
    return map
}

const isSequential = checkSequenceOfNumbers(array)
const sorted = sort(array2)
const reps = repCounting(array3)

console.log("isSequential", isSequential)
console.log("sorted", sorted)
console.log("reps", reps)