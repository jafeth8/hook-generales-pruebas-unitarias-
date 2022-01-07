import { renderHook,act } from "@testing-library/react-hooks"
import { UseForm } from "../../hooks/UseForm"


describe('pruebas en <UseForm/>', () => {
    
    const initialForm={
        name:'',
        email:''
    }

    test('mostrar valores por defecto', () => {
        const {result}=renderHook(()=>UseForm(initialForm));
        //console.log(result.current);
        const [values,handleChange,reset]=result.current
        expect(values).toEqual(initialForm)
        expect(typeof handleChange).toBe('function');
        expect(typeof reset).toBe('function');
        

    })

    test('debe cambiar el valor del formulario (cambiar name)', () => {
        const {result}=renderHook(()=>UseForm(initialForm));
       //const [values,handleChange]=result.current
        const [,handleChange]=result.current
        act(() =>{
            handleChange({target:{name:'name',value:'jibril'}});
        })
        
        //expect(result.current[0]).toEqual({name:'jibril',email:''})
        expect(result.current[0]).toEqual({...initialForm,name:'jibril'})
    })
    
    test('debe re-establecer el formulario con reset', () => {
        
        const {result}=renderHook(()=>UseForm(initialForm));
        const [,handleChange,reset]=result.current

        act(() =>{
            handleChange({target:{name:'name',value:'jibril'}});
            reset();
        })

        expect(result.current[0]).toEqual({name:'',email:''})
    })
    
    

})
