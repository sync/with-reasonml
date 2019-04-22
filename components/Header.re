type css = {. "withMargin": string};
[@bs.module] external css: css = "./Header.css";

[@react.component]
let make = () => {
  <div>
    <Next.Link href="/">
      <a className={css##withMargin}> {ReasonReact.string("Home")} </a>
    </Next.Link>
    <Next.Link href="/about">
      <a className={css##withMargin}> {ReasonReact.string("About")} </a>
    </Next.Link>
  </div>;
};

let default = make;
