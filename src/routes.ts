import {Router, Request, Response}from 'express'

const router = Router();

router.get('/test', (req:Request, res:Response)=>{
    return res.json({Ok: true});
    // throw new Error('Erro ao fazer a requisição!')
})

export {router};