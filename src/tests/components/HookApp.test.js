import "@testing-library/jest-dom";
import {shallow} from 'enzyme';
import { HookApp } from "../../HookApp";

describe('HookApp component', () => {
    test('mostrar correctamente el componente', () => {
        const wrapper = shallow(<HookApp/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
