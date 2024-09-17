var path = require('path');

module.exports = {
   entry: {
      app: './src/main.tsx'
   },
   output: {
      path: path.resolve(__dirname, './bin/dist'),
      filename: 'app.js'
   },
   mode: 'development',
   resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: {
               loader: 'ts-loader'
            },
            exclude: /node_modules/,
         },
         {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            include: path.resolve(__dirname, 'src'),
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
      ]
   }
};