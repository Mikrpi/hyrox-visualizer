// Kaikki ajat sekunteina
const raceConfig = {
  speedFactor: 0.05,      // globaali nopeutus (1.0 = realistinen) 
    distances: {
    run: {
      startStraightEnd: null,
      in: null,
      out: null,
      lapLen: null
    },
    paths: {
      skierg: { len: null, workDist: null },
      sledPush: { len: null, workDist: null },
      sledPull: { len: null, workDist: null },
      burpee: { len: null, workDist: null },
      row: { len: null, workDist: null },
      farmers: { len: null, workDist: null },
      lunges: { len: null, workDist: null },
      wallball: { len: null, workDist: null },
    }
  },
  
  splitsRunner1: {
    // JUOKSUT
    run1_total: 263,
    run2_total: 257,
    run3_total: 262,
    run4_total: 271,
    run5_total: 275,
    run6_total: 271,
    run7_total: 275,
    run8_total: 300,
    // STATIONIT
    skierg_rox_in: 6,
    skierg_work: 265,
    skierg_rox_out: 39,
    
    sledPush_rox_in: 4,
    sledPush_work: 152,
    sledPush_rox_out: 37,

    sledPull_rox_in: 10,
    sledPull_work: 259,
    sledPull_rox_out: 38,

    burpee_rox_in: 32,
    burpee_work: 232,
    burpee_rox_out: 20,

    row_rox_in: 26,
    row_work: 269,
    row_rox_out: 16,

    farmers_rox_in: 48,
    farmers_work: 86,
    farmers_rox_out: 28,

    lunges_rox_in: 51,
    lunges_work: 234,
    lunges_rox_out: 31,

    wallball_rox_in: 10, // 10s pois kokonaisajasta, koska virallista väliaikaa ei ole
    wallball_work: 303,
    wallball_rox_out: 10, // 10s pois kokonaisajasta, koska virallista väliaikaa ei ole
  },

  splitsRunner2: {
  // JUOKSUT (ero Rox In/Out = juoksuajat)
  run1_total: 275,  // 4:35
  run2_total: 262,  // 4:22
  run3_total: 286,  // 4:46
  run4_total: 279,  // 4:39
  run5_total: 288,  // 4:48
  run6_total: 278,  // 4:38
  run7_total: 273,  // 4:33
  run8_total: 296,  // 4:56
  
  // STATIONIT
  skierg_rox_in: 5, skierg_work: 309, skierg_rox_out: 35,
  
  sledPush_rox_in: 4, sledPush_work: 113, sledPush_rox_out: 42,
  
  sledPull_rox_in: 11, sledPull_work: 325, sledPull_rox_out: 37,
  
  burpee_rox_in: 30, burpee_work: 257, burpee_rox_out: 20,
  
  row_rox_in: 28, row_work: 299, row_rox_out: 12,
  
  farmers_rox_in: 48, farmers_work: 105, farmers_rox_out: 23,
  
  lunges_rox_in: 49, lunges_work: 219, lunges_rox_out: 22,
  
  wallball_rox_in: 10, wallball_work: 273, wallball_rox_out: 10,  // in ja out 10s pois kokonaisajasta, koska virallista väliaikaa ei ole
  // Maaliin!
}
};

