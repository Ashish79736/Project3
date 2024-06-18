
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Menu from './Components/Menu';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
function App() {
  return (
    <Router>
    <div className="container-fluid main_container">
        <div className="row">
            <div className="row">
                <nav className="nav navbar-expand-lg navbar-dark p-3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="collapse navbar-collapse col-sm-7" id="navbarNav">
                                <ul className="navbar-nav menu">
                                    <li className="nav-item item montserrat">
                                        <Link className="nav-link" to={"/"}>Home</Link>
                                    </li>
                                    <li className="nav-item item montserrat">
                                        <Link className="nav-link" to={"/about"}>About</Link>
                                    </li>
                                    <li className="nav-item item montserrat">
                                        <Link className="nav-link" to={"/menu"}>Menu</Link>
                                    </li>
                                    <li className="nav-item item montserrat">
                                        <Link className="nav-link" to={"/blog"}>Blog</Link>
                                    </li>
                                    <li className="nav-item item montserrat">
                                        <Link className="nav-link" to={"/shop"}>Shop</Link>
                                    </li>
                                    <li className="nav-item item montserrat">
                                        <Link className="nav-link" to={"/contact"}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="navbar-brand logo col-sm-3" style={{position : "right;"}}><img
                                src={require("./resources/images/logo.png")}
                                alt="Company Logo"
                                className="logo img-fluid"
                            /></div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span><i className="fa-solid fa-bars"></i></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="intro">
                <div className="row">
                    <div style={{color: "#ffffff"}} className="col-sm-7 m-2"><h1 style={{fontSize:"9rem"}} className="grand-hotel text-wrap mt-5">Coffee Time</h1></div>
                    <div className="col-sm-5"></div>
                </div>
                <div className="text row" style={{top :"-15%;"}}>
                    <div className="text_container col-sm-5 p-5" style={{zIndex: "2;"}}>
                        
                        <h3 className="montserrat">YOUR HEADLINE</h3>
                        <p className="montserrat">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quiassumenda pariatur porro ipsa minus, similique libero natus
                        incidunt deserunt nisi maxime hic debitis repellat in?
                        </p>
                        <button style={{zIndex:"4"}} className="button montserrat" onclick="btnEffect(this)">
                        Order Now
                        <span></span><span></span><span></span><span></span>
                        </button>
                    </div>
                    <div className="col-sm-7 mt-2"><img src={require("./resources/images/introCoffee.png")} style={{float:"right",marginRight:"-2.8%"}}alt=""  className="coffee img-fluid" /></div>
                </div>
                <div className="curl1" style={{marginTop:"-10%",marginLeft:"-6.4%"}}>
                    <img style={{zIndex:"3"}} src={require("./resources/images/intro Design.png")} alt=""  className="intro-design img-fluid" />
                </div>
                <div className="bg-icons">
                    <img src={require("./resources/images/cup.png")} alt="cup" className="img-fluid" id="intro-cup" />
                    <img src={require("./resources/images/jar.png")} alt="jar" className="img-fluid"  id="intro-jar" />
                    <img src={require("./resources/images/bean.png")} alt="bean" className="img-fluid" id="intro-bean" />
                </div>
            </div>
            <section>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='blog' element={<Blog/>}/>
                <Route exact path='/menu' element={<Menu/>}/>
                <Route exact path='/shop' element={<Shop/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
              </Routes>
            </section>
          </div>
    </div>
    </Router>
  );
}

export default App;
