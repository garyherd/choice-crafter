import uuid from 'uuid';

const dbSeed = [
  {
    decisionId: '',
    //uid: 'Fg7D7hAan5QHE3jcdo6n64QYS4a2',
    uid: '', 
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
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job A", score: 14, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job B", score: 12, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job C", score: 10, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job D", score: 15, description: "", isActive: true, isInitial: true},
      {id: uuid.v4(), objTitle: "Annual vacation days", altTitle: "Job E", score: 12, description: "", isActive: true, isInitial: true},  
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job A", score: "health, dental, retirement", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job B", score: "health, dental", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits", altTitle: "Job C", score: "health", description: "", isActive: true, isInitial: true}, 
      {id: uuid.v4(), objTitle: "Benefits",  altTitle: "Job D", score: "health, retirement", description: "", isActive: true, isInitial: true}, 
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

const createIdRefs = () => {
  dbSeed[0].consequences.forEach(element => {
    element.objId = dbSeed[0].objectives.filter(obj => obj.title.trim().toUpperCase() === element.objTitle.trim().toUpperCase())[0].id;
    element.altId = dbSeed[0].alternatives.filter(obj => obj.title.trim().toUpperCase() === element.altTitle.trim().toUpperCase())[0].id;
  });
}

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

    db.createObjectStore('decisions', {keyPath: "decisionId"});
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

    if (!!result === false) {
      return;
    }

    decisions.push(result.value);

    result.continue();
  };

  cursorRequest.onerror = choiceCrafterDb.onerror;

}

choiceCrafterDb.loadExampleDecision = (callback, userId) => {
  createIdRefs();
  dbSeed[0].uid = userId;
  dbSeed[0].decisionId = uuid.v4();
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

choiceCrafterDb.newDecision = (updater) => {
  const db = choiceCrafterDb.datastore;
  const transaction = db.transaction(['decisions'], 'readwrite');
  const objStore = transaction.objectStore('decisions');
  const request = objStore.add(updater.newDecision);

  request.onsuccess = event => {
    updater.successCallback();
  }

  request.onerror = choiceCrafterDb.onerror;
  transaction.onerror = choiceCrafterDb.onerror;

}

choiceCrafterDb.error = () => alert("There was a problem with the database. Contact customer support");


export { choiceCrafterDb };