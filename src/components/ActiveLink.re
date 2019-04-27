[@react.component]
let make = (~href: string=?, ~activeClassName: string=?, ~children) => {
  let router = Next.Router.useRouter();

  let handleClick = event => {
    event |> ReactEvent.Mouse.preventDefault;
    Next.Router.push(router, ~url=href) |> ignore;
  };

  let className =
    Cn.make([
      activeClassName->Cn.ifTrue(Next.Router.pathnameGet(router) === href),
    ]);

  <a href className onClick=handleClick> children </a>;
};

[@genType]
let default = make;
