arr1 = [1,2,-3,4,-5,6];
arr2 = [1,2,-3,4,-5,6];

arr3 = [1,2,4,-5,6];
arr4 = [1,2,-3,4,6];
/*Verilen iki arrayin beraber olub olmamasini geri qaytaran funksiya*/

function equalsArray(arr1, arr2) {
    if(arr1.length == arr2.length)
    {
        for (i=0;i < arr1.length; i++) {
            if(arr1[i] != arr2[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
} 
console.log(equalsArray(arr1,arr2))
console.log(equalsArray(arr3,arr4))

/*Not: Obyektlerin deyerlerini dogru sekilde muqayise edib, dogru netice ala bilmek ucun JSON.stringify() istifade ederek muqayise etmek lazimdir.*/
let student1 = [{ Name: "Yusif" }, { Surname: "Huseynzade" }, { Age: 26 }];
let student2 = [{ Name: "Hesen" }, { Surname: "Muradov" }, { Age: 28 }];
let student3 = [{ Name: "Yusif" }, { Surname: "Huseynzade" }, { Age: 26 }];

console.log(JSON.stringify(student1) === JSON.stringify(student2));
console.log(JSON.stringify(student1) === JSON.stringify(student3));
console.log(student1 === student3); /*Bu sekilde console.loga verdiyimiz zaman obyektlerin daxilindeki deyerlerin beraberliyi dogru yoxlanilmis olmur ve bize false qaytarir*/ 

