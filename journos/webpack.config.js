import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InterpolateHtmlPlugin from 'interpolate-html-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }, {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
<<<<<<< HEAD
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') }),
=======
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
>>>>>>> 879f1b8a08fa874e6314fe0491726a17804c61ae
        new InterpolateHtmlPlugin({
            PUBLIC_URL: '/public'
        }),
        new CopyWebpackPlugin(
<<<<<<< HEAD
            ['src/manifest.webmanifest'],
            { ignore: ['.DS_Store'] })
    ]
};
=======
            [ {
                from: 'src/manifest.webmanifest',
                to: 'public/manifest.json',
                ignore: ['.DS_Store']
            }]
        )
    ]
};
>>>>>>> 879f1b8a08fa874e6314fe0491726a17804c61ae
