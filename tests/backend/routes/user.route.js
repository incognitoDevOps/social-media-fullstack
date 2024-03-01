import express from 'express'

const router = express.Router()

router.get('/', (req,res)=>{
    res.send('This is the test user');
});

export default router;
