const cheerio = require('cheerio');
const request = require('request');
const _ = require('underscore');
const fs = require('fs');
//Define your target URL and HTTP method here

let articlesLinks = function(callback) {
// NYTimes latest news url
  const options = {
    withCredentials: true,
    url: 'http://www.nytimes.com/section/us#latest-panel',
    method: 'GET'
  };

  // Use request to grab the HTML defined in options and return the contents in "body"
  request(options, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      var urls = [];
      var articleContent = [];
      var articleHeadline, data;
      // Load the "body"
      var $ = cheerio.load(body);
      // Select element wrapping links
      var latestNews = $('ol.story-menu');
      // Fetch links
      latestNews.find('li > article > div > a').each(function (index, element) {
        urls.push($(element).attr('href'));
        return index < 4;
      });

      console.log('HERE ARE URLS', urls);
    }
    // Mapping through urls arrays then requesting
    Promise.all(urls.map(function (url) {
      return new Promise(function(resolve, reject) {
        request({url: url, jar: true}, function (err, res, body) {
          if (err) { return reject(err); }
          // Fetching articles content
          var $ = cheerio.load(body);
          var title = $('h1.headline').text();
          var content = $('article.story.theme-main');
          content.find('div > div > p.story-body-text').each(function (index, element) {
            articleContent.push({
              url: url,
              content: ' ' + $(element).text(),
              headline: title
            });
          });
          resolve({articleContent: articleContent, content: content, url: url, title: title});
        });
      });
    }))
    .then(function () {
    // Merge content organizing by data headline, url and content
    articleHeadline = _.groupBy(articleContent, function(item){
      return item.headline;
    });

    data = _.map(articleHeadline, function(item) {
      return {
      headline: item[0].headline,
      url: item[0].url,
      content: _.pluck(item, 'content')
      }
    });
    console.log(data);
    // Write content in JSON format locally
    var dataJSON = JSON.stringify(data, null, 4);
    fs.writeFile("articles.json", dataJSON, function(err) {
      if(err){
        return console.log(err);
      }
      console.log('DATA WRITTEN');
    });
    //console.log(articleContent);
    }).catch(function (err) {
      console.log(err);
    });
  });
};

module.exports = articlesLinks;






