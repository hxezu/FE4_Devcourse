<template>
  <div class="calculator">
    <div class="display">
      <div class="previous-operand">{{ previousOperandText }}</div>
      <div class="current-operand">{{ currentOperandText }}</div>
    </div>
    <button class="span-two" @click="clear">AC</button>
    <button @click="deleteNumber">DEL</button>
    <button class="operation" @click="selectOperation('÷')">÷</button>
    <button @click="appendNumber('7')">7</button>
    <button @click="appendNumber('8')">8</button>
    <button @click="appendNumber('9')">9</button>
    <button class="operation" @click="selectOperation('×')">×</button>
    <button @click="appendNumber('4')">4</button>
    <button @click="appendNumber('5')">5</button>
    <button @click="appendNumber('6')">6</button>
    <button class="operation" @click="selectOperation('-')">-</button>
    <button @click="appendNumber('1')">1</button>
    <button @click="appendNumber('2')">2</button>
    <button @click="appendNumber('3')">3</button>
    <button class="operation" @click="selectOperation('+')">+</button>
    <button class="span-two" @click="appendNumber('0')">0</button>
    <button @click="appendNumber('.')">.</button>
    <button class="operation equals" @click="calculator">=</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      currentOperand: "",
      previousOperand: "",
      operation: null,
    };
  },

  computed: {
    currentOperandText() {
      if (this.currentOperand === "") return "0";
      else return this.formatNumber(this.currentOperand);
    },
    previousOperandText() {
      if (!this.previousOperand && !this.operation) return "";
      return `${this.previousOperand} ${this.operation}`;
    },
  },

  methods: {
    //숫자 자판을 클릭했을때
    appendNumber(number) {
      if (number === "." && this.currentOperand.includes(".")) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    },
    //연산자 자판을 클릭했을 때
    selectOperation(operation) {
      if (this.currentOperand === "") return;
      if (this.previousOperand !== "") {
        this.calculator();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    },
    //계산 결과를 수행할 함수
    calculator() {
      let computation;
      const prev = parseFloat(this.previousOperand) * 10000000000;
      const current = parseFloat(this.currentOperand) * 10000000000;
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case "÷":
          computation = prev / current;
          break;
        case "×":
          computation = (prev * current) / Math.pow(10000000000, 2);
          break;
        case "+":
          computation = (prev + current) / 10000000000;
          break;
        case "-":
          computation = (prev - current) / 10000000000;
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.previousOperand = "";
      this.operation = null;
    },
    deleteNumber() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    },
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = null;
    },

    formatNumber(number) {
      const stringNumber = number.toString();
      //정수부
      const integerDigits = parseFloat(stringNumber.split(".")[0]);
      const decimalDigits = stringNumber.split(".")[1];

      let integerDisplay;
      if (isNaN(integerDigits)) {
        integerDisplay = "";
      } else {
        integerDisplay = integerDigits.toLocaleString("en");
      }

      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  max-width: 400px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  transition: transform 0.2s;
}

@media (prefers-color-scheme: dark) {
  .calculator {
    background: #1c1c1e;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
}

.display {
  grid-column: 1 / -1;
  background: #f1f1f1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  word-wrap: break-word;
  word-break: break-all;
  min-height: 100px;
  transition: background-color 0.3s;
}

@media (prefers-color-scheme: dark) {
  .display {
    background: #2c2c2e;
  }
}

.display .previous-operand {
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.display .current-operand {
  color: #000000;
  font-size: 2.5rem;
  font-weight: 500;
}

@media (prefers-color-scheme: dark) {
  .display .previous-operand {
    color: rgba(255, 255, 255, 0.6);
  }

  .display .current-operand {
    color: #ffffff;
  }
}

button {
  cursor: pointer;
  font-size: 1.5rem;
  border: none;
  outline: none;
  background: #e9e9eb;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-weight: 400;
  color: #000000;
  position: relative;
  overflow: hidden;
}

@media (prefers-color-scheme: dark) {
  button {
    background: #3a3a3c;
    color: #ffffff;
  }
}

button:hover {
  background: #d9d9db;
}

@media (prefers-color-scheme: dark) {
  button:hover {
    background: #4a4a4c;
  }
}

button:active {
  transform: scale(0.95);
}

button.span-two {
  grid-column: span 2;
}

button.operation {
  background: #ff9f0a;
  color: white;
}

button.operation:hover {
  background: #f08c00;
}

button.equals {
  background: #ff9f0a;
}

button.equals:hover {
  background: #f08c00;
}

@media (max-width: 480px) {
  .calculator {
    max-width: 100%;
    border-radius: 0;
  }

  button {
    padding: 15px;
    font-size: 1.2rem;
  }

  .display .current-operand {
    font-size: 2rem;
  }

  .display .previous-operand {
    font-size: 1.2rem;
  }
}
</style>
