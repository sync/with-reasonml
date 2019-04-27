type css = {. "about": string};
[@bs.module] external css: css = "./about.css";

[@react.component]
let make = () => {
  <div
    className={
      css##about;
    }>
    <p> {React.string("This is the about page.")} </p>
    <Counter />
  </div>;
};

let default = make;
