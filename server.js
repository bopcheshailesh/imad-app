var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : 'Article One | Shailesh Bopche',
        head: 'Article One',
        date: 'August 16, 2017',
        content: `<p>
                        Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.
                    </p>
                    
                    <p>
                        Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.
                    </p>
                    
                    <p>
                        Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.
                    </p>`
    },
    'article-two' : {
        title : 'Article Two | Shailesh Bopche',
        head: 'Article Two',
        date: 'August 17, 2017',
        content: `<p>
                        Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.
                    </p>
                    `
    },
    'article-three' : {
        title : 'Article Three | Shailesh Bopche',
        head: 'Article Three',
        date: 'August 18, 2017',
        content: `<p>
                        This is article three . Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.Content will be added here.
                    </p>`
    }
};

function createtemplate (data){
var title = data.title;
var head = data.head;
var date = data.date;
var content = data.content;
var htmltemplate = `
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale= 1" />
        <link href="/ui/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${head}
            </h3>
            <div>
                ${date} 
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:x',function(req,res){
    //articleName == article-one
    articleName = req.params.x;
    res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
