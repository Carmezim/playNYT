var articlesLinks = require('./ArticleLinks');
var CronJob = require('cron').CronJob;

var job = new CronJob('*/1200 * * * * *', function () {
  console.log('CronJob Started, performing at each 20 minutes');
  articlesLinks();
},null, true, 'America/New_York');

module.exports = job;