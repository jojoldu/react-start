/**
 * Created by jojoldu@gmail.com on 2016-06-08.
 */
module.exports = {
    entry : [
        './source/App.js'
    ],
    output:{
        path: __dirname+'/public',
        filename: 'bundle.js'
    },
    module: {
        loaders:[{
            test:/\.jsx?$/,
            loader: 'babel',
            query:
            {
                presets:['es2015','react'] //es2015 : es2015 문법 적용
            }
        }]
    }
};