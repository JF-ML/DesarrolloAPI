import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CrearTarea from "./components/crearTarea"
import TareasList from "./components/tareaList"
import BorrarTarea from "./components/borrarTarea"
import TareasListHook from "./components/tareasHook"
import ActualizarTarea from "./components/ActualizarTarea"
class App extends Component {
  render() {

    return (
      <Router>


        <div className="container">
          <h2>Lista de Tareas</h2>
        </div>

        <div>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Tareas App</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Tareas</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/crear" className="nav-link">Create Tarea</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/borrar" className="nav-link">Borrar Tarea</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/hook" className="nav-link">Hook</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/update" className="nav-link">Actualizar</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br />

            <Route exact path="/" component={TareasList} />
            <Route exact path="/hook" component={TareasListHook} />
            <Route exact path="/update" component={ActualizarTarea} />
            <Route exact path="/crear" component={CrearTarea} />
            <Route exact path="/borrar" component={BorrarTarea} />

          </div>
        </div>


      </Router>
    );
  }
}
export default App;
