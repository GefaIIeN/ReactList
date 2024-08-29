var path = require('path');

module.exports = {
   entry: {
      app: './src/main.js'
   },
   output: {
      path: path.resolve(__dirname, './bin/dist'),
      filename: 'app.js'
   },
   mode:'development',
   module: {
      rules: [
         {
            test:/\.(js|jsx)$/,
            exclude: /(node_modules)/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader'
            }
         },
         { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
      ]
   }
};