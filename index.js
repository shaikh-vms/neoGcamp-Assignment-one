var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

//chalk themes
var headBg = chalk.green.bold;
var titleBg = chalk.cyan;
var questionTheme = chalk.bold.magenta.italic;
var questionNoTheme = chalk.bold.bgMagenta.white;
var newLineTheme = chalk.cyan;
var warning = chalk.red;
var success = chalk.green;
var scoreTheme = chalk.keyword('orange');

//for ease of use
function print(data){
  console.log(data);
}
function newLine(){
  print(newLineTheme("-------------------------------------"));
}
function printScore(score){
  print(scoreTheme("Score: "+ score));
  newLine();
}

//array of questions object
var questionArray = [
  {
    question: "____and Sachin Tendulkar are Only Indian MVPs in IPL ?\n \tA. M.S. Dhoni\n\tB. Virat Kohli \n\tC. Rohit Sharma\n\tD. Y. Chahal",
    answer: "B",
  },
  {
    question: "____is only player to have involved in 3 double century in IPL?\n \tA. Chris Gayle\n\tB. AB de Villiers\n\tC. Virat Kohli\n\tD. M.S.Dhoni",
    answer: "C",
  },
  {
    question: "____is first player to play 200 or more matches in IPL?\n \tA. Shane Watson\n\tB. Dinesh Karthik\n\tC. Virat Kohli\n\tD. M.S.Dhoni",
    answer: "D",
  },
  {
    question: "Best wicketkeeper-bowler combo in IPL?\n \tA. Wriddhiman-Sandeep Shaha\n\tB. Rishabh P-K.Rabada\n\tC. Naman Ojha-B.Kumar\n\tD. M.S.Dhoni-Dwayne Bravo",
    answer: "B",
  },
  {
    question: "Team that registered lowest score after playing 20 overs in history of IPL?\n \tA. KIXP\n\tB. CSK\n\tC. KKR\n\tD. SRH",
    answer: "C",
  },
];

//scoreboard objects
var leaderboard = [{
  Rank : 1,
  Name : "vasim",
  Score : 20,
},
{
  Rank : 2,
  Name : "Aakash",
  Score : 20,
},
];
 
//process quesitons according to user answer
function processQuestion(qNumber,question, answer){
  var userAnswer = readLineSync.question(questionNoTheme("QUESTION-"+qNumber+":")+"\n"+questionTheme(question+"\n>>> "));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    print(success("yess...! That was true answer"));
    score = score + 4;
    printScore(score);
  }else{
    print(warning("Sorry...! Wrong answer"));
    score = score - 2;
    printScore(score);
  }
}

//start point
print(headBg('          IPL-FACTS QUIZ           \n'));
print(titleBg.inverse.bold("        >>>>> RULES <<<<<<<        "));
print(titleBg.italic("1. There are total 5 questions \n"+
                      "2. All questions are compulsory\n"+
                      "3. Right answer will be awarded with 4 points\n"+
                      "4. And each wrong answer will reduce 2 from whole score\n"));
print(titleBg.inverse.bold("        >>>>> LEADERBOARD <<<<<<<   "));
console.table(leaderboard);
newLine();

//ask username(Input)
var userName= readLineSync.question(questionTheme("Let's start....! What's your name ?\n "));
print(chalk.green(" Welcome..."+ userName)+"\n Lets's check how much you know IPL"+chalk.green.italic("\n BEST OF LUCK ! "))

//processing
for(var i=0;i< questionArray.length; i++){
  let qNumber = i+1;
  currentObject = questionArray[i];
  processQuestion(qNumber,currentObject.question, currentObject.answer);
}

//output
print(titleBg.inverse.bold("        >>>>> RESULTS <<<<<<<        \n\t")+titleBg.italic("You Got: ")+score+"\n");
print(warning.inverse.bold("***NOTE \n\t")+warning.italic("Send screenshot with name if you have hit any of the leader on 8484893082.\n I will update the leaderboard"));






