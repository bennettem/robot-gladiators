var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //asl player to fight or skip
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose."
  );

  if (promptFight === "skip" || promptFight === "SKIP") {
    //confrim player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes, leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney);
      break;
    }
  }
  // remove enemy's health 
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked" +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    //check enemyHealth

    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while () loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;

    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (flase) ask question again by running fight()
    else {
      fight();
    }
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
};

// fight();
