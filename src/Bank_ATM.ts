import userTransaction from "./ATM_User_Info";
import { userBalance } from "./ATM_User_Info";

// check bank machine status
let machineStatus: string = "Working";

if (machineStatus == "Working") {
  console.log("Welcome");
  //   check client cresidentials
  let userID = prompt("Please enter your ID: ")?.toLowerCase();
  if (userID == "client") {
    console.log("ID confirmed");
    let password = prompt("Please enter your password: ");
    if (password == "****") {
      // What client want to do
      console.log(
        "What do you want to do?\n1: Check Balance\n2: Some Transaction"
      );
      let userAnswer = prompt()?.toLowerCase();
      if (userAnswer == "check balance") {
        userBalance();
      } else if (userAnswer == "some transaction") {
        // User selects the transaction type and enters details accordingly
        let transType = prompt(
          "Which transaction would you like to perform? \n1: Deposit\n2: Withdraw"
        )?.toLowerCase();
        // if client want to deposit
        if (transType == "deposit") {
          let userDeposit = prompt("Enter the amount you want to deposit: ");
          console.log(
            `You hav successfully deposited ${userDeposit} to your account`
          );
        }
        // if client want to withdraw
        else if (transType == "withdraw") {
          let userDeposit = prompt("Enter the amount you want to withdraw: ");
          console.log(
            `You have successfully made a withdraw of ${userDeposit} from your account`
          );
        }
      }
    }
  }
  console.log("Thank you for using our services");
}
