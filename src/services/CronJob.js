var articlesLinks = require('./ArticleLinks');
var CronJob = require('cron').CronJob;

var job = new CronJob('*/15 * * * * *', function () {
  articlesLinks();
},null, true, 'America/New_York');

// export default job;