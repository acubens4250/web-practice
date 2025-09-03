let empName : string;
let age : number;
let empJop : string;

function printEmp(empName : string, age : number, empJob : string) : void {
    // console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
    console.log(empName+'의 나이는' +age+'이고, 직업은 '+empJob+'입니다');
}

printEmp('kim', 20, 'developer');
