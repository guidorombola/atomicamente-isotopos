/* Sources of information for elements */
// Define elements included
//En isotopos podriamos poner las posiciones de los isotopos
var elementsIncluded = [{
  symbol : 'H',
  name : 'Hidrógeno',
  info : {
    group : 1,
    period : 1,
    atomicNumber : 1,
    atomicWeight : 1.008,
    atomicRadius : 25,
    state : 'Gas',
    meltingPoint : '13.99 K',
    boilingPoint : '20.27 K',
    protons: [{x:0,y:0,z:0}],
    isotopes : [
      {
        name: "Hidrogeno 1",
        positions: []
      },
      {
        name: "Hidrogeno 2",
        positions:  
          [
            {x:0,y:0,z:0.5}
          ]
      },
      {
        name:"Hidrogeno 3",
        positions: [
          {x:-0.5,y:0,z:0},
          {x:0.5,y:0,z:0}
        ],
      }, 
    ],
    electronConfig : '1s<sup>1</sup>',
    oxidationState : '+1',
    nameHistory : 'Greek <em>hydro</em> and <em>genes</em> meaning water forming.',
    link : 'http://www.rsc.org/periodic-table/element/1/hydrogen'
  },
  position: {x:-16,y:4},
  /* layout: [
    [{x:0,y:0,z:0}],
    [],
    [{'1s':1}],
  ] */
},{
  symbol : 'He',
  name : 'Helio',
  info : {
    group : '18 (noble gas)',
    period: 1,
    atomicNumber : 2,
    atomicWeight : 4.003,
    atomicRadius : 13,
    state : 'Gas',
    meltingPoint : 'Unknown',
    boilingPoint : '4.22 K',
    //isotopes : '<sup>4</sup>He',
    electronConfig : '1s<sup>2</sup>',
    oxidationState : '-',
    nameHistory : 'Greek, <em>helios</em> meaning sun.',
    link : 'http://www.rsc.org/periodic-table/element/2/helium',
    protons: [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0}],
    isotopes: [
      {
        name: "Helio 4",
        positions: [
          {x:0,y:0.5,z:0},
          {x:0,y:-0.5,z:0}
        ],
      },
      {
        name: "Helio 3",
        positions:  
          [
            {x:0,y:0.5,z:0},
          ]
      }, 
    ],
  },
  position: {x:18,y:4},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0}],
    [{'1s':2}]
  ]
},{
  symbol : 'Li',
  name : 'Litio',
  info : {
    group : '1 (alkali)',
    period : 2,
    atomicNumber : 3,
    atomicWeight : 6.94,
    atomicRadius : 145,
    state : 'Solid',
    meltingPoint : '453.6 K',
    boilingPoint : '1615 K',
    protons: [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5}],
    isotopes: [
      {
        name: "Litio 7",
        positions: [
          {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:0.5,y:0.5,z:0}
        ],
      },
      {
        name: "Litio 6",
        positions:  
          [
            {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5}
          ]
      },
       
    ],
    electronConfig : '2s<sup>1</sup>',
    oxidationState : '+1',
    nameHistory : 'Greek <em>lithos</em> meaning stone.',
    link : 'http://www.rsc.org/periodic-table/element/3/lithium'
  },
  position: {x:-16,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5}],
    [{'1s':2,'2p':1}]
  ]
},{
  symbol : 'Be',
  name : 'Berilio',
  info : {
    group : '2 (alkali earth)',
    period : 2,
    atomicNumber : 4,
    atomicWeight : 9.012,
    atomicRadius : 105,
    state : 'Solid',
    meltingPoint : '1560 K',
    boilingPoint : '2471 K',
    protons: [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5}],
    isotopes: [
      {
        name: "Berilio 9",
        positions: [
          {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5}, {x: 0, y:-0.5, z:-0.5}
        ],
      },
      {
        name: "Berilio 10",
        positions:  
          [
            {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5}, {x: 0, y:-0.5, z:-0.5}, {x: 0.5,y:0.5,z:-0.5}
          ]
      },
      {
        name: "Berilio 7",
        positions:  
          [
            {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5}
          ]
      },
    ], 
    electronConfig : '2s<sup>2</sup>',
    oxidationState : '+2',
    nameHistory : 'Greek name for beryl, <em>beryllo</em>.',
    link : 'http://www.rsc.org/periodic-table/element/4/beryllium'
  },
  position: {x:-14,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5}],
    [{'1s':2,'2p':2}]
  ]
},{
  symbol : 'B',
  name : 'Boro',
  info : {
    group : 13,
    period : 2,
    atomicNumber : 5,
    atomicWeight : 10.81,
    atomicRadius : 85,
    state : 'Solid',
    meltingPoint : '2350 K',
    boilingPoint : '4273 K',
    protons: [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5}],
    isotopes: [
      {
        name: "Boro 11",
        positions: [
          {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5}, {x:-0.5,y:-0.5,z:0.5}, {x: 0, y:-0.5, z:-0.5}
        ],
      },
      {
        name: "Boro 10",
        positions:  
          [
            {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5}
          ]
      },
    ], 
    //isotopes : '<sup>11</sup>B',
    electronConfig : '2s<sup>2</sup>2p<sup>1</sup>',
    oxidationState : '+2',
    nameHistory : 'Arabic <em>buraq</em>, meaning borax.',
    link : 'http://www.rsc.org/periodic-table/element/5/boron'
  },
  position: {x:8,y:2},
  layout: [
    [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5}],
    [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5}],
    [{'1s':2,'2p':3}]
  ]
},{
  symbol : 'C',
  name : 'Carbono',
  info : {
    group : 14,
    period : 2,
    atomicNumber : 6,
    atomicWeight : 12.01,
    atomicRadius : 70,
    state : 'Solid',
    meltingPoint : '2350 K',
    boilingPoint : '4273 K',
    protons: [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5}],
    isotopes: [
      {
        name: "Carbono 12",
        positions: [
          {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5}, {x:-0.5,y:-0.5,z:0.5}, {x: 0.5, y:-0.5, z:-0.5}
        ],
      },
      {
        name: "Carbono 13",
        positions:  
          [
            {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x: 0.5, y:-0.5, z:-0.5}, {x: 0.5, y: 0, z: -0.5}
          ]
      },
      {
        name: "Carbono 14",
        positions:  
          [
            {x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5}, {x: 0.5, y: 0, z: -0.5},{x: 0.5, y:-0.5, z:-0.5}, {x: -0.5, y:0, z:-0.5}
          ]
      },
    ], 
    electronConfig : '2s<sup>2</sup>2p<sup>2</sup>',
    oxidationState : '<u>+4</u>,+2',
    nameHistory : 'Latin <em>carbo</em>, meaning charcoal.',
    link : 'http://www.rsc.org/periodic-table/element/6/carbon',
    },
    position: {x:10,y:2},
    layout: [
      [{x:0.5,y:0,z:0},{x:-0.5,y:0,z:0},{x:0,y:0,z:-0.5},{x:0.5,y:0.5,z:0.5},{x:0.5,y:0.5,z:-0.5},{x:0.5,y:-0.5,z:0.5}],
      [{x:0,y:0.5,z:0},{x:0,y:-0.5,z:0},{x:0,y:0,z:0.5},{x:-0.5,y:-0.5,z:-0.5},{x:-0.5,y:-0.5,z:0.5},{x:-0.5,y:0.5,z:-0.5}],
      [{'1s':2,'2p':4}]
    ]
  }
];
