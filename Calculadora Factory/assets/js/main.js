function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    pressionaBackSpace() {
      this.display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          console.log("Apagar");
          e.preventDefault();
          this.apagaUm();
        }
      })
    },

    pressionaEnter() {
      this.display.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = new Function(`return ${conta}`)();  // Foi anteriormente feito com eval, mas por medidas de segurança é melhor evitar o uso dele.

        if (!conta && conta !== 0) {
          alert('Conta inválida!');
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida!');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },


    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();
      })

    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }

  }
}

const calculadora = criaCalculadora();
calculadora.inicia();
