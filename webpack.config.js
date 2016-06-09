/**
 * Created by jojoldu@zuminternet.com on 2016-06-08.
 */
module.exports = {
    devtool: 'eval-source-map',
    entry : [
        './source/app.js',
    ],
    output:{
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders:[{
            test:/\.jsx?$/,
            loader: 'babel',
            query:
            {
                presets:['react']
            }
        }]
    }
};