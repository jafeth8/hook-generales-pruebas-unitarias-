import {shallow} from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import {demoTodos} from '../../fixtures/demoTodos'


describe('pruebas en <TodoListItem/>', () => {
    
    const handleToggle=jest.fn()
    const handleDelete=jest.fn();

    const wrapper =shallow(<TodoListItem todo={demoTodos[0]} index={0} handleToggle={handleToggle} handleDelete={handleDelete}/>); 

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe de llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(123);//se llamo con el id del TODO
    })

    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalled();
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);//se cambio el estado con el id del TODO (otra forma de evaluar el id 123 como en la prueba anterior-- tambien es valida)
    })
    
    test('debe de mostrar el texto correctamente', () => {
        const texto =wrapper.find('p').text().trim()
        expect(texto).toBe('1. Aprender laravel')
    })
    
    test('la etiqueta <p></p> debe de tener la clase complete si el TODO.done=true', () => {
        const todo=demoTodos[0];
        todo.done=true;

        const wrapper =shallow(
        <TodoListItem 
        todo={todo} 
        index={0} 
        handleToggle={handleToggle} 
        handleDelete={handleDelete}/>); 
        
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
        
        expect(wrapper.find('.complete').exists()).toBe(true);//otra forma de evaluarlo
        
    })
    
    
    
})
