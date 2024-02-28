import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <NavItemList />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1>VH</h1>
    </div>
  );
}

function NavItemList() {
  return (
    <ul className="navbar">
      <Logo />
      <NavItem>ABOUT</NavItem>
      <NavItem>SKILLS</NavItem>
      <NavItem>PROJECTS</NavItem>
      <NavItem>CV</NavItem>
      <NavItem>CONTACT</NavItem>
      <div>
        <Links>
          <i class="fa-brands fa-linkedin fa-xl"></i>
        </Links>
        <Links>
          <i class="fa-brands fa-github fa-xl"></i>
        </Links>
      </div>
    </ul>
  );
}

function NavItem({ children }) {
  return <li className="nav-item">{children}</li>;
}

function Links({ children }) {
  return children;
}
