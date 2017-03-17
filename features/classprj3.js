// create BankAccount class
// Allow constructor function to take balence. default to zero if not num
// Deposit   (amount)
//Withdrawal (amount)
// printBalance () you're acoount balenc eis $100.


class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}
    set balance (val) {
        this._balance = val;
        this._balanceupdatedat = new Date();
    }
    get balance () {
       return this._balance;
    }
	deposit (amount) {
		if (typeof amount === 'number'){
             this.balance += amount;
             return true;
		} else {
			console.log('Amount must be a number');
			return false;

		}
	}
    withdrawal (amount) {
    	if (typeof amount === 'number') {
            this.balance -= amount;
            return this.balance;
    	} else {
    		console.log('Amount must be a number');
    		return false;
    	}
    }
    printBalance () {
    	console.log(`your balance is $${this.balance}! Last updated at ${this._balanceupdatedat}`);

    }

}

// savings accounts class that extends bankaccount
//override withdrawal to print messages that you cant
//override deposit to print message call parent deposit method

class SavingsAccount extends BankAccount {
          deposit (amount) {
             if (super.deposit(amount)) {
                console.log(`congrats! you saved $${amount}`);
             }
             
          }
          withdrawal () {
               console.log(`you are nt able to remove funds from your savings account`);


          }
}

var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100);
savingsAccount.printBalance();
savingsAccount.withdrawal(25);
savingsAccount.printBalance();




// var account = new BankAccount(100);
// account.deposit(100);
// account.withdrawal(10);
// account.printBalance();

// var account2 = new BankAccount(200);
// //account2.deposit('andrew');
// //account2.withdrawal(true);
// account2.printBalance();


