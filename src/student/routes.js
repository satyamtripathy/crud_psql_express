const {Router}=require('express');
const controller=require('./controller');
const router=Router();

router.get('/',controller.getStudents);
router.get('/:studentId',controller.getStudentById);
router.post('/',controller.addStudent);
router.delete('/',controller.delStudent);
module.exports=router;


