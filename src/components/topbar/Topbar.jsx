import "./topbar.scss";
import { Mail, Person } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Anh Tran.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>0983 673 974</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>trantuananh0705@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
