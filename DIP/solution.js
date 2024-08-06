// Abstraction: Notification
class Notification {
    send(message) {
      throw new Error("Method 'send' must be implemented.");
    }
  }
  
  // Low-level module: EmailService
  class EmailService extends Notification {
    send(message) {
      console.log(`Sending email: ${message}`);
    }
  }
  
  // Low-level module: SMSService
  class SMSService extends Notification {
    send(message) {
      console.log(`Sending SMS: ${message}`);
    }
  }
  
  // High-level module: NotificationService
  class NotificationService {
    constructor(notification) {
      this.notification = notification;
    }
  
    sendNotification(message) {
      this.notification.send(message);
    }
  }
  
  // Usage
  const emailService = new EmailService();
  const smsService = new SMSService();
  
  const emailNotification = new NotificationService(emailService);
  emailNotification.sendNotification("Hello via Email!"); // Sending email: Hello via Email!
  
  const smsNotification = new NotificationService(smsService);
  smsNotification.sendNotification("Hello via SMS!"); // Sending SMS: Hello via SMS!
  