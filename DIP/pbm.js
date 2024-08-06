//The Dependency Inversion Principle (DIP) is one of the SOLID principles of object-oriented design. 
// It states that high-level modules should not depend on low-level modules; both should depend on 
// abstractions (e.g., interfaces). Furthermore, abstractions should not depend on details; details should
//  depend on abstractions. This principle helps in decoupling the code and making it more flexible and easier to maintain.

// Low-level module: EmailService
class EmailService {
    sendEmail(message) {
      console.log(`Sending email: ${message}`);
    }
  }
  
  // Low-level module: SMSService
  class SMSService {
    sendSMS(message) {
      console.log(`Sending SMS: ${message}`);
    }
  }
  
  // High-level module: NotificationService
  class NotificationService {
    constructor() {
      this.emailService = new EmailService();
      this.smsService = new SMSService();
    }
  
    sendNotification(message, type) {
      if (type === 'email') {
        this.emailService.sendEmail(message);
      } else if (type === 'sms') {
        this.smsService.sendSMS(message);
      }
    }
  }
  
  // Usage
  const notificationService = new NotificationService();
  notificationService.sendNotification("Hello via Email!", "email");
  notificationService.sendNotification("Hello via SMS!", "sms");
  