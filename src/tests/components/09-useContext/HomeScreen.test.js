import {mount} from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContex';



describe('pruebas en el componente <HomeScreen/>', () => {

    const user={
        name:'Areli',
        email: 'areli@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen/>
        </UserContext.Provider>
        
    );

    test('debe mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();

       let pre =wrapper.find('pre')
       console.log(pre.html());
       expect(pre.text().trim()).toBe(JSON.stringify(user,null,3))
    })
    
})
