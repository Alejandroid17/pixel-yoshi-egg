class i extends HTMLElement{DEFAULT_METRIC="rem";DEFAULT_SCALE=.7;DEFAULT_COLOR="green";T="transparent";B="black";C="color";constructor(){super(),this.attachShadow({mode:"open"}),this.render()}fill(i,t){return Array(i).fill(t)}styles(){const i=this.getAttribute("color")||this.DEFAULT_COLOR,t=this.getAttribute("metric")||this.DEFAULT_METRIC,s=this.getAttribute("scale")||this.DEFAULT_SCALE,l=this.pixelPicture.length*s,h=Math.max(...this.pixelPicture.map((i=>i.length)))*s;console.log(this.pixelPicture);const f=this.pixelPicture.reduce(((l,h,f)=>l.concat(h.map(((l,h)=>`${h*s}${t} ${f*s}${t} ${l.replace("color",i)}`)))),[]).join(", ");return`\n      .pixel-container {\n        width: ${h}${t};\n        height: ${l}${t};\n      }\n\n      .pixel {\n        width: ${s}${t};\n        height: ${s}${t};\n        box-shadow: ${f};\n      }\n    `}render(){this.shadowRoot.innerHTML=`\n      <style>${this.styles()}</style>\n      <div class="pixel-container">\n        <div class="pixel"></div>\n      </div>\n    `}pixelPicture=[[...this.fill(5,this.T),...this.fill(4,this.B),...this.fill(5,this.T)],[...this.fill(4,this.T),...this.fill(1,this.B),...this.fill(4,this.T),...this.fill(1,this.B),...this.fill(4,this.T)],[...this.fill(3,this.T),...this.fill(1,this.B),...this.fill(4,this.T),...this.fill(2,this.C),...this.fill(1,this.B)],[...this.fill(2,this.T),...this.fill(1,this.B),...this.fill(2,this.C),...this.fill(3,this.T),...this.fill(3,this.C),...this.fill(1,this.B)],[...this.fill(2,this.T),...this.fill(1,this.B),...this.fill(2,this.C),...this.fill(3,this.T),...this.fill(3,this.C),...this.fill(1,this.B)],[...this.fill(1,this.T),...this.fill(1,this.B),...this.fill(3,this.C),...this.fill(4,this.T),...this.fill(2,this.C),...this.fill(1,this.T),...this.fill(1,this.B)],[...this.fill(1,this.T),...this.fill(1,this.B),...this.fill(2,this.C),...this.fill(8,this.T),...this.fill(1,this.B)],[...this.fill(1,this.B),...this.fill(5,this.T),...this.fill(3,this.C),...this.fill(4,this.T),...this.fill(1,this.B)],[...this.fill(1,this.B),...this.fill(4,this.T),...this.fill(5,this.C),...this.fill(3,this.T),...this.fill(1,this.B)],[...this.fill(1,this.B),...this.fill(2,this.C),...this.fill(2,this.T),...this.fill(5,this.C),...this.fill(3,this.T),...this.fill(1,this.B)],[...this.fill(1,this.B),...this.fill(2,this.C),...this.fill(2,this.T),...this.fill(5,this.C),...this.fill(1,this.T),...this.fill(2,this.C),...this.fill(1,this.B)],[...this.fill(1,this.T),...this.fill(1,this.B),...this.fill(2,this.C),...this.fill(2,this.T),...this.fill(3,this.C),...this.fill(1,this.T),...this.fill(2,this.C),...this.fill(1,this.B)],[...this.fill(1,this.T),...this.fill(1,this.B),...this.fill(2,this.C),...this.fill(6,this.T),...this.fill(2,this.C),...this.fill(1,this.B)],[...this.fill(2,this.T),...this.fill(1,this.B),...this.fill(7,this.T),...this.fill(1,this.C),...this.fill(1,this.B)],[...this.fill(3,this.T),...this.fill(2,this.B),...this.fill(4,this.T),...this.fill(2,this.B)],[...this.fill(5,this.T),...this.fill(4,this.B)]]}customElements.define("yoshi-egg",i);
//# sourceMappingURL=main.js.map
