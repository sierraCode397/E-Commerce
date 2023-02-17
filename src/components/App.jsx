import React from 'react'
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import "../styles/global.css";

const App = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
}

export default App; //Exporta lo hecho en el archivo con el nombre "App" cuando llamas al archivo