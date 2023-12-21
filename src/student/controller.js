const pool= require('../../db')
const queries=require('./queries')

const getStudents =(req,res)=>{
    pool.query(queries.getStudents,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getStudentById =(req,res)=>{
    const id=req.params.studentId
    pool.query(queries.getStudentById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const addStudent=(req,res)=>{
    // console.log(req);
    const {name,email,age,dob}=req.body
    pool.query(queries.checkEmailexist,[email],(error,results)=>{
        if(results.rowCount){
            res.send("Already Exists")
        }
        else{
            pool.query(queries.addStudent,[name,email,age,dob],(error,results)=>{
                if(error) throw error
                res.status(201).send("Student Added")
            })
        }

    })

}

const delStudent=(req,res)=>{
    const {email}=req.body
    pool.query(queries.checkEmailexist,[email],(error,results)=>{
        if(error) throw error;
        else if(results.rowCount){
            pool.query(queries.delStudent,[email],(error,results)=>{
                if(error) throw error
                else{
                    res.send("Deleted Succesfully")
                }
            })
        }
        else{
            res.send("No such email found")
        }
    })
}



module.exports={
    getStudents,
    getStudentById,
    addStudent,
    delStudent
};