import './styles/App.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Todo from "./content/Todo";

function App() {
    return (
        <div className="App">
            <Header/>
            <Todo />
            <Footer/>
        </div>
    );
}

export default App;
