//using javascript in the node environment, we need to do the import like this
const path = require("path")

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

}