var sourceText;
var referenceText;
var finalPoem = [];
// Immigration speech
var speech1;
// Second Amendment’ speech
var speech2;
// Nomination speech
var speech3;
// National security speech
var speech4;
// Charlotte Convention Center
var speech5;

function preload()
{
    referenceText = loadStrings('neruda.txt');
    speech1Reference = loadStrings('trump/trump1.txt');
    speech2Reference = loadStrings('trump/trump2.txt');
    speech3Reference = loadStrings('trump/trump3.txt');
    speech4Reference = loadStrings('trump/trump4.txt');
    speech5Reference = loadStrings('trump/trump5.txt');
}

function setup() {
  noCanvas();

  // Setup Neruda poems
  referenceText = join(referenceText, " ");
  phrasesNeruda = splitTokens(referenceText, ";.");

  // Setup Speeches
  speech1Reference = join(speech1Reference, " ");
  speech1Final = splitTokens(speech1Reference, ";.:!?");

  speech2Reference = join(speech2Reference, " ");
  speech2Final = splitTokens(speech2Reference, ";.:!?");

  speech3Reference = join(speech3Reference, " ");
  speech3Final = splitTokens(speech3Reference, ";.:!?");

  speech4Reference = join(speech4Reference, " ");
  speech4Final = splitTokens(speech4Reference, ";.:!?");

  speech5Reference = join(speech5Reference, " ");
  speech5Final = splitTokens(speech5Reference, ";.:!?");

  sourceText = select('#source');

  var submit = select("#submit");
  submit.mousePressed(nerudify);

  speech1 = select("#speech1");
  speech1.mousePressed(function functionName()
  {
    sourceText.elt.innerHTML = '';
    speech1.class("list-group-item active");
    speech2.class("list-group-item");
    speech3.class("list-group-item");
    speech4.class("list-group-item");
    speech5.class("list-group-item");
    sourceText.elt.innerHTML = speech1Final;
  });

  speech2 = select("#speech2");
  speech2.mousePressed(function functionName()
  {
    sourceText.elt.innerHTML = '';
    speech1.class("list-group-item");
    speech2.class("list-group-item active");
    speech3.class("list-group-item");
    speech4.class("list-group-item");
    speech5.class("list-group-item");
    sourceText.elt.innerHTML = speech2Final;
  });

  speech3 = select("#speech3");
  speech3.mousePressed(function functionName()
  {
    sourceText.elt.innerHTML = '';
    speech1.class("list-group-item");
    speech2.class("list-group-item");
    speech3.class("list-group-item active");
    speech4.class("list-group-item");
    speech5.class("list-group-item");

    sourceText.elt.innerHTML = speech3Final;
  });

  speech4 = select("#speech4");
  speech4.mousePressed(function functionName()
  {
    sourceText.elt.innerHTML = '';
    speech1.class("list-group-item");
    speech2.class("list-group-item");
    speech3.class("list-group-item");
    speech4.class("list-group-item active");
    speech5.class("list-group-item");

    sourceText.elt.innerHTML = speech4Final;
  });

  speech5 = select("#speech5");
  speech5.mousePressed(function functionName()
  {
    sourceText.elt.innerHTML = '';
    speech1.class("list-group-item");
    speech2.class("list-group-item");
    speech3.class("list-group-item");
    speech4.class("list-group-item");
    speech5.class("list-group-item active");

    sourceText.elt.innerHTML = speech5Final;
  });

  resultContainer = select('#resultContainer');
  warningContainer = select('#warningContainer');

}



function nerudify()
{
  if (sourceText.value() == '')
  {
    resultContainer.class("alert alert-warning");
    resultContainer.elt.innerHTML = 'Please enter some text dude!';
  }
  else
  {
    var phrases = splitTokens(sourceText.value(), ",;.:!?");
    console.log(phrases);

    for (var i = 0; i < phrases.length; i++)
    {
      randomPoemLine = Math.floor(random(phrasesNeruda.length));
      finalPoem[i] = phrases[i] + " " + phrasesNeruda[randomPoemLine];
      finalPoem[i] = finalPoem[i].toLowerCase();
    }

     resultContainer.class("alert alert-info");
     resultContainer.elt.innerHTML = finalPoem;

  }



}
