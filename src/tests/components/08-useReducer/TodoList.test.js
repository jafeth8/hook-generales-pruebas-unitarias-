import {shallow} from 'enzyme'
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';



describe('pruebas en el componente <TodoList/>', () => {

    const handleDelete=jest.fn();
    const handleToggle=jest.fn();

    const wrapper = shallow(<TodoList 
        todos={demoTodos} 
        handleDelete={handleDelete}
        handleToggle={handleToggle} 
    />);

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener el numero correcto de <todoListItem/> y evaluar que unas de sus propiedades sea una funcion', () => {
       
        //console.log(wrapper.find('TodoListItem').length)
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
         //console.log(wrapper.find('TodoListItem').at(0).props());
         //console.log(wrapper.find('TodoListItem').at(0).prop('handleDelete'));
        
         expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    })
    
    
})
