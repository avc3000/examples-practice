class Display {
  constructor(displayValuePrevious, displayValueCurrent) {
    this.displayValueCurrent = displayValueCurrent;
    this.displayValuePrevious = displayValuePrevious;
    this.calculator = new Calculator();
    this.typeOperation = undefined;
    this.valueCurrent = "";
    this.valuePrevious = "";
    this.signs = {
      sum: "+",
      divide: "/",
      subtract: "-",
      multiply: "*",
    };
  }

  delete() {
    this.valueCurrent = this.valueCurrent.toString().slice(0, -1);
    this.printValues();
  }

  deleteAll() {
    this.valueCurrent = "";
    this.valuePrevious = "";
    this.typeOperation = undefined;
    this.printValues();
  }

  operator(type) {
    this.typeOperation !== "equal" && this.calculate();
    this.typeOperation = type;
    this.valuePrevious = this.valueCurrent || this.valuePrevious;
    this.valueCurrent = "";
    this.printValues();
  }

  addNumber(number) {
    if (number === "." && this.valueCurrent.includes(".")) return;

    this.valueCurrent = this.valueCurrent.toString() + number.toString();
    this.printValues();
  }

  printValues() {
    this.displayValueCurrent.textContent = this.valueCurrent;
    this.displayValuePrevious.textContent = `${this.valuePrevious} ${
      this.signs[this.typeOperation] || ""
    }`;
  }

  calculate() {
    const valuePrevious = parseFloat(this.valuePrevious);
    const valueCurrent = parseFloat(this.valueCurrent);

    if (isNaN(valueCurrent) || isNaN(valuePrevious)) return;

    this.valueCurrent = this.calculator[this.typeOperation](
      valuePrevious,
      valueCurrent
    );
  }
}
