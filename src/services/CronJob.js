import articlesLinks from './ArticleLinks';
var CronJob = require('cron').CronJob;

var job = new CronJob('* */1 * * * *', function () {
  articlesLinks();
},null, true, 'America/New_York');

export default job;