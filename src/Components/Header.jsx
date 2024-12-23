import "../components/styles/header.css";
import { navbarItems } from "../Components/data/navbar";

export default function Header(){
  return (
    <>
      <header className="head">
        <div className="logo">10000Coders</div>
        <img src="440419368_959778312818419_2549746272009239981_n.jpg" alt="" />
        <div className="navbar">
          <ul>
            {navbarItems.map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

// export default Header;
