type css = {. "about": string};
[@bs.module] external css: css = "./about.css";

[@react.component]
let make = (~onServer) => {
  <div
    className={
      css##about;
    }>
    <p> {React.string("This is the about page.")} </p>
    <p> {React.string("onServer: " ++ string_of_bool(onServer))} </p>
    <Counter />
  </div>;
};

let getInitialProps = context => {
  let onServer =
    switch (Js.Nullable.toOption(context##req)) {
    | None => false
    | Some(_) => true
    };
  {"onServer": onServer};
};

let default = make;

let inject:
  (
    Js.t('a) => React.element,
    {. "req": Js.Nullable.t(Js.t('a))} => Js.t('a)
  ) =>
  unit = [%bs.raw
  {| (cls, fn) => cls.getInitialProps = fn |}
];

inject(default, getInitialProps);
