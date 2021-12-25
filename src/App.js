import './App.css';
import Header from "./Header/header";
import Main from "./Main/main";
import Skills from "./Skills/skills";
import Projects from "./MyProjects/projects";
import Contacts from "./Contacts/contacts";
import RemoveWork from "./RemoveWork/removeWork";
import Footer from "./Footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoveWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
