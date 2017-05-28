module.exports = {
    entry: './src/main.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};