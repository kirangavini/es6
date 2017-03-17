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








var account = new BankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printBalance();

var account2 = new BankAccount(200);
//account2.deposit('andrew');
//account2.withdrawal(true);
account2.printBalance();


