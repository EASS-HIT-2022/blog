import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
       
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1551893281-e585f2fbe3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}