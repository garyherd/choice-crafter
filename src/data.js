import uuid from 'uuid';

const dbSeed = [
  {
    decisionId: uuid.v4(),
    uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', 
    decisionShort: "Which job should I take?",
    decisionLong: "Planning to take time off from college to help relative recover from a serious illness",
    objectives: [
      {
        id: uuid.v4(), 
        title: "Monthly Salary", 
        description: "", 
        scale: "Continuous",
        minMax: "Maximize",
        unit: "$"
      },
      {
        id: uuid.v4(), 
        title: "Flexibility", 
        description: "need to able to deal with emergencies",
        scale: "H/M/L",
        minMax: "Maximize",
        unit: ""
      },
      {
        id: uuid.v4(), 
        title: "Business Skills Development", 
        description: "gain some experience that will useful when I return school", 
        scale: "H/M/L",
        minMax: "Maximize",
        unit: ""
      },
      {
        id: uuid.v4(), 
        title: "Annual vacation days", 
        description: "", 
        scale: "Continous",
        minMax: "Maximize",
        unit: "days"
      },
      {
        id: uuid.v4(), 
        title: "Benefits", 
        description: "", 
        scale: "H/M/L",
        minMax: "Maximize",
        unit: ""
      },
      {
        id: uuid.v4(), 
        title: "Enjoyment",
        description: "", 
        scale: "H/M/L",
        minMax: "Maximize",
        unit: ""
      }
    ],
    alternatives: [
      {id: uuid.v4(), title: "Job A", description: ""},
      {id: uuid.v4(), title: "Job B", description: ""},
      {id: uuid.v4(), title: "Job C", description: ""},
      {id: uuid.v4(), title: "Job D", description: ""},
      {id: uuid.v4(), title: "Job E", description: ""},
    ],
    // consequences: [
    //   {objId: 0, altId: 0, title: 2000, description: ""},
    //   {objId: 0, altId: 1, title: 2400, description: ""},
    //   {objId: 0, altId: 2, title: 1800, description: ""},
    //   {objId: 0, altId: 3, title: 1900, description: ""},
    //   {objId: 0, altId: 4, title: 2200, description: ""},
    //   {objId: 1, altId: 0, title: "moderate", description: ""},
    //   {objId: 1, altId: 1, title: "low", description: ""},
    //   {objId: 1, altId: 2, title: "high", description: ""},
    //   {objId: 1, altId: 3, title: "moderate", description: ""},
    //   {objId: 1, altId: 4, title: "none", description: ""},
    //   {objId: 2, altId: 0, title: "computer", description: ""},
    //   {objId: 2, altId: 1, title: "people management, computer", description: ""},
    //   {objId: 2, altId: 2, title: "operations, computer", description: ""},
    //   {objId: 2, altId: 3, title: "organization", description: ""},
    //   {objId: 2, altId: 4, title: "time management, multitasking", description: ""}, 
    //   {objId: 3, altId: 0, title: 14, description: ""},
    //   {objId: 3, altId: 1, title: 12, description: ""},
    //   {objId: 3, altId: 2, title: 10, description: ""},
    //   {objId: 3, altId: 3, title: 15, description: ""},
    //   {objId: 3, altId: 4, title: 12, description: ""},   
    //   {objId: 4, altId: 0, title: "health, dental, retirement", description: ""},
    //   {objId: 4, altId: 1, title: "health, dental", description: ""},
    //   {objId: 4, altId: 2, title: "health", description: ""},
    //   {objId: 4, altId: 3, title: "health, retirement", description: ""},
    //   {objId: 4, altId: 4, title: "health, dental", description: ""}, 
    //   {objId: 5, altId: 0, title: "great", description: ""},
    //   {objId: 5, altId: 1, title: "good", description: ""},
    //   {objId: 5, altId: 2, title: "good", description: ""},
    //   {objId: 5, altId: 3, title: "great", description: ""},
    //   {objId: 5, altId: 4, title: "boring", description: ""},                           
    // ],
    isActive: true,
    createdDate: "3/10/2017",
  },
  {
    decisionId: uuid.v4(),
    uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2',
    decisionShort: "This is another decision"
  },
    {
    decisionId: uuid.v4(),
    uid: 'userNotLoggedIn',
    decisionShort: "should I be an astronaut"
  }
];

