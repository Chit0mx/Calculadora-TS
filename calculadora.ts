function operaciones(op: string) {

    var ops = {
        sumar: function sumarNumeros(n1:number, n2:number) {
            return (n1 + n2);
        },

        restar: function restarNumeros(n1:number, n2:number) {
            return (n1 - n2);
        },
        
        multiplicar: function multiplicarNumeros(n1:number, n2:number) {
            return (n1 * n2);
        },

        dividir: function dividirNumeros(n1:number, n2:number) {
            return (n1 / n2);
        }

    };

    var num1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    var num2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);

    
    
        switch(op) {
            case 'sumar':
                var resultado:number = ops.sumar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'restar':
                var resultado:number = ops.restar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'multiplicar':
                var resultado:number = ops.multiplicar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'dividir':
                var resultado:number = ops.dividir(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;

        }
}