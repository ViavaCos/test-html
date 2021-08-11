class Fireworks {
  constructor () {
    this.wrapper = document.querySelector('body')
    this.createBaseElement()
  }

  createBaseElement(){
    const wrap = generateElement('div', '', 'fireworks_wrap')
    const top = Math.ceil(Math.random() * this.wrapper.clientHeight);
    const left = Math.ceil(Math.random() * this.wrapper.clientWidth);
    wrap.style.top = top + 'px';
    wrap.style.left = left + 'px';
    const randomColor = `
    rgb(${Math.ceil(Math.random() * 255)},
        ${Math.ceil(Math.random() * 255)}, 
        ${Math.ceil(Math.random() * 255)})
    `;
      const randomDelay = `animation-delay: ${Math.random()}s;`;
      const style = `color:${randomColor}; ${randomDelay}`;

    ['top', 'right', 'bottom', 'left'].forEach((direction,idx) => {
      this[direction] = generateElement('div', style, 'firework', `fireworks_${direction}`)
      wrap.append(this[direction])
    })
    this.wrapper.append(wrap)
  }
}

function generateElement(elName, style, ...rest){
  const element = document.createElement(elName)
  element.style = style
  rest.length && element.classList.add(...rest)
  return element
}

// const F = new Fireworks()
// console.log(F);

for (let index = 0; index < 20; index++) {
  new Fireworks()
}