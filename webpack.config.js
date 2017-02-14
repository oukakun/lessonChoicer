var htmlWebpackPlugin = require( "html-webpack-plugin" );
var path = require( "path" );
var distPath = path.join( __dirname, "/dist" );
module.exports = {
    entry: "./src/main.js",
    output: {
        path: distPath,
        filename: "build.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                loader: "babel-loader?presets[]=es2015"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader!autoprefixer-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader!autoprefixer-loader"
            },
            {
                test: /\.(jpg|png|ttf)$/,
                loader: "url-loader?limit=40000"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [new htmlWebpackPlugin( {
        title: "index",
        filename: "index.html",
        template: "index1.html",
        babel: {
            presets: ["es2015"]
        }
    })],

}