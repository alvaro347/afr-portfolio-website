// import logo from './img/logo.svg';
import './css/App.css';
import './css/MediaQuery.css'
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import image1 from "./img/image1.png";
import reactLogo from "./img/react.svg";
import headerImg from "./img/headerImg.png";
import htmlLogo from "./img/html2.svg"


const icons = {
  reactIcon: {
    name: "react",
    img: reactLogo,
    link: "#react"
  },
  htmlIcon: {
    name: "html",
    img: htmlLogo,
    link: "#html"
  }
}


const projects = {
  project1: {
    title: "Project 1: A",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    icons: [icons.reactIcon, icons.htmlIcon]
  },
  project2: {
    title: "Project 2: B",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    icons: [icons.reactIcon, icons.htmlIcon],
    keywords: {
      tags: ["web", "server"],
      link: ""
    }
  },
	project3: {
    title: "Project 3: B",
    location: "",
    date: "",
    description: "This is a small description of the card content. This projects it's about this and that. the content an intention was to showcase react skills",
    img: image1,
    icons: [icons.htmlIcon, icons.reactIcon],
    keywords: {
      tags: ["web"],
      link: ""
    }
  }
};


function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage projects={projects} headerImg={headerImg}/>
      <Footer />
    </div>
  );
}

export default App;
