
//Faz os imports

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

//Depois tipagem

export interface TarefaInstance extends Model {
    id:number;
    title:string;
    done:boolean;
}

//Modelagem
export const Tarefa = sequelize.define<TarefaInstance>('Tarefa', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false

    } 
}, {
        tableName: 'tarefa',
        timestamps:false
});
