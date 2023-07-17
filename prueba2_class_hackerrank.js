
class Account{
    // Write your code here
   constructor(initialBalance){
       this.initialBalance = initialBalance;       
       
   }
   
   getBalance(){ 
    return this.initialBalance;      
    
   } 
   
      
   credit(amount){
       this.initialBalance = this.initialBalance + amount;
       //return this.initialBalance;
   } 
   
   debit (amount){ 
         
       
       if(this.initialBalance >= amount)
         {
             this.initialBalance = this.initialBalance - amount;
             return true;
         }    
       else {return false;}
   }
   
   
}

module.exports = Account;