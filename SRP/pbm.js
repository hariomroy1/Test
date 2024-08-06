//here one class have multiple responsibility, which violates the rule
// one class should have only one well defined responsibility

class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    // Responsibility: Handling user data
    getUsername() {
      return this.username;
    }
  
    setUsername(username) {
      this.username = username;
    }
  
    // Responsibility: Authenticating user
    authenticate(password) {
      return this.password === password;
    }
  
    // Responsibility: Logging user activity
    logActivity(activity) {
      console.log(`${this.username} performed ${activity}`);
    }
  }
  