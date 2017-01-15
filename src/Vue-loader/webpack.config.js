module.exports = {
    // 入口
    entry:'./main.js',
    // 出口
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        // 配置loader
        loaders:[
            {test:/\.vue$/, loader:'vue'},
			{test:/\.js$/, loader:'babel', exclude:/node_modules/}
        ]
    },
    // 配置babel
    babel:{
        presets:['es2015'],
		plugins:['transform-runtime']
    }
};