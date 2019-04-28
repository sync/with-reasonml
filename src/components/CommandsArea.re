type css = {
  .
  "container": string,
  "textArea": string,
  "button": string,
};
[@bs.module] external css: css = "./CommandsArea.css";

[@react.component]
let make =
    (
      ~defaultText="",
      ~textUseState as (text, setText)=React.useState(() => defaultText),
      ~text=text,
      ~setText=setText,
      ~result="",
    ) => {
  let onTextChange = e => ReactEvent.Form.target(e)##value |> setText;

  let onClearClick = _ => setText(_ => "");

  <div
    className={
      css##container;
    }>
    <textarea
      className={css##textArea}
      placeholder="Enter commands..."
      value=text
      onChange=onTextChange
      ariaLabel="Enter commands"
    />
    <div>
      {ReasonReact.string(result)}
      <button
        className={css##button}
        title="Clear Text"
        onClick=onClearClick
        disabled={String.length(text) === 0}>
        {React.string("Clear Text")}
      </button>
    </div>
  </div>;
};

[@genType]
let default = make;
