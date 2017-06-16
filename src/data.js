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
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job A", score: 2000, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job B", score: 2400, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job C", score: 1800, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job D", score: 1900, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job E", score: 2200, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job A", score: "moderate", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job B", score: "low", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job C", score: "high", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job D", score: "moderate", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job E", score: "none", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job A", score: "computer", description: "", isActive: true, isInitial: true },
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job B", score: "people management, computer", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job C", score: "operations, computer", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job D", score: "organiztion", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job E", score: "time management, multitasking", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job F", score: "(required)", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job A", score: 14, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job B", score: 12, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job C", score: 10, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job D", score: 15, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job E", score: 12, description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job A", score: "health, dental, retirement", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job B", score: "health, dental", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job C", score: "health", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job D", score: "health, retirement", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job E", score: "health, dental", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job A", score: "great", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job B", score: "good", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job C", score: "good", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job D", score: "great", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job E", score: "boring", description: "", isActive: true, isInitial: true},                            
    ],
    isActive: true,
    createdDate: "3/10/2017",
  },
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
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job A", score: 2000, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job B", score: 2400, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job C", score: 1800, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job D", score: 1900, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Monthly Salary", altTitle: "Job E", score: 2200, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job A", score: "moderate", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job B", score: "low", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job C", score: "high", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job D", score: "moderate", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Flexibility", altTitle: "Job E", score: "none", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job A", score: "computer", description: "", isActive: true, isInitial: true },
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job B", score: "people management, computer", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job C", score: "operations, computer", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job D", score: "organiztion", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job E", score: "time management, multitasking", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Business Skills Development", altTitle: "Job F", score: "(required)", description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job A", score: 14, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job B", score: 12, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job C", score: 10, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job D", score: 15, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job E", score: 12, description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job A", score: "health, dental, retirement", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job B", score: "health, dental", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job C", score: "health", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job D", score: "health, retirement", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job E", score: "health, dental", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job A", score: "great", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job B", score: "good", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job C", score: "good", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job D", score: "great", description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Enjoyment", altTitle: "Job E", score: "boring", description: "", isActive: true, isInitial: true},                            
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

// new version of db
let choiceCrafterDb = {};
choiceCrafterDb.datastore = null;

choiceCrafterDb.open = (callback) => {
  const version = 1;
  const request = indexedDB.open("ChoiceCrafterDatabase", version);

  request.onupgradeneeded = (event) => { 
    let db = event.target.result;
    event.target.transaction.onerror = choiceCrafterDb.onerror;

    if (db.objectStoreNames.contains('decisions')) {
      db.deleteObjectStore('decisions');
    }

    const store = db.createObjectStore('decisions', {keyPath: "decisionId"});
  };

  request.onsuccess = (event) => {
    choiceCrafterDb.datastore = event.target.result;
    callback();
  };

  request.onerror = choiceCrafterDb.onerror;
};

choiceCrafterDb.fetchDecisions = (callback) => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readwrite');
  const objStore = transaction.objectStore('decisions');

  const cursorRequest = objStore.openCursor();

  let decisions = [];

  transaction.oncomplete = (event) => {
    callback(decisions);
  };

  cursorRequest.onsuccess = event => {
    const result = event.target.result;

    if (!!result == false) {
      return;
    }

    decisions.push(result.value);

    result.continue();
  };

  cursorRequest.onerror = choiceCrafterDb.onerror;

}

choiceCrafterDb.loadExampleDecision = callback => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readwrite');
  const objStore = transaction.objectStore('decisions');
  const request = objStore.add(dbSeed[0]);

  request.onsuccess = event => {
    callback()
  }

  request.onerror = choiceCrafterDb.onerror;
}

choiceCrafterDb.getRecordCount = callback => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readonly');
  const objStore = transaction.objectStore('decisions');
  const request = objStore.count();

  request.onsuccess = event => {
    callback(request.result);
  };
};

choiceCrafterDb.updateProblem = (decisionId, newShortDesc, newLongDesc, callback) => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readwrite');
  const objStore = transaction.objectStore('decisions');
  const getRequest = objStore.get(decisionId);

  getRequest.onsuccess = event => {
    // const data = getRequest.result;
    const data = event.target.result;

    if (newShortDesc) {
      data.decisionShort = newShortDesc;
    }

    if (newLongDesc) {
      data.decisionLong = newLongDesc;
    }

    const putRequest = objStore.put(data);
    putRequest.onsuccess = event => {
      callback();
    };
  };
};

choiceCrafterDb.updateObjective = (decisionId, objectiveId, newItem, callback) => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readwrite');
  const objStore = transaction.objectStore('decisions');
  const getRequest = objStore.get(decisionId);

  getRequest.onsuccess = event => {
    const decision = event.target.result;
    const targetObjectIndex = decision.objectives.findIndex(objective => objective.id === objectiveId);

    if (newItem) {
      decision.objectives[targetObjectIndex]["enabled"] = true;
      const key = Object.keys(newItem)[0];
      decision.objectives[targetObjectIndex][key] = newItem[key];
    };

    const putRequest = objStore.put(decision);
    putRequest.onsuccess = event => {
      callback();
    };
  }
}

