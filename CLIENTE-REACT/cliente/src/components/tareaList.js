import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Tarea = props => {
    return (<tr>
        <td>{props.tarea.id}</td>
        <td>{props.tarea.name}</td>
        <td>{props.tarea.puntos}</td>
        <td>{props.tarea.materia}</td>
        <td>{props.tarea.fechaEntrega}</td>
        <td>{props.tarea.fechaCreacion}</td>
    </tr>)

}
class TareasList extends Component {
    constructor(props) {
        super(props);
        this.state = { tareas: [] };
    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_API)
            .then(response => {
                this.setState({ tareas: response.data.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tareasList() {
        if (this.state.tareas) {
            return this.state.tareas.map(function (currentTarea, i) {
                return <Tarea tarea={currentTarea} key={i} />;
            });
        }

    }
    render() {
        return (

            <div className="container">
                <h2>La lista de las tareas</h2>
                <div>
                    <h3>Tareas List</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Materia</th>
                                <th>Puntos</th>
                                <th>Fecha de Creación</th>
                                <th>Fecha de entrega</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tareasList()}
                        </tbody>
                    </table>
                </div>

            </div>

        );

    }
}

export default TareasList;