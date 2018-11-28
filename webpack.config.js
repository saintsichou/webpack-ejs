const path = require('path');
var glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
/* 多入口配置 */
const files = glob.sync('./src/pages/*/index.js');
const pageEntries = {};
const plugs = [];
const basePath = '';
files.forEach(function(f) {
    const exec = /.*\/(pages\/(.*?)\/index)\.js/.exec(f);
    const name = exec[1]; // pages/question/index这样的文件名
    const fileName = exec[2]; // question这样的文件名

    pageEntries[fileName] = f;

    var plug = new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, './dist/' + fileName + '.html'),
        template: path.resolve(__dirname, './src/pages/' + fileName + '/page.js'),
        chunks: [fileName],
        inject: true
    });
    plugs.push(plug);

});
// console.log(require.resolve('jquery'))
const commonEntrys = {
    // 'jquery':require.resolve('jquery'),
    // 'echarts':require.resolve('echarts')
}
/* 多入口配置 */
const entrys = Object.assign(pageEntries, commonEntrys);
module.exports = {
    entry: entrys,
    // devtool: 'source-map',
    // resolve: {
    //   alias: {
    //       echarts: path.resolve(__dirname, './src/lib/echarts.js'), 
    //       jQuery: path.resolve(__dirname, './src/lib/jquery.min.js'), 
    //   }
    // },
    
    resolve: {  
        alias:{
                layout: path.resolve(__dirname, './src/pages/template')
            }
    },
    externals: {
        '$': 'window.jquery',
        'echarts': 'window.echarts'
    },
    devServer: {
        contentBase: './dist/',
        hot: true,
        compress: false,
        port: 9002,
        host:'0.0.0.0',
        quiet: true
    },
    module: {

        rules: [


        {
            test: /\.css$/,
            use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
        },
        {　　　　　　
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
                loader: 'file-loader',
                options:{
                    name:'[name].[ext]',
                    publicPath:basePath + 'assets/images/',
                    outputPath: 'assets/images/',
                }
            }]　　　　
        },


        {
            test: /\.js$/i,
            use: [{
                loader: 'babel-loader'
            }]
        },
        {
            test: /\.ejs$/i,
            use: [{
                loader: 'ejs-loader'
            }]
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),

        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'common', // 注意不要.js后缀
        //   chunks: ['jquery', 'echarts']
        // }),
        new ExtractTextPlugin("[name].css",{allChunks: true}),
        ...plugs,
        new copyWebpackPlugin([{
            from:__dirname+'/src/assets/mock-data',//打包的静态资源目录地址
            to:'./assets/mock-data' //打包到dist下面的public
        }]),
        new copyWebpackPlugin([{
            from:__dirname+'/src/assets/lib',//打包的静态资源目录地址
            to:'./assets/lib' //打包到dist下面的public
        }]),
        new copyWebpackPlugin([{
            from:__dirname+'/src/assets/images',//打包的静态资源目录地址
            to:'./assets/images' //打包到dist下面的public
        }]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

    ],
    output: {
        filename: '[name].js',
        publicPath: basePath,
        path: path.resolve(__dirname, './dist')
    }
};