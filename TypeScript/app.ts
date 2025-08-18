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

interface Student{
    stdId : number;
    stdName : string;
    age : number;
    gender : string;
    course : string;
    completed : boolean;
}

function getInfo(id : number) : Student 
{
    return {
        stdId : id,
    stdName : 'kim',
    age : 24,
    gender : 'female',
    course : 'CS',
    completed : true
    }
}

console.log(getInfo(5678));