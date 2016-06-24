module.exports={
    entry:['./src/Reactjs/App.js'],
    output:{
        path: __dirname,
        filename:'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8081
    },
    resolver:{
      extensions:['','.js','.jsx','es6'],
      modulesDirectories:['node_modules']
    },
    module:{
        loaders:[{
            test:/\.jsx$|\.es6$|\.js$/,
            exclude:/node_modules/,
            loader:'babel',
            query:{
                presets:['es2015','react']
            }
        }]
    }
};

