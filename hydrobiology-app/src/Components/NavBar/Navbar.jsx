import "./NavBar.css"

function NavBar({navbar,logo}){
return(
    <header className="nav-container">
        <div className="navbar">
            <h1>{logo}</h1>
            <ul className="nav-links">
            {navbar.map((item) => (
            <li key={item.id}>
              <a href={item.path}>{item.realName}</a>
            </li>
          ))}
            </ul>
        </div>
    </header>
)
}

export default NavBar;