// here in this scenarion 
// This is open for extension but closed for modifiction


//here this class violating the principle 
//because it is open for extension and it add paypal payment mode 
//which is not present initially

class PaymentProcessor {
    processPayment(paymentType, amount) {
      if (paymentType === 'creditCard') {
        this.processCreditCardPayment(amount);
      } else if (paymentType === 'paypal') {
        this.processPayPalPayment(amount);
      }
    }
  
    processCreditCardPayment(amount) {
      console.log(`Processing credit card payment of ${amount}`);
    }
  
    processPayPalPayment(amount) {
      console.log(`Processing PayPal payment of ${amount}`);
    }
  }
  
  // Usage
  const paymentProcessor = new PaymentProcessor();
  paymentProcessor.processPayment('creditCard', 100); // Processing credit card payment of 100
  paymentProcessor.processPayment('paypal', 200); // Processing PayPal payment of 200
  