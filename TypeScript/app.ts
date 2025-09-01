// tsc -w app.ts
// 타입스크립트 파일 자바스크립트 파일로 계속 업데이트
// 파일 실행 -> node app.js

let myname = 'lee';
myname = 'kim';     // 타입 추론


let stdId = {
    name : 'jotn',
    course : 'typescript',
    score : 100,
    grade : function(){
        console.log('A');
    }
}

// 타입 추론
stdId.name = 'kim';   
stdId.score = 94;

function Plus(a : number, b : number) : number{
    return a + b;
}


// 열거형 : 사용자 정의 타입
enum GenderType {
    Male,
    Female
}
interface Student{
    stdId : number;
    stdName : string;
    age? : number;  // 선택적 프로퍼티
    gender : GenderType;
    course : string;
    completed : boolean;
    //setName(name : string) : void;
    setName : (name : string) => void;
    //getName : () => string;
}

class MyStudent implements Student {
    stdId = 90011;
    stdName = 'park';
    age = 30;  
    gender = GenderType.Female;
    course = 'node.js';
    completed = true;

    setName(name : string) : void{
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }
}

const myInstance = new MyStudent();
myInstance.setName('앨리스');

// function getInfo(id : number) : Student 
// {
//     return {
//         stdId : id,
//     stdName : 'kim',
//     age : 24,
//     gender : 'female',
//     course : 'CS',
//     completed : true
//     }
// }

// function setInfo(student : Student) : void {
//     console.log(student)
// }

// setInfo({
//     stdId : 90011,
//     stdName : 'kim',
//     age : 24,
//     gender : 'female',
//     course : 'CS',
//     completed : true
// })

// console.log(getInfo(5678));