type css = {. "toolbar": string};
[@bs.module] external css: css = "./Toolbar.css";

[@react.component]
let make = (~className=?, ~result="") => {
  let className = Cn.make([css##toolbar, className->Cn.unpack]);

  <div className>
    <span> {React.string("Output: ")} <b> {React.string(result)} </b> </span>
  </div>;
};

[@genType]
let default = make;
