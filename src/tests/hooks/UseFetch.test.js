import { renderHook } from "@testing-library/react-hooks"
import { UseFetch } from "../../hooks/UseFetch"

describe('pruebas en customHook UseFetch', () => {

    test('debe de retornar la informacion por defecto', () => {

        const {result}=renderHook(()=>UseFetch('https://www.breakingbadapi.com/api/quotes/1'));
        //console.log(result.current);
        expect(result.current).toEqual({ data: null, loading: true, error: null })
    })

    test('debe de tener la info deseada, loading:false error:false', async () => {

        const {result,waitForNextUpdate} =renderHook(()=>UseFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate({timeout:5000});
        //console.log(result.current);
        const {data,loading,error}=result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    })

    test('debe manejar el error', async () => {
        const {result,waitForNextUpdate} =renderHook(()=>UseFetch('https://www.breakingbadapi.com/api/quotesXD/1'));
        await waitForNextUpdate({timeout:5000});

        const {data,loading,error}=result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('no se pudo cargar la informacion');
    })
    
    
    
})
