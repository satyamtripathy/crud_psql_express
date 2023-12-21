const getStudents="SELECT * FROM student"
const getStudentById="SELECT * FROM student WHERE id=$1"
const addStudent="INSERT INTO student(name,email,age,dob) VALUES($1,$2,$3,$4)"
const checkEmailexist="SELECT * FROM student WHERE email=$1"
const delStudent="DELETE FROM student WHERE email=$1"
module.exports={
    getStudents,
    getStudentById,
    checkEmailexist,
    addStudent,
    delStudent
};