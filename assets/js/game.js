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

    // remove player's health
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
      //leave while() loop is player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};
// fight each enemy-robot
var startGame = function () {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
    //if player is still alive keep fighting
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      //pick new enemy to fight
      var pickedEnemyName = enemyNames[1];
      // reset enemy health
      enemyHealth = 50;
      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // after loop ends
  endGame();
};

//function to end the enitr game
var endGame = function () {
  //if player is still laive, player wins!
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survivde the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("The game has now ended. Let's see how you did!");
  }
  //ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
