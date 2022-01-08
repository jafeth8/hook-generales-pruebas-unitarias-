import {shallow} from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('pruebas en el componente <RealExampleRef/>', () => {

    const wrapper=shallow(<RealExampleRef/>)
    
    test('mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
    test('ocultar y mostrar el componente <MultipleCustomHooks/> al presionar el button', () => {
        
        wrapper.find('button').simulate('click')
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
        wrapper.find('button').simulate('click')
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
})
