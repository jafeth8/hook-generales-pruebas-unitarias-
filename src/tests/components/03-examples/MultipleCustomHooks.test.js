import {shallow} from 'enzyme';
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { UseCounter } from '../../../hooks/UseCounter';
import { UseFetch } from '../../../hooks/UseFetch';

jest.mock('../../../hooks/UseFetch')

jest.mock('../../../hooks/UseCounter');



describe('pruebas en componente <MultipleCustomHooks/>', () => {

    beforeEach(() => { //demostracion de que se pueden usar mas de 2 "mocks"
        UseCounter.mockReturnValue({
            counter:1,
            incrementar:()=>{},
        })
    })


    test('mostrar correctamente el componente', () => {

        UseFetch.mockReturnValue({
            data:null,loading:true,error:null
        })


        const wrapper =shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar la informacion', () => {

        UseFetch.mockReturnValue({
            data:[
                {author:'Romeo', quote:'confia en el camino que elegiste'}
            ],
            loading:false,
            error:null
        })

      
        const wrapper =shallow(<MultipleCustomHooks/>);
        //console.log(wrapper.html());

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('blockquote').exists()).toBe(true);
        expect(wrapper.find('.mb-3').text().trim()).toBe('confia en el camino que elegiste');
        expect(wrapper.find('footer').text().trim()).toBe('Romeo');
        
    })
    
    
})