const DECISIONS_Arr = [
  {
    decisionId: uuid.v4(),
    uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', 
    decisionShort: "Which job should I take?",
    decisionLong: "Planning to take time off from college to help relative recover from a serious illness",
    objectives: [
      {
        id: uuid.v4(), 
        title: "Monthly Salary", 
        description: "", 
        scale: "Continuous",
        minMax: "Maximize",
        unit: "$",
        enabled: true
      },
      {
        id: uuid.v4(), 
        title: "Flexibility", 
        description: "need to able to deal with emergencies",
        scale: "H/M/L",
        minMax: "Maximize",
        unit: "n/a",
        enabled: true
      },
      {
        id: uuid.v4(), 
        title: "Business Skills Development", 
        description: "gain some experience that will useful when I return school", 
        scale: "H/M/L",
        minMax: "Maximize",
        unit: "n/a",
        enabled: true
      },
      {
        id: uuid.v4(), 
        title: "Annual vacation days", 
        description: "", 
        scale: "Continous",
        minMax: "Maximize",
        unit: "days",
        enabled: true
      },
      {
        id: uuid.v4(), 
        title: "Benefits", 
        description: "", 
        scale: "H/M/L",
        minMax: "Maximize",
        unit: "n/a",
        enabled: true
      },
      {
        id: uuid.v4(), 
        title: "Enjoyment",
        description: "", 
        scale: "H/M/L",
        minMax: "Maximize",
        unit: "n/a",
        enabled: true
      }
    ],
    alternatives: [
      {id: uuid.v4(), title: "Job A", description: "", enabled: true},
      {id: uuid.v4(), title: "Job B", description: "", enabled: true},
      {id: uuid.v4(), title: "Job C", description: "", enabled: true},
      {id: uuid.v4(), title: "Job D", description: "", enabled: true},
      {id: uuid.v4(), title: "Job E", description: "", enabled: true},
    ],
    consequences: [
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job A", score: 2000, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job B", score: 2400, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job C", score: 1800, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job D", score: 1900, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job E", score: 2200, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job A", score: "moderate", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job B", score: "low", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job C", score: "high", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job D", score: "moderate", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job E", score: "none", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job A", score: "computer", description: "", isActive: true },
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job B", score: "people management, computer", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job C", score: "operations, computer", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job D", score: "organiztion", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job E", score: "time management, multitasking", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job F", score: "(required)", description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job A", score: 14, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job B", score: 12, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job C", score: 10, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job D", score: 15, description: "", isActive: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job E", score: 12, description: "", isActive: true},  
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job A", score: "health, dental, retirement", description: "", isActive: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job B", score: "health, dental", description: "", isActive: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job C", score: "health", description: "", isActive: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job D", score: "health, retirement", description: "", isActive: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job E", score: "health, dental", description: "", isActive: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job A", score: "great", description: "", isActive: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job B", score: "good", description: "", isActive: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job C", score: "good", description: "", isActive: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job D", score: "great", description: "", isActive: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job E", score: "boring", description: "", isActive: true},                            
    ],
    isActive: true,
    createdDate: "3/10/2017",
  },
  {
    decisionId: uuid.v4(),
    uid: '4', 
    decisionShort: "Which job should I take?",
    decisionLong: "Planning to take time off from college to help relative recover from a serious illness",
    objectives: [
      {id: 0, title: "Monthly Salary", description: ""},
      {id: 1, title: "Flexibility", description: "need to able to deal with emergencies"},
      {id: 2, title: "Business Skills Development", description: "gain some experience that will useful when I return school"},
      {id: 3, title: "Annual vacation days", description: ""},
      {id: 4, title: "Benefits", description: ""},
      {id: 5, title: "Enjoyment", description: ""}
    ],
    alternatives: [
      {id: 0, title: "Job A", description: ""},
      {id: 1, title: "Job B", description: ""},
      {id: 2, title: "Job C", description: ""},
      {id: 3, title: "Job D", description: ""},
      {id: 4, title: "Job E", description: ""},
    ],
    consequences: [
      {objId: 0, altId: 0, title: 2000, description: ""},
      {objId: 0, altId: 1, title: 2400, description: ""},
      {objId: 0, altId: 2, title: 1800, description: ""},
      {objId: 0, altId: 3, title: 1900, description: ""},
      {objId: 0, altId: 4, title: 2200, description: ""},
      {objId: 1, altId: 0, title: "moderate", description: ""},
      {objId: 1, altId: 1, title: "low", description: ""},
      {objId: 1, altId: 2, title: "high", description: ""},
      {objId: 1, altId: 3, title: "moderate", description: ""},
      {objId: 1, altId: 4, title: "none", description: ""},
      {objId: 2, altId: 0, title: "computer", description: ""},
      {objId: 2, altId: 1, title: "people management, computer", description: ""},
      {objId: 2, altId: 2, title: "operations, computer", description: ""},
      {objId: 2, altId: 3, title: "organization", description: ""},
      {objId: 2, altId: 4, title: "time management, multitasking", description: ""}, 
      {objId: 3, altId: 0, title: 14, description: ""},
      {objId: 3, altId: 1, title: 12, description: ""},
      {objId: 3, altId: 2, title: 10, description: ""},
      {objId: 3, altId: 3, title: 15, description: ""},
      {objId: 3, altId: 4, title: 12, description: ""},   
      {objId: 4, altId: 0, title: "health, dental, retirement", description: ""},
      {objId: 4, altId: 1, title: "health, dental", description: ""},
      {objId: 4, altId: 2, title: "health", description: ""},
      {objId: 4, altId: 3, title: "health, retirement", description: ""},
      {objId: 4, altId: 4, title: "health, dental", description: ""}, 
      {objId: 5, altId: 0, title: "great", description: ""},
      {objId: 5, altId: 1, title: "good", description: ""},
      {objId: 5, altId: 2, title: "good", description: ""},
      {objId: 5, altId: 3, title: "great", description: ""},
      {objId: 5, altId: 4, title: "boring", description: ""},                           
    ],
    isActive: true,
    createdDate: "3/10/2017",
  },
    {
    decisionId: uuid.v4(),
    uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2', 
    decisionShort: "Should I get a tatoo?",
    decisionLong: "Just filling up space, and for something reason, this popped in my head",
    objectives: [

    ],
    alternatives: [
    ],
    consequences: [
                      
    ],
    isActive: true,
    createdDate: "5/16/2017",
  },
]

