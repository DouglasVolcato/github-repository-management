import "./Header.css";
export default function Header(props) {
  return (
    <div className="Header">
      <nav className="Header__navbar">
        <div onClick={() => props.setPage("login")}>Login</div>
        <div onClick={() => props.setPage("register")}>Register</div>
        <div onClick={() => props.setPage("notes")}>Notes</div>
        <div onClick={() => props.setPage("repositories")}>Repositories</div>
      </nav>
    </div>
  );
}
