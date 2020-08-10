import {
    ToyReact,
    Component
} from './ToyReact.js'

class MyComponent extends Component{

    render() {
        return <div>
            <span>HELLO</span>
            <span>WORLD</span>
            <div>
                {this.children}
            </div>
        </div>
    }
}

let demo = <MyComponent name = "test" id="idt">
    <div>666</div>
    </MyComponent>

  ToyReact.render(
    demo,
    document.body
  ) 

  /*
  var demo = ToyReact.creatElement("div", {
    name: "test",
    id: "idt"
  }, 
  ToyReact.creatElement("span", null, "hello world"), 
  ToyReact.creatElement("div", null, "hh"), 
  ToyReact.creatElement("span", null));
  document.body.appendChild(demo);
  */