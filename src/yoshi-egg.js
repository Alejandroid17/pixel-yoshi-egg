class YoshiEgg extends HTMLElement {
  DEFAULT_METRIC = "rem";
  DEFAULT_SCALE = 0.7;
  DEFAULT_COLOR = "green"

  T = "transparent";
  B = "black";
  C = "color";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  fill(number, color) {
    return Array(number).fill(color);
  }

  styles() {
    const color = this.getAttribute("color") || this.DEFAULT_COLOR;
    const metric = this.getAttribute("metric") || this.DEFAULT_METRIC;
    const scale = this.getAttribute("scale") || this.DEFAULT_SCALE;

    const boxShadow = this.pixelPicture
      .reduce(
        (acc, row, rowIndex) =>
          acc.concat(
            row.map(
              (column, columnIndex) =>
                `${columnIndex * scale}${metric} ${rowIndex * scale}${metric} ${column.replace("color", color)}`
            )
          ),
        []
      )
      .join(", ");

    return /* css */ `
      .container {
        width: ${scale}${metric};
        height: ${scale}${metric};
        box-shadow: ${boxShadow};
      }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${this.styles()}</style>
      <div class="container"></div>
    `;
  }


  pixelPicture = [
    [
      ...this.fill(5, this.T), 
      ...this.fill(4, this.B), 
      ...this.fill(5, this.T)
    ],
    [
      ...this.fill(4, this.T),
      ...this.fill(1, this.B),
      ...this.fill(4, this.T),
      ...this.fill(1, this.B),
      ...this.fill(4, this.T),
    ],
    [
      ...this.fill(3, this.T),
      ...this.fill(1, this.B),
      ...this.fill(4, this.T),
      ...this.fill(2, this.C),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(2, this.T),
      ...this.fill(1, this.B),
      ...this.fill(2, this.C),
      ...this.fill(3, this.T),
      ...this.fill(3, this.C),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(2, this.T),
      ...this.fill(1, this.B),
      ...this.fill(2, this.C),
      ...this.fill(3, this.T),
      ...this.fill(3, this.C),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(1, this.T),
      ...this.fill(1, this.B),
      ...this.fill(3, this.C),
      ...this.fill(4, this.T),
      ...this.fill(2, this.C),
      ...this.fill(1, this.T),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(1, this.T),
      ...this.fill(1, this.B),
      ...this.fill(2, this.C),
      ...this.fill(8, this.T),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(1, this.B),
      ...this.fill(5, this.T),
      ...this.fill(3, this.C),
      ...this.fill(4, this.T),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(1, this.B),
      ...this.fill(4, this.T),
      ...this.fill(5, this.C),
      ...this.fill(3, this.T),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(1, this.B),
      ...this.fill(2, this.C),
      ...this.fill(2, this.T),
      ...this.fill(5, this.C),
      ...this.fill(3, this.T),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(1, this.B),
      ...this.fill(2, this.C),
      ...this.fill(2, this.T),
      ...this.fill(5, this.C),
      ...this.fill(1, this.T),
      ...this.fill(2, this.C),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(1, this.T),
      ...this.fill(1, this.B),
      ...this.fill(2, this.C),
      ...this.fill(2, this.T),
      ...this.fill(3, this.C),
      ...this.fill(1, this.T),
      ...this.fill(2, this.C),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(1, this.T),
      ...this.fill(1, this.B),
      ...this.fill(2, this.C),
      ...this.fill(6, this.T),
      ...this.fill(2, this.C),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(2, this.T),
      ...this.fill(1, this.B),
      ...this.fill(7, this.T),
      ...this.fill(1, this.C),
      ...this.fill(1, this.B),
    ],
    [
      ...this.fill(3, this.T),
      ...this.fill(2, this.B),
      ...this.fill(4, this.T),
      ...this.fill(2, this.B),
    ],
    [
      ...this.fill(5, this.T), 
      ...this.fill(4, this.B)
    ],
  ];
}

customElements.define("yoshi-egg", YoshiEgg);
