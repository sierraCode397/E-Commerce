const path = require("path");//Le permite saber donde esta ubicado este proyecto donde se este utilizando
const HtmlWebpackPlugin = require("html-webpack-plugin");

import('webpack').Configuration; //Auto completado

module.exports = { 
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },  //TODO ESTO ES PARA PODER TRABAJAR DE FORMA LOCAL Y CON LOS ARCHIVOS JS, JSX, HTML. LOS "LOADERS" PERIMITEN EL USO LOCAL DE BABEL Y HTML 
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),  //ESTO FACILITA EL TRABAJO EN HTML
    ]
}