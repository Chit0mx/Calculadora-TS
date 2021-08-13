function operaciones(op) {
    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (n1 + n2);
        },
        restar: function restarNumeros(n1, n2) {
            return (n1 - n2);
        },
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (n1 * n2);
        },
        dividir: function dividirNumeros(n1, n2) {
            return (n1 / n2);
        }
    };
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    switch (op) {
        case 'sumar':
            var resultado = ops.sumar(num1, num2);
            document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + resultado + "</span>";
            break;
        case 'restar':
            var resultado = ops.restar(num1, num2);
            document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + resultado + "</span>";
            break;
        case 'multiplicar':
            var resultado = ops.multiplicar(num1, num2);
            document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + resultado + "</span>";
            break;
        case 'dividir':
            var resultado = ops.dividir(num1, num2);
            document.getElementById('resultado').innerHTML = "<span style='color: green;'>" + resultado + "</span>";
            break;
    }
}
