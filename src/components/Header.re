type css = {
  .
  "header": string,
  "active": string,
};
[@bs.module] external css: css = "./Header.css";

[@react.component]
let make = () => {
  <header
    className={
      css##header;
    }>
    <h1> {React.string("Robot Challenge")} </h1>
    <nav>
      <ActiveLink href="/" activeClassName={css##active}>
        {React.string("Home")}
      </ActiveLink>
      <ActiveLink href="/about" activeClassName={css##active}>
        {React.string("About")}
      </ActiveLink>
    </nav>
  </header>;
};

[@genType]
let default = make;
