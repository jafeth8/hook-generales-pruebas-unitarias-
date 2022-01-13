import { act } from '@testing-library/react'
import {shallow,mount} from 'enzyme'
import { TodoApp } from '../../../components/08-useReducer/TodoApp'
import { demoTodos } from '../../fixtures/demoTodos'

describe('pruebas en el componente <TodoApp/>', () => {
    
    const wrapper=shallow(<TodoApp/>)

    Storage.prototype.setItem=jest.fn();
    
    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de agregar un TODO', () => {
        /*se utiliza mount() en esta prueba, porque se evaluara localStorage.setItem() 
        y este forma parte de las "entrañas" de javascript y por lo tanto se tiene que adentrar a funciones
        mas haya del componente a evaluar*/
        const wrapper= mount(<TodoApp/>); 
        
        const handleAddTodo=wrapper.find('TodoAdd').prop('handleAddTodo');

        act(()=>{
            handleAddTodo(demoTodos[0]);
            handleAddTodo(demoTodos[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp: (2)')
        
        /*se accede directamente a localStorage.setItem() porque es parte de javascript no hay necesidad de importar nada
        para saber porque se evalua que se haya llamado 2 veces revisar el useEffect() del componente
        
        */ 
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    })
    
    test('debe de eliminar un TODO', () => {
        const handleAddTodo=wrapper.find('TodoAdd').prop('handleAddTodo');//referencia del primer wrapper delclaro en el describe
        const handleDelete=wrapper.find('TodoList').prop('handleDelete')

        /* nota: al ejecutar estas fuciones que cambian el estado no se usa el metod act porque en esta prueba 
        no se utilizo el "renderizado" con mount() sino con el metodo shallow() */
        handleAddTodo(demoTodos[0])
        handleDelete(demoTodos[0].id)
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp: (0)')
        
    })
    

})
