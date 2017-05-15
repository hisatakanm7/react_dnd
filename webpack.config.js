module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    entry: {
        "index": "./Seminar/index.js"
        // 解答
        // "answer": "./Seminar/answer.js"
        // "example": "./Seminar/example.js"
    },
    output: {
        filename: "dist/bundle.js"
    },
};
