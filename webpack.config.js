var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
             test: /\.less$/,
             use: [
               {
                 loader: "style-loader"
               },
               {
                 loader: "css-loader",
                 options: {
                   sourceMap: true,
                   modules: true,
                   localIdentName: "[local]___[hash:base64:5]"
                 }
               },
               {
                 loader: "less-loader"
               }
             ]
           }
        ]
    }
}
