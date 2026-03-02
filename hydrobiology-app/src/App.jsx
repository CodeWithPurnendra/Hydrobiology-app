import NavBar from "./Components/NavBar/Navbar";

function App(){
    const navbar= [
    { id: 1, path: "/", realName: "Home" },
    { id: 2, path: "/dashboard", realName: "Dashboard" },
    { id: 3, path: "/species", realName: "Species" },
    { id: 4, path: "/reports", realName: "Reports" },
    { id: 5, path: "/map", realName: "Map" },
    { id: 6, path: "/quiz", realName: "Quiz" },
  ];


    return(
        <div>
            <NavBar navbar={navbar} logo= "🌊"/>
        </div>
    )
}

export default App