const path = require('path');

const clientConfig = {
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    entry: {
        client: './src/client/Client.ts'
    },
    node: {
        __filename: true,
        __dirname: true
    },
    target: "web",
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // 개발 상황에는 캐싱한다.
                test: /\.(ts|js)x?$/, use: [true ? 'babel-loader?cacheDirectory' : 'babel-loader'],
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                test: /\.css|\.scss$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 2500,
        poll: 1000,
    }
};

const serverConfig = {
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    entry: {
        server: './src/server/Server.ts'    
    },
    node: {
        __filename: true,
        __dirname: true
    },
    target: "node",
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // 개발 상황에는 캐싱한다.
                test: /\.(ts|js)x?$/, use: [true ? 'babel-loader?cacheDirectory' : 'babel-loader'],
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                test: /\.css|\.scss$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 2500,
        poll: 1000,
    }
};

module.exports = [clientConfig, serverConfig];