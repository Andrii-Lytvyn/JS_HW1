// Задание 1
// Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". +
// Создайте еще один массив с возрастами: 18, 27, 74, 34; +
// Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов" +

let nameArray = ["Семен", "Иван", "Петр", "Татьяна"];
let agesArray = [18, 27, 74, 34];
let mixedArray = [];
for (let i = 0; i < nameArray.length; i++) {
    // console.log('name: ' + nameArray[i]);
    // console.log('age: ' + agesArray[i]);
    // console.log();
    mixedArray.push(nameArray[i] + ' ' + agesArray[i] + ' years old');
    console.log(mixedArray[i]);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Задание 2
// Используя пройденные на занятии методы массива получите из этого массива новый массив,
//в котором элементы идут в обратной последовательности.

console.log();
console.log('new Array');
console.log();
let newArray = [''];
for (let i = 0; i < mixedArray.length; i++) {
    newArray.unshift(mixedArray[i]);

}


for (var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}

