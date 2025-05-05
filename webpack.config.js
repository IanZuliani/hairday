//using javascript in the node environment, we need to do the import like this
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")//plugin to move files from essets folder to build, dist.

module.exports = {
    target: "web",
    mode: "development",

    //we use the path. solve why in different operating systems the / is done the other way around
    entry: path.resolve(__dirname, "src", "main.js"),//get the input file
    output: {
       filename: "main.js",//name of the file that will be generated after the build
       path: path.resolve(__dirname, "dist"),//folder that will be generated
    },


    //creating a server that monitors changes in the application.
    devServer: {
      static:{
          directory: path.join(__dirname, "dist")
      },
      port: 3000,
      open: true,
      liveReload: true,
        
    },

    plugins: [
        new HtmlWebpackPlugin({//inserting the html files into our folder
            template: path.resolve(__dirname, "index.html"),
            favicon: path.resolve("src", "assets", "scissors.svg"),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: path.resolve(__dirname, "dist", "src", "assets")
                },
            ]
        }),
    ],

    module: {
        rules:[
            {
                test: /\.css$/,//when it is a css file we will use the loaders
                use: ["style-loader", "css-loader"]
            },
            {
                test:/\.js$/,//see all files ending with .js
                exclude: /node_modules/,//ignore node_modules folder
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            }
        ],
    },

}