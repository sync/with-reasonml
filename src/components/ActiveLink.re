[@react.component]
let make =
    (
      ~href: string=?,
      ~activeClassName: string=?,
      ~router=Next.Router.useRouter(),
      ~children,
    ) => {
  let handleClick = event => {
    event |> ReactEvent.Mouse.preventDefault;
    router->Belt.Option.map(router => Next.Router.push(router, ~url=href))
    |> ignore;
  };

  let className =
    Cn.make([
      activeClassName->Cn.ifTrue(
        router
        ->Belt.Option.map(router => router##pathname)
        ->Belt.Option.getWithDefault("/")
        === href,
      ),
    ]);

  <a href className onClick=handleClick> children </a>;
};

[@genType]
let default = make;