choiceCrafterDb.addObjective = (decisionId, newObjective, createNewConsequences, callback) => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readwrite');
  const objStore = transaction.objectStore('decisions');
  const getRequest = objStore.get(decisionId);

  getRequest.onsuccess = event => {

    const decision = getRequest.result;

    newObjective["enabled"] = true;
    newObjective.id = uuid.v4();
    newObjective.scale = "(required)";
    newObjective.minMax = "(required)";
    newObjective.unit = "(required)";

    decision.objectives.push(newObjective);

    const newObjConsequences = createNewConsequences(newObjective.title, decision.alternatives, "objective");
    const newDecisionConsequences = decision.consequences.concat(newObjConsequences);
    decision.consequences = newDecisionConsequences;

    const putRequest = objStore.put(decision);
    putRequest.onsuccess = event => {
      callback();
    }
  };
}

choiceCrafterDb.removeObjective = (decisionId, objectiveId, callback) => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readwrite');
  const objStore = transaction.objectStore('decisions');
  const getRequest = objStore.get(decisionId);

  getRequest.onsuccess = event => {
    const decision = getRequest.result;
    
    decision.objectives = decision.objectives.filter(objective => objective.id !== objectiveId);

    const putRequest = objStore.put(decision);

    putRequest.onsuccess = event => {
      callback();
    };
  }

}

// choiceCrafterDb.updateAlternative = (decisionId, alternativeId, newItem, callback) => {
//   const db = choiceCrafterDb.datastore;
//   const transaction = db.transaction(['decisions'], 'readwrite');
//   const objStore = transaction.objectStore('decisions');
//   const getRequest = objStore.get(decisionId);

//   getRequest.onsuccess = event => {
//     const decision = event.target.result;

//     const alternativeIndex = decision.alternatives.findIndex(alternative => alternative.id === alternativeId);

//     if (newItem) {
//       decision.alternatives[alternativeIndex]["enabled"] = true;
//       const key = Object.keys(newItem)[0];
//       decision.alternatives[alternativeIndex][key] = newItem[key];
//     };
//     const putRequest = objStore.put(decision);
//     putRequest.onsuccess = event => {
//       callback();
//     };
//   }
// }

// choiceCrafterDb.addAlternative = (decisionId, newAlternative, createNewConsequences, callback) => {
//   const db = choiceCrafterDb.datastore;
//   const transaction = db.transaction(['decisions'], 'readwrite');
//   const objStore = transaction.objectStore('decisions');
//   const getRequest = objStore.get(decisionId);

//   getRequest.onsuccess = event => {

//     const decision = event.target.result;

//     newAlternative["enabled"] = true;

//     decision.alternatives.push(newAlternative);

//     const newObjConsequences = createNewConsequences(newAlternative.title, decision.objectives, "alternative");
//     const newDecisionConsequences = decision.consequences.concat(newObjConsequences);
//     decision.consequences = newDecisionConsequences;

//     const putRequest = objStore.put(decision);
//     putRequest.onsuccess = event => {
//       callback();
//     }
//   };
// }

// choiceCrafterDb.removeAlternative = (decisionId, alternativeId, callback) => {
//   const db = choiceCrafterDb.datastore;
//   const transaction = db.transaction(['decisions'], 'readwrite');
//   const objStore = transaction.objectStore('decisions');
//   const getRequest = objStore.get(decisionId);

//   getRequest.onsuccess = event => {
//     const decision = getRequest.result;

//     decision.alternatives = decision.alternatives.filter(alternative => alternative.id !== alternativeId);

//     const putRequest = objStore.put(decision);

//     putRequest.onsuccess = event => {
//       callback();
//     };
//   }
// }

// choiceCrafterDb.updateConsequence = (decisionId, consequenceId, newItem, callback) => {
//   const db = choiceCrafterDb.datastore;
//   const transaction = db.transaction(['decisions'], 'readwrite');
//   const objStore = transaction.objectStore('decisions');
//   const getRequest = objStore.get(decisionId);

//   getRequest.onsuccess = event => {
//     const decision = event.target.result;
//     const consequenceIndex = decision.consequences.findIndex(consequence => (consequence.id === consequenceId && consequence.isActive === true));
    
//     if (newItem) {
//       const key = Object.keys(newItem)[0];
//       decision.consequences[consequenceIndex][key] = newItem[key];
//     };

//     const putRequest = objStore.put(decision);
//     putRequest.onsuccess = event => {
//       callback();
//     }
//   }
// }

// choiceCrafterDb.addVirtualConsequence = (decisionId, newConsequence, callback) => {
//   const db = choiceCrafterDb.datastore;
//   const transaction = db.transaction(['decisions'], 'readwrite');
//   const objStore = transaction.objectStore('decisions');
//   const getRequest = objStore.get(decisionId);

//   getRequest.onsuccess = event => {
//     const decision = event.target.result;

//     newConsequence["isActive"] = true;
//     newConsequence.id = uuid.v4();

//     decision.consequences.push(newConsequence);  

//     const putRequest = objStore.put(decision);
//     putRequest.onsuccess = event => {
//       callback();
//     }
//   }
// }

choiceCrafterDb.decisionUpdater = (updater) => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readwrite');
  const objStore = transaction.objectStore('decisions');
  const getRequest = objStore.get(updater.decisionId);

  getRequest.onsuccess = event => {
    const decision = event.target.result;
    updater.itemUpdater(decision);
    const putRequest = objStore.put(decision);
    putRequest.onsuccess = event => {
      updater.successCallback();
    }

  }  
}

choiceCrafterDb.error = () => alert("There was a problem with the database. Contact customer support");


export { choiceCrafterDb };