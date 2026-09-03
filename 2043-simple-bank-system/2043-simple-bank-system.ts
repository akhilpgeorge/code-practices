class Bank {
    private bankBalance: number[];
    constructor(balance: number[]) {
        this.bankBalance = balance;
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if(((account1 < 1 || account1 > this.bankBalance.length) || (account2 < 1 || account2 > this.bankBalance.length) || this.bankBalance[account1-1] < money)){
            return false;
        }
        this.bankBalance[account1-1] -= money;
        this.bankBalance[account2-1] += money;
        return true;
    }

    deposit(account: number, money: number): boolean {
        if(account < 1 || account > this.bankBalance.length || money < 0){
            return false;
        }
        this.bankBalance[account-1] += money;
        return true;
    }

    withdraw(account: number, money: number): boolean {
        if(account < 1 ||
        account > this.bankBalance.length || money > this.bankBalance[account-1]){
            return false;
        }

        this.bankBalance[account-1] -= money;
        return true;
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */