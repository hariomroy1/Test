// Abstract class or interface for payment method
class PaymentMethod {
    process(amount) {
      throw new Error("Method 'process' must be implemented.");
    }
  }
  
  // Concrete class for credit card payment
  class CreditCardPayment extends PaymentMethod {
    process(amount) {
      console.log(`Processing credit card payment of ${amount}`);
    }
  }
  
  // Concrete class for PayPal payment
  class PayPalPayment extends PaymentMethod {
    process(amount) {
      console.log(`Processing PayPal payment of ${amount}`);
    }
  }
  
  // PaymentProcessor class that is open for extension but closed for modification
  class PaymentProcessor {
    constructor(paymentMethod) {
      this.paymentMethod = paymentMethod;
    }
  
    processPayment(amount) {
      this.paymentMethod.process(amount);
    }
  }
  
  // Usage
  const creditCardPayment = new CreditCardPayment();
  const payPalPayment = new PayPalPayment();
  
  const paymentProcessor1 = new PaymentProcessor(creditCardPayment);
  paymentProcessor1.processPayment(100); // Processing credit card payment of 100
  
  const paymentProcessor2 = new PaymentProcessor(payPalPayment);
  paymentProcessor2.processPayment(200); // Processing PayPal payment of 200
  