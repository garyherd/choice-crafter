import uuid from 'uuid';


const DECISIONS_Arr = [
  {
    decisionId: 0,
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
    decisionId: 1,
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
]

export default DECISIONS_Arr;