import {mount} from 'enzyme'
import { LoginScreen } from "../../../components/09-useContext/LoginScreen"
import { UserContext } from '../../../components/09-useContext/UserContex'

describe('pruebas en el componente LoginScreen', () => {
    
    const setUser=jest.fn();
  
    const wrapper =mount(
        <UserContext.Provider value={{ setUser}}>
            <LoginScreen/>
        </UserContext.Provider>
    )

    

    test('debe de mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de ejecutar el setUser con el argumento esperado', () => {
        
        const button=wrapper.find('button');
        //console.log(button.props());
        const eventoClik= button.prop('onClick');
        eventoClik()
        expect(setUser).toHaveBeenCalledWith({user:1234,name:'el prro'});
    })
    

})
