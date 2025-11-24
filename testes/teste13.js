
      function calcular() {
        const n1 = Number(document.getElementById('num1').value) || 0;
        const n2 = Number(document.getElementById('num2').value) || 0;
        const op = document.getElementById('op').value;
        const resultado = document.getElementById('resultado');
        let res = 0;

        switch (op) {
          case '+':
            res = n1 + n2;
            break;
          case '-':
            res = n1 - n2;
            break;
          case '/':
            if (n2 == 0){
              resultado.textContent = 'erro: não se divide por zero'
              return;
            }
            res = n1 / n2;
            break;
          case '*':
            res = n1 * n2;
            break;
          default:
            resultado.textContent = 'operação invalida!';
        }
        resultado.textContent = `${n1} ${op} ${n2} = ${res}`;
      }
      function limpar() {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('resultado').textContent = '';
        document.getElementById('op').value = '';
      }
