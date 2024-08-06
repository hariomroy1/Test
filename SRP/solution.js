//Here refactor the code and give each class has only one responsiblity


// Class responsible for handling user data
class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getUsername() {
      return this.username;
    }
  
    setUsername(username) {
      this.username = username;
    }
  }
  
  // Class responsible for authenticating users
  class Authenticator {
    authenticate(user, password) {
      return user.password === password;
    }
  }
  
  // Class responsible for logging user activities
  class ActivityLogger {
    logActivity(user, activity) {
      console.log(`${user.getUsername()} performed ${activity}`);
    }
  }
  
  // Usage
  const user = new User('john_doe', 'securepassword');
  const authenticator = new Authenticator();
  const activityLogger = new ActivityLogger();
  
  if (authenticator.authenticate(user, 'securepassword')) {
    console.log('Authentication successful!');
    activityLogger.logActivity(user, 'Logged in');
  } else {
    console.log('Authentication failed!');
  }
  