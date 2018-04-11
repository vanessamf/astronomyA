var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function(req, res, next) {
	req.url = '/index.html';
	next();
});

app.use(router);

var astronomyList = require('./src/mock/astro/all.json') //加载本地数据文件
var astronomyDetail = require('./src/mock/astro/allDetail.json')

var apiRoutes = express.Router();
app.use('/api', apiRoutes) //通过路由请求数据

app.get('/api/astronomyList', (req, res) => {
		res.json({
			errno: 0,
			data: astronomyList
		})
	}),
	app.get('/api/astronomyDetail', (req, res) => {
		res.json({
			errno: 0,
			data: astronomyDetail
		})
	})

//app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function(err) {
	if(err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});