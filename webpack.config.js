module.exports = {
    entry: './src/app.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
};
