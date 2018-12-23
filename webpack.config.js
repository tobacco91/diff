var path = require('path');
const webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './demo/index',
  output: {
    publicPath:'/',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer:{
    host: '192.168.0.102',
    contentBase: path.resolve(__dirname, './dist'),
    port:'8080',
    open:true,//自动拉起浏览器
    hot:true,//热加载
    historyApiFallback: true,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },{
        test: /\.less$/,
        exclude: /node_modules/,
        use:['style-loader', 'css-loader', 'less-loader']

      }
    ]
  },
  plugins:[
  //热更新插件
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './dist/index.html'),
      }),
  ]
}