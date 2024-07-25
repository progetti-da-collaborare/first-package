const path = require("path")
//const CopyPlugin = require("copy-webpack-plugin");

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    if (env === 'production') {
        config.entry = __dirname + "/src/IndexPackage.js"
  
        config.experiments = { ...config.experiments,
          outputModule: true
        }
  
        config.output = { ...config.output,
          /*
          filename : isEnvProduction
            ? 'dist/main.js'
            : config.output.filename
            */
            path: path.resolve(__dirname, 'build'),
            filename: 'main.mjs',/*
            libraryTarget: 'commonjs2'*/
            library: {
              // do not specify a `name` here
              type: 'module',
            },
        }

        config.externals = {react: 'react'}
     /*
     config.resolve = {...config.resolve, 
      alias: {...config.resolve.alias, 
          'react': path.resolve('./node_modules/react'),
      }
  }*/
  /*
        config.plugins = [...config.plugins, 
          new CopyPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "package.json"),
                to: "dist"
              },
            ],
        })]*/
      }

    return config;
  }