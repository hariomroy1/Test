// The Interface Segregation Principle (ISP) is another SOLID principle of object-oriented design. 
// It states that clients should not be forced to depend on interfaces they do not use. In other words, 
// an interface should only include methods that are relevant to its implementing classes, and classes 
// should not be required to implement methods they don't need.


// Interface that violates ISP
class MultiFunctionPrinter {
    print(document) {
      throw new Error("Method 'print' must be implemented.");
    }
  
    scan(document) {
      throw new Error("Method 'scan' must be implemented.");
    }
  
    fax(document) {
      throw new Error("Method 'fax' must be implemented.");
    }
  }
  
  // Class that only prints
  class BasicPrinter extends MultiFunctionPrinter {
    print(document) {
      console.log(`Printing: ${document}`);
    }
  
    scan(document) {
      // BasicPrinter cannot scan
    }
  
    fax(document) {
      // BasicPrinter cannot fax
    }
  }
  
  // Class that can print, scan, and fax
  class AdvancedPrinter extends MultiFunctionPrinter {
    print(document) {
      console.log(`Printing: ${document}`);
    }
  
    scan(document) {
      console.log(`Scanning: ${document}`);
    }
  
    fax(document) {
      console.log(`Faxing: ${document}`);
    }
  }
  
  // Usage
  const basicPrinter = new BasicPrinter();
  basicPrinter.print("Document 1");
  
  const advancedPrinter = new AdvancedPrinter();
  advancedPrinter.scan("Document 2");
  advancedPrinter.fax("Document 3");
  