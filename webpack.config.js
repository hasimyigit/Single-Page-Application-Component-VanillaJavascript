const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Dışarıya obje gönderiyor
module.exports = {
    //Bu bizim ana js dosyamızı ifade ediyor
    //asyc işlemleri için şart yoksa hata alırız.
    entry: ['babel-polyfill','./src/js/index.js'],
    //Bu kısım ana dosyamızın sıkıştırılmış halinin veren kısım
    output : {
        //Hangi konuma veriyim // path.resolve path birleştirmesi yapıyor bir node module dür 
        path: path.resolve(__dirname,'dist'),
        //Hangi isimde veriyim
        filename: 'js/index.js'
    },
    //dev-server options.
    devServer:{
        //hangi konumda çalışacağı // package.json daki ayar --> "start":"webpack-dev-server --mode development --open"
        contentBase:'./dist'
       
    },
    //html-webpack-plugin için congig ayarı
    plugins: [
        //require('html-webpack-plugin')
        new HtmlWebpackPlugin({
            //buda masterpage oluyor gibi
        filename:'index.html',
        //Bunuda dahil et gibi masterpage mantıgı
        template:'./src/index.html'
    })
],
//Babel ayarı
module: {
    rules: [
      {
          //Sonu .js ile biten REgex
        test: /\.m?js$/,
        //Bu dizi hariç
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
    
}