import { Request, Response } from 'express';
import { Tarefa } from '../models/Tarefa';

export const all = async (req: Request, res: Response) => {
    // cria a variavel e usa a função findAll pra pegar todos
    const tarefa = await Tarefa.findAll();
    //mando a resposta em json
    return res.send({tarefa});//criar
}
//Mandar pelo corpo
export const add = async (req: Request, res: Response) => {
    //verifica se title existe no corpo
    console.log('data', req.body);
    if(req.body.title){//requisicao+corpo+titulo
        
        ///criar variavel e usar funcao create
        let newTarefa = await Tarefa.create({
            //passa os textos a ser inseridos 
            title: req.body.title,
            done: req.body.done ? true : false
        });

        //status que da quando da certo
        res.status(201).json({ item: newTarefa });
        

    }else{
        //se não der certo
        res.json({error: 'Dados não enviado.'})
    }

    
}
export const update = async (req: Request, res: Response) => {
    //pegar id - ela sempre vem como string
    const id: string = req.params.id; 

    //ver se existe pela chave primaria
    let tarefa = await Tarefa.findByPk(id);
    //se existir
    if(tarefa){
        //se tiver um titulo
        if(req.body.title){
            tarefa.title = req.body.title; 
        }
        //se tiver um titulo
        if(req.body.done){
            //caso mande true || false ou 1 || 0 ou TRUE
            switch(req.body.done.toLowerCase()){//lowercase para sempre que subir o true seja em minusculo
                case 'true':
                case '1':
                    tarefa.done = true;
                    break;
                case 'false':
                case '1':
                    tarefa.done = false
                    break;        
            }
        }
        //Salva
        await tarefa.save();
        //manda a resposta json
        res.json({item: tarefa});



    } else {
        res.json({error: 'Item não encontrado'});
    }
}
export const remove = async (req: Request, res: Response) => {
    //cria váriavel com o id
    let id: string = req.params.id;
    //pega o id chave
    let tarefa = await Tarefa.findByPk(id);
    //se tiver tarefa
    if(tarefa) {
        await tarefa.destroy();
    }
    res.json({})
    
    
}