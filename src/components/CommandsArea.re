type css = {. "textArea": string};
[@bs.module] external css: css = "./CommandsArea.css";

[@react.component]
let make =
    (
      ~className=?,
      ~defaultText="",
      ~textUseState as (text, setText)=React.useState(() => defaultText),
      ~text=text,
      ~setText=setText,
    ) => {
  let className = Cn.make([css##textArea, className->Cn.unpack]);

  let onTextChange = e => ReactEvent.Form.target(e)##value |> setText;

  <textarea
    className
    placeholder="Enter commands..."
    value=text
    onChange=onTextChange
    ariaLabel="Enter commands"
  />;
};

[@genType]
let default = make;
