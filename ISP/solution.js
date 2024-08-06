// Separate interfaces
class Printer {
    print(document) {
      throw new Error("Method 'print' must be implemented.");
    }
  }
  
  class Scanner {
    scan(document) {
      throw new Error("Method 'scan' must be implemented.");
    }
  }
  
  class FaxMachine {
    fax(document) {
      throw new Error("Method 'fax' must be implemented.");
    }
  }
  
  // Class that only prints
  class BasicPrinter extends Printer {
    print(document) {
      console.log(`Printing: ${document}`);
    }
  }
  
  // Class that can print, scan, and fax
  class AdvancedPrinter extends Printer {
    print(document) {
      console.log(`Printing: ${document}`);
    }
  }
  
  class AllInOnePrinter extends AdvancedPrinter {
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
  
  const allInOnePrinter = new AllInOnePrinter();
  allInOnePrinter.scan("Document 2");
  allInOnePrinter.fax("Document 3");
  