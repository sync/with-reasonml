type css = {. "withMargin": string};
[@bs.module] external css: css = "./Header.css";

[@genType]
[@react.component]
let make = () => {
  <div>
    <Next.Link href="/">
      <a className={css##withMargin}> {React.string("Home")} </a>
    </Next.Link>
    <Next.Link href="/about">
      <a className={css##withMargin}> {React.string("About")} </a>
    </Next.Link>
  </div>;
};
