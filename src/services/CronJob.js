var articlesLinks = require('./ArticleLinks');
var CronJob = require('./cron');

var job = new CronJob.CronJob('*/120 * * * * *', function () {
  console.log('CronJob Started, performing at each minute');
  articlesLinks();
},null, true, 'America/New_York');

module.exports = job;