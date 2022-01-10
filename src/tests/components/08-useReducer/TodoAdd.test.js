import {shallow} from 'enzyme'
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd'

describe('pruebas en el componente <TodoAdd/>', () => {
    const handleAddTodo=jest.fn();

    const wrapper =shallow(<TodoAdd handleAddTodo={handleAddTodo}/>)
    
    test('debe mostrarse correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('no debe de llamar el handleAddTodo', () => {
        const formSubmit =wrapper.find('form').prop('onSubmit')
        //console.log(formSubmit)
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
        expect(handleAddTodo).not.toHaveBeenCalled();//otra forma de evaluarlo
    })
    
    test('debe de llamar a la funcion handleAddTodo', () => {

        const value='Aprender laravel'
        wrapper.find('input').simulate('change', {target:{name:'description',value}});

        const formSubmit =wrapper.find('form').prop('onSubmit')
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(1);

        //evaluacion de que el handleAddTodo haya recbibido como parametro un objeto
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); //esto no es preciso ya que se puede evaluar un objeto vacio {} como valido
        
        expect(handleAddTodo).toHaveBeenCalledWith({
            id:expect.any(Number),
            desc:value,
            done: false
        }) //esto es mejor y mas preciso
        
    })
    
    
})
