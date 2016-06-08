/**
 * Created by jojoldu@zuminternet.com on 2016-06-08.
 */
module.exports = {
    devtool: 'eval-source-map',
    entry : __dirname +'/app/main.js',
    output:{
        path: __dirname + '/public',
        filename: 'bundle.js'
    }
};