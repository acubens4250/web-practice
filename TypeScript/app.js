// tsc -w app.ts
// 타입스크립트 파일 자바스크립트 파일로 계속 업데이트
// 파일 실행 -> node app.js
var myname = 'lee';
myname = 'kim'; // 타입 추론
var stdId = {
    name: 'jotn',
    course: 'typescript',
    score: 100,
    grade: function () {
        console.log('A');
    }
};
// 타입 추론
stdId.name = 'kim';
stdId.score = 94;
function Plus(a, b) {
    return a + b;
}
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 90011;
        this.stdName = 'park';
        this.age = 30;
        this.gender = GenderType.Female;
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
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