var decisionsDB = (function() {
  var localDB = {}
  var datastore = null;

  /**
   * Open a connection to the datastore
   */

  localDB.open = (callback) => {
    // Database version
    var version = 1;

    // Open a connection to the datastore.
    var request = indexedDB.open('decisions', version);

    // Handle datastore upgrades
    request.onupgradeneeded = (event) => {
      var db = event.target.result;

      event.target.transaction.onerror = localDB.onerror;

      // Delete the old datastore.
      if (db.objectStoreNames.contains('decisions')) {
        db.deleteObjectStore('decisions');
      }

      // Create a new datastore
      var store = db.createObjectStore('decisions', {keyPath: "decisionId", autoIncrement:false});
      store.createIndex("userDecisions", "uid", { unique: false });
    };

    // Handle successful datastore access.
    request.onsuccess = (event) => {
      // Get a reference to the DB.
      datastore = event.target.result;

      // Execute the callback.
      callback();
    };

    // Handle errors when opening the datastore.
    request.onerror = localDB.onerror;
  }
   // TODO: Add methods for interacting with the database here.

  localDB.getDecisionsByUser = (userId, callback) => {
    var db = datastore;
    var transaction = db.transaction('decisions', 'readwrite');
    var objStore = transaction.objectStore('decisions');
    var index = objStore.index('userDecisions');

    var keyRange = IDBKeyRange.only('Fg7D7hAan5QHE3jcdo6n64QYS4a2');
    var cursorRequest = index.openCursor(keyRange);

    var decisions = [];

    transaction.oncomplete = (event) => {
      //Execute the callback function.
      callback(decisions);
    };

    cursorRequest.onsuccess = (event) => {
      var result = event.target.result;

      if (!!result == false) {
        return;
      }

      decisions.push(result.value);
      result.continue();
    };

    cursorRequest.onerror = localDB.onerror;
  };

  

  // Export the localDB object
  return localDB;
}());

function refreshDecisions() {
  decisionsDB.getDecisionsByUser("abc", (decisions) => {
  });
}




  // Start a transaction and make a request to do some database operation, like adding or retrieving data.
  // Wait for the operation to complete by listening to the right kind of DOM event.
  // Do something with the results (which can be found on the request object).

export {DECISIONS_Arr, decisionsDB, refreshDecisions };