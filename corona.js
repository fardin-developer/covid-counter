const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');


request('https://www.worldometers.info/coronavirus/', function (error, response, html) {

    if (error) {
        // Print the error if one occurred
        console.error('error:', error);
    }else {
        
        handlehtml(html);

    }

});

  function handlehtml(html){
    let selTool = cheerio.load(html);
    // console.log(html)
    let contArr = selTool(".maincounter-number"); 
    // console.log(contArr.length);
   



    let total = selTool(contArr[0]).text();
    let deaths = selTool(contArr[1]).text();
    let recover = selTool(contArr[2]).text();

    console.log(chalk.yellow("Total :"+total));
    console.log(chalk.red("Deaths :"+deaths));
    console.log(chalk.green("Recover :"+recover));



    
}



