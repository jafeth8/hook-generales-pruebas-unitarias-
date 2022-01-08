import { todoReducer } from '../../../components/08-useReducer/todoReducer';

import {demoTodos} from '../../fixtures/demoTodos';

describe('pruebas en todoReducer', () => {

    test('debe retornar el estado por defecto', () => {
        const state=todoReducer(demoTodos,{})
        expect(state).toEqual(demoTodos);
        
    })

    test('debe agregar un TODO', () => {
        const action={
            type:'add',
            payload: {
                id:12345,
                desc:'Aprender webpack',
                done:false 
            }
        }
        const state=todoReducer(demoTodos,action)
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos,action.payload]); //otra forma de evaluar
    })

    test('debe de borrar un TODO', () => {
        const action={
            type: 'delete',
            payload:1234
        }
        const state=todoReducer(demoTodos,action)
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);
    })

    test('debe de hacer el TOGGLE del todo', () => {
        const action={
            type: 'toggle',
            payload:123
        }

        const state=todoReducer(demoTodos,action)
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    })
    
    
    
    
})
