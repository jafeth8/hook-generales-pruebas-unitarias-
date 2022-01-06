
import { renderHook,act } from "@testing-library/react-hooks";
import { UseCounter } from "../../hooks/UseCounter";

describe('pruebas en <UseCounter/>', () => {
    test('devolver valores por defecto', () => {
        const {result}= renderHook(() => UseCounter());
        
        expect(result.current.counter).toBe(0)
        expect(typeof result.current.incrementar).toBe('function')
        expect(typeof result.current.decrementar).toBe('function')
        expect(typeof result.current.resetear).toBe('function')
    })


    

    test('debe de tener el counter en 10', () => {
        const {result}= renderHook(() => UseCounter(10));
        expect(result.current.counter).toBe(10)

    })


    

    test('debe incrementar el counter en 1', () => {
        const {result}=renderHook(()=>UseCounter(10));
        const incrementar=result.current.incrementar;
        
        act(()=>{
            incrementar();
            
        });

        expect(result.current.counter).toBe(11);
        //expect(result.current.counter).toBe(0);

    })

    test('debe resetear el valor a 10', () => {
        const {result}=renderHook(()=>UseCounter(10));
        const incrementar=result.current.incrementar;
        const reset=result.current.resetear;
        act(()=>{
            incrementar();
            reset();
            
        });
        expect(result.current.counter).toBe(10);
    })

    test('debe decrementar el valor a 9', () => {
        const {result}=renderHook(()=>UseCounter(10));
        const decrementar=result.current.decrementar;
        act(()=>{
            decrementar();
            
        });
        expect(result.current.counter).toBe(9);
    })
    
    

    
})
