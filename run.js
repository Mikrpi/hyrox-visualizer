// --- SVG elementit ---
const run1Path     = document.getElementById('run1FullPath');
const runLapPath   = document.getElementById('runLapPath');


// AJASTIMIEN PAIKAT
const TIMER_BASE_X = 340;    // Burpee-alue vasen
const TIMER_Y1 = 160;        // 🟢 Burpee yläpuoli
const TIMER_Y2 = 200;        // 🔴 Burpee alapuoli  
const TIMER_X_OFFSET = 30;

// RUNNER1 TIMERIT
const skiergTimer = document.getElementById('skiergTimer');
const sledPushTimer = document.getElementById('sledPushTimer');
const sledPullTimer = document.getElementById('sledPullTimer');
const burpeeTimer = document.getElementById('burpeeTimer');
const rowTimer = document.getElementById('rowTimer');
const lungesTimer = document.getElementById('lungesTimer');
const farmersTimer = document.getElementById('farmersTimer');
const wallballTimer = document.getElementById('wallballTimer');

// RUNNER2 TIMERIT
const skiergTimer2 = document.getElementById('skiergTimer2');
const sledPushTimer2 = document.getElementById('sledPushTimer2');
const sledPullTimer2 = document.getElementById('sledPullTimer2');
const burpeeTimer2 = document.getElementById('burpeeTimer2');
const rowTimer2 = document.getElementById('rowTimer2');
const lungesTimer2 = document.getElementById('lungesTimer2');
const farmersTimer2 = document.getElementById('farmersTimer2');
const wallballTimer2 = document.getElementById('wallballTimer2');

// SKIERG
const skiergRoxInPath = document.getElementById('skiergRoxIn');
const skiergRoxInLen = skiergRoxInPath.getTotalLength();
const skiergRoxOutPath = document.getElementById('skiergRoxOut');
const skiergRoxOutLen = skiergRoxOutPath.getTotalLength();

// SLED PUSH  
const sledPushRoxInPath = document.getElementById('sledPushRoxIn');
const sledPushRoxInLen = sledPushRoxInPath.getTotalLength();
const sledPushWorkPath = document.getElementById('sledPushWork');
const sledPushWorkLen = sledPushWorkPath.getTotalLength();
const sledPushRoxOutPath = document.getElementById('sledPushRoxOut');
const sledPushRoxOutLen = sledPushRoxOutPath.getTotalLength();

// SLED PULL  
const sledPullRoxInPath = document.getElementById('sledPullRoxIn');
const sledPullRoxInLen = sledPullRoxInPath.getTotalLength();
const sledPullWorkPath = document.getElementById('sledPullWork');
const sledPullWorkLen = sledPullWorkPath.getTotalLength();
const sledPullRoxOutPath = document.getElementById('sledPullRoxOut');
const sledPullRoxOutLen = sledPullRoxOutPath.getTotalLength();

// BURPEE
const burpeeRoxInPath = document.getElementById('burpeeRoxIn');
const burpeeRoxInLen = burpeeRoxInPath.getTotalLength();
const burpeeWorkPath = document.getElementById('burpeeWork');
const burpeeWorkLen = burpeeWorkPath.getTotalLength();
const burpeeRoxOutPath = document.getElementById('burpeeRoxOut');
const burpeeRoxOutLen = burpeeRoxOutPath.getTotalLength();

// ROW
const rowRoxInPath = document.getElementById('rowRoxIn');
const rowRoxInLen = rowRoxInPath.getTotalLength();
const rowRoxOutPath = document.getElementById('rowRoxOut');
const rowRoxOutLen = rowRoxOutPath.getTotalLength();

// FARMERS
const farmersRoxInPath = document.getElementById('farmersRoxIn');
const farmersRoxInLen = farmersRoxInPath.getTotalLength();
const farmersWorkPath = document.getElementById('farmersWork');
const farmersWorkLen = farmersWorkPath.getTotalLength();
const farmersRoxOutPath = document.getElementById('farmersRoxOut');
const farmersRoxOutLen = farmersRoxOutPath.getTotalLength();

// LUNGES
const lungesRoxInPath = document.getElementById('lungesRoxIn');
const lungesRoxInLen = lungesRoxInPath.getTotalLength();
const lungesWorkPath = document.getElementById('lungesWork');
const lungesWorkLen = lungesWorkPath.getTotalLength();
const lungesRoxOutPath = document.getElementById('lungesRoxOut');
const lungesRoxOutLen = lungesRoxOutPath.getTotalLength();

// WALLBALL
const wallballRoxInPath = document.getElementById('wallballRoxIn');
const wallballRoxInLen = wallballRoxInPath ? wallballRoxInPath.getTotalLength() : 0;
const wallballRoxOutPath = document.getElementById('wallballRoxOut');
const wallballRoxOutLen = wallballRoxOutPath ? wallballRoxOutPath.getTotalLength() : 0;

console.log('Wallball lens:', wallballRoxInLen, wallballRoxOutLen);

// Runner1 -funktiot
const runner       = document.getElementById('runner1');
const masterTimer = document.getElementById('masterTimer1');

// Runner2 -funktiot
const runner2 = document.getElementById('runner2');
const masterTimer2 = document.getElementById('masterTimer2');

// Yleinen nopeutusarvo
const speedFactor = raceConfig.speedFactor;

// Polkujen pituudet
//const L          = runPath.getTotalLength();
const run1Len      = run1Path.getTotalLength();
const runLapLen    = runLapPath.getTotalLength();

// raceConfig.distances.paths.sledPull.len = sledPullPath.getTotalLength();
// raceConfig.distances.paths.farmers.len  = farmersPath.getTotalLength();
// raceConfig.distances.paths.lunges.len   = lungesPath.getTotalLength();
// raceConfig.distances.paths.burpee.len   = burpeePath.getTotalLength();
// raceConfig.distances.paths.row.len      = rowPath.getTotalLength();
// raceConfig.distances.paths.walls.len    = wallsPath.getTotalLength();

let raceStartTime1 = null;  // 🟢 Runner1
let raceStartTime2 = null;  // 🔴 Runner2
let raceFinished1 = false;  // 🟢 Loppu
let raceFinished2 = false;  // 🔴 Loppu

// Runner1
function updateMasterTimer(ts) {
  if (!raceStartTime1) raceStartTime1 = ts;
  
  if (raceFinished1) {
    const totalSec = Math.round((ts - raceStartTime1) / 1000 / speedFactor);
    masterTimer.textContent = `🏁 ${formatTime(totalSec)}`;
    return;
  }
  
  const elapsedSec = Math.round((ts - raceStartTime1) / 1000 / speedFactor);
  masterTimer.textContent = formatTime(elapsedSec);
  requestAnimationFrame(updateMasterTimer);
}

// Runner2
function updateMasterTimer2(ts) {
  if (!raceStartTime2) raceStartTime2 = ts;
  
  if (raceFinished2) {
    const totalSec = Math.round((ts - raceStartTime2) / 1000 / speedFactor);
    masterTimer2.textContent = `🏁 ${formatTime(totalSec)}`;
    return;
  }
  
  const elapsedSec = Math.round((ts - raceStartTime2) / 1000 / speedFactor);
  masterTimer2.textContent = formatTime(elapsedSec);
  requestAnimationFrame(updateMasterTimer2);
}


// --- Yleiset apufunktiot ---
// Runner1
function animateOnPath(path, dFrom, dTo, durationSec, done) {
  const durationMs = durationSec * 1000 * speedFactor;
  let startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    const prog = Math.min((ts - startTime) / durationMs, 1);
    const d = dFrom + (dTo - dFrom) * prog;
    const p = path.getPointAtLength(d);
    runner.setAttribute('cx', p.x);
    runner.setAttribute('cy', p.y);
    if (prog < 1) requestAnimationFrame(step);
    else if (done) done();
  }
  requestAnimationFrame(step);
}

// Runner2
function animateOnPath2(path, dFrom, dTo, durationSec, done) {
  const durationMs = durationSec * 1000 * speedFactor;
  let startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    const prog = Math.min((ts - startTime) / durationMs, 1);
    const d = dFrom + (dTo - dFrom) * prog;
    const p = path.getPointAtLength(d);
    runner2.setAttribute('cx', p.x);
    runner2.setAttribute('cy', p.y);
    if (prog < 1) requestAnimationFrame(step);
    else if (done) done();
  }
  requestAnimationFrame(step);
}


// RUNNER 1
function waitAtPoint(path, dist, durationSec, done) {
  if (!Number.isFinite(dist) || dist < 0 || dist > path.getTotalLength()) {
    console.error('❌ waitAtPoint invalid:', { dist, totalLength: path.getTotalLength() });
    return done();
  }
  
  const durationMs = durationSec * 1000 * speedFactor;
  console.log('waitAtPoint OK', { dist, durationSec, totalLength: path.getTotalLength() });

  try {
    const p = path.getPointAtLength(dist);
    if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) {
      console.error('❌ getPointAtLength failed:', p);
      return done();
    }
    
    runner.setAttribute('cx', p.x);
    runner.setAttribute('cy', p.y);
  } catch (e) {
    console.error('❌ getPointAtLength error:', e);
    return done();
  }

  const start = performance.now();

  function tick(ts) {
    const elapsed = ts - start;
    const prog = Math.min(elapsed / durationMs, 1);

    const baseR = 10;
    const extra = 3 * Math.sin(prog * Math.PI * 4);
    runner.setAttribute('r', baseR + extra);

    if (prog < 1) {
      requestAnimationFrame(tick);
    } else {
      runner.setAttribute('r', baseR);
      console.log('waitAtPoint done');
      done();
    }
  }

  requestAnimationFrame(tick);
}

function waitAtPoint2(path, dist, durationSec, done) {
  const durationMs = durationSec * 1000 * speedFactor;
  const p = path.getPointAtLength(dist);
  runner2.setAttribute('cx', p.x);
  runner2.setAttribute('cy', p.y);
  
  const start = performance.now();
  function tick(ts) {
    const elapsed = ts - start;
    const prog = Math.min(elapsed / durationMs, 1);
    runner2.setAttribute('r', 10 + 3 * Math.sin(prog * Math.PI * 4));
    if (prog < 1) requestAnimationFrame(tick);
    else done();
  }
  requestAnimationFrame(tick);
}



function stationTimer(timerElement, splits, stationName, durationSec) {
  timerElement.textContent = `${stationName} 0:00`;
  const start = performance.now();
  
  function tick(ts) {
    const elapsed = (ts - start) / 1000 / speedFactor;
    const elapsedSec = Math.round(elapsed);
    timerElement.textContent = `${stationName} ${formatTime(elapsedSec)}`;
    
    if (elapsedSec < durationSec) {
      requestAnimationFrame(tick);
    } else {
      timerElement.textContent = `${stationName} ${formatTime(durationSec)}`;
    }
  }
  requestAnimationFrame(tick);
}


// --- Station‑spesifiset funktiot ---

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}


// Runner1
function doStation(roxInPath, roxInLen, workPath, workLen, roxOutPath, roxOutLen, splits, stationName, timerId, done) {
  const timerElement = document.getElementById(timerId);
  console.log(`${stationName.toUpperCase()} START`);
  
  // 1. ROX IN
  animateOnPath(roxInPath, 0, roxInLen, splits[`${stationName}_rox_in`], () => {
    
    if (workPath) {
      // 🚀 LIIKKUVA station
      console.log(`${stationName} WORK (moving)`);
      
      // SIIRTÄ AJASTIN työpolun alkuun
      const workStartPoint = workPath.getPointAtLength(10);  // polun alku
      timerElement.setAttribute('x', TIMER_BASE_X + TIMER_X_OFFSET);
      timerElement.setAttribute('y', TIMER_Y1);
      
      stationTimer(timerElement, splits, stationName, splits[`${stationName}_work`]);
      
      const workStart = performance.now();
      const workDurationMs = splits[`${stationName}_work`] * 1000 * speedFactor;
      
      function workTick(ts) {
        const elapsed = ts - workStart;
        const prog = Math.min(elapsed / workDurationMs, 1);
        
        // 1 ED ESTAKAINEN: 0→len→0
        const cycle = prog * 1;
        const forward = Math.floor(cycle) % 2 === 0;
        const cycleProg = cycle % 1;
        const d = forward ? cycleProg * workLen : (1 - cycleProg) * workLen;
        
        const p = workPath.getPointAtLength(d);
        runner.setAttribute('cx', p.x);
        runner.setAttribute('cy', p.y);
        
        if (prog < 1) {
          requestAnimationFrame(workTick);
        } else {
          roxOut();  // ← KUTSUTTU TÄÄLTÄ
        }
      }
      requestAnimationFrame(workTick);
      
    } else {
      // 🛑 PISTE-station
      console.log(`${stationName} WORK (point)`);
      
      // ajastin 
      const workPoint = roxInPath.getPointAtLength(roxInLen);
      timerElement.setAttribute('x', TIMER_BASE_X + TIMER_X_OFFSET);
      timerElement.setAttribute('y', TIMER_Y1);

      stationTimer(timerElement, splits, stationName, splits[`${stationName}_work`]);
      waitAtPoint(roxInPath, roxInLen, splits[`${stationName}_work`], roxOut);
    }
    
    function roxOut() {
      console.log(`${stationName} ROX OUT`);
      timerElement.textContent = '';  // Tyhjennä ajastin
      animateOnPath(roxOutPath, 0, roxOutLen, splits[`${stationName}_rox_out`], done);
    }
  });
}

// Runner2
function doStation2(roxInPath, roxInLen, workPath, workLen, roxOutPath, roxOutLen, splits, stationName, timerId, done) {
  const timerElement = document.getElementById(timerId);
  console.log(`${stationName.toUpperCase()} START`);
  
  // 1. ROX IN
  animateOnPath2(roxInPath, 0, roxInLen, splits[`${stationName}_rox_in`], () => {
    
    if (workPath) {
      // 🚀 LIIKKUVA station
      console.log(`${stationName} WORK (moving)`);
      
      // SIIRTÄ AJASTIN työpolun alkuun
      const workStartPoint = workPath.getPointAtLength(10);  // polun alku
      timerElement.setAttribute('x', TIMER_BASE_X + TIMER_X_OFFSET);
      timerElement.setAttribute('y', TIMER_Y2);

      
      stationTimer(timerElement, splits, stationName, splits[`${stationName}_work`]);
      
      const workStart = performance.now();
      const workDurationMs = splits[`${stationName}_work`] * 1000 * speedFactor;
      
      function workTick(ts) {
        const elapsed = ts - workStart;
        const prog = Math.min(elapsed / workDurationMs, 1);
        
        // 1 ED ESTAKAINEN: 0→len→0
        const cycle = prog * 1;
        const forward = Math.floor(cycle) % 2 === 0;
        const cycleProg = cycle % 1;
        const d = forward ? cycleProg * workLen : (1 - cycleProg) * workLen;
        
        const p = workPath.getPointAtLength(d);
        runner2.setAttribute('cx', p.x);
        runner2.setAttribute('cy', p.y);
        
        if (prog < 1) {
          requestAnimationFrame(workTick);
        } else {
          roxOut();  // ← KUTSUTTU TÄÄLTÄ
        }
      }
      requestAnimationFrame(workTick);
      
    } else {
      // 🛑 PISTE-station
      console.log(`${stationName} WORK (point)`);
      
      // SIIRTÄ AJASTIN roxIn PÄÄTEPISTEEN VIEREEN
      const workPoint = roxInPath.getPointAtLength(roxInLen);
      timerElement.setAttribute('x', TIMER_BASE_X + TIMER_X_OFFSET);
      timerElement.setAttribute('y', TIMER_Y2);
      
      stationTimer(timerElement, splits, stationName, splits[`${stationName}_work`]);
      waitAtPoint2(roxInPath, roxInLen, splits[`${stationName}_work`], roxOut);
    }
    
    function roxOut() {
      console.log(`${stationName} ROX OUT`);
      timerElement.textContent = '';  // Tyhjennä ajastin
      animateOnPath2(roxOutPath, 0, roxOutLen, splits[`${stationName}_rox_out`], done);
    }
  });
}



// --- Koko kisan “script” ---

function runRace() {
  console.log('DETAILED:', {
    skiergRoxInPath, skiergRoxInLen, isFinite: Number.isFinite(skiergRoxInLen), skiergRoxInLen_value: skiergRoxInLen
  });
  
  const paths = {
    run1: run1Path.getTotalLength(),
    runLap: runLapLen,
    skiergRoxIn: skiergRoxInLen,
    skiergRoxOut: skiergRoxOutLen,
    sledPushRoxIn: sledPushRoxInLen,
    sledPushWork: sledPushWorkLen,
    sledPushRoxOut: sledPushRoxOutLen
  };
  console.table(paths);
  
  if (!Number.isFinite(paths.skiergRoxIn)) {
    console.error('❌ PUUTTUU: skiergRoxIn SVG-path!');
    return;
  }

    // Reset
  raceStartTime1 = null;
  raceStartTime2 = null;
  raceFinished1 = false;
  raceFinished2 = false;

  
  requestAnimationFrame(updateMasterTimer);   // Runner1
  requestAnimationFrame(updateMasterTimer2);  // Runner2

  const s1 = raceConfig.splitsRunner1;
  // Juoksu 1
  animateOnPath(run1Path, 0, run1Len, s1.run1_total, () => {
    
    // SKIERG
    doStation(skiergRoxInPath, skiergRoxInLen, null, 0, skiergRoxOutPath, skiergRoxOutLen, s1, 'skierg', 'skiergTimer', () => {
      console.log('skierg valmis!');
      
      // Juoksu 2
      animateOnPath(runLapPath, 0, runLapLen, s1.run2_total, () => {
        // SLED PUSH
        doStation(sledPushRoxInPath, sledPushRoxInLen, sledPushWorkPath, sledPushWorkLen, sledPushRoxOutPath, sledPushRoxOutLen, s1, 'sledPush', 'sledPushTimer', () => {
          console.log('SledPush valmis!');
          
          // Juoksu 3
          animateOnPath(runLapPath, 0, runLapLen, s1.run3_total, () => {
            // SLED PULL
            doStation(sledPullRoxInPath, sledPullRoxInLen, sledPullWorkPath, sledPullWorkLen, sledPullRoxOutPath, sledPullRoxOutLen, s1, 'sledPull', 'sledPullTimer', () => {
              console.log('SledPull valmis!');
              
              // Juoksu 4
              animateOnPath(runLapPath, 0, runLapLen, s1.run4_total, () => {
                // BURPEE
                doStation(burpeeRoxInPath, burpeeRoxInLen, burpeeWorkPath, burpeeWorkLen, burpeeRoxOutPath, burpeeRoxOutLen, s1, 'burpee', 'burpeeTimer', () => {
                  console.log('burpee valmis!');
                  
                  // Juoksu 5
                  animateOnPath(runLapPath, 0, runLapLen, s1.run5_total, () => {
                    // ROW
                    doStation(rowRoxInPath, rowRoxInLen, null, 0, rowRoxOutPath, rowRoxOutLen, s1, 'row', 'rowTimer', () => {
                      console.log('row valmis!');
                      
                      // Juoksu 6
                      animateOnPath(runLapPath, 0, runLapLen, s1.run6_total, () => {
                        // FARMERS
                        doStation(farmersRoxInPath, farmersRoxInLen, farmersWorkPath, farmersWorkLen, farmersRoxOutPath, farmersRoxOutLen, s1, 'farmers', 'farmersTimer', () => {
                          console.log('farmers valmis!');
                          
                          // Juoksu 7
                          animateOnPath(runLapPath, 0, runLapLen, s1.run7_total, () => {
                            // LUNGES
                            doStation(lungesRoxInPath, lungesRoxInLen, lungesWorkPath, lungesWorkLen, lungesRoxOutPath, lungesRoxOutLen, s1, 'lunges', 'lungesTimer', () => {
                              console.log('lunges valmis!');
                              
                              // Juoksu 8
                              animateOnPath(runLapPath, 0, runLapLen, s1.run8_total, () => {
                                // WALLBALL
                                doStation(wallballRoxInPath, wallballRoxInLen, null, 0, wallballRoxOutPath, wallballRoxOutLen, s1, 'wallball', 'wallballTimer', () => {
                                  raceFinished1 = true;      // STOP TIMER1!
                                  console.log('KISA VALMIS! 🏆');
                                }); // wallball done
                              }); // run8 done
                            }); // lunges done
                          }); // run7 done
                        }); // farmers done
                      }); // run6 done
                    }); // row done
                  }); // run5 done
                }); // burpee done
              }); // run4 done
            }); // sledPull done
          }); // run3 done
        }); // sledPush done
      }); // run2 done
    }); // skierg done
  }); // run1 done


const s2 = raceConfig.splitsRunner2;
  // Juoksu 1
  animateOnPath2(run1Path, 0, run1Len, s2.run1_total, () => {
    
    // SKIERG
    doStation2(skiergRoxInPath, skiergRoxInLen, null, 0, skiergRoxOutPath, skiergRoxOutLen, s2, 'skierg', 'skiergTimer2', () => {
      console.log('skierg valmis!');
      
      // Juoksu 2
      animateOnPath2(runLapPath, 0, runLapLen, s2.run2_total, () => {
        // SLED PUSH
        doStation2(sledPushRoxInPath, sledPushRoxInLen, sledPushWorkPath, sledPushWorkLen, sledPushRoxOutPath, sledPushRoxOutLen, s2, 'sledPush', 'sledPushTimer2', () => {
          console.log('SledPush valmis!');
          
          // Juoksu 3
          animateOnPath2(runLapPath, 0, runLapLen, s2.run3_total, () => {
            // SLED PULL
            doStation2(sledPullRoxInPath, sledPullRoxInLen, sledPullWorkPath, sledPullWorkLen, sledPullRoxOutPath, sledPullRoxOutLen, s2, 'sledPull', 'sledPullTimer2', () => {
              console.log('SledPull valmis!');
              
              // Juoksu 4
              animateOnPath2(runLapPath, 0, runLapLen, s2.run4_total, () => {
                // BURPEE
                doStation2(burpeeRoxInPath, burpeeRoxInLen, burpeeWorkPath, burpeeWorkLen, burpeeRoxOutPath, burpeeRoxOutLen, s2, 'burpee', 'burpeeTimer2', () => {
                  console.log('burpee valmis!');
                  
                  // Juoksu 5
                  animateOnPath2(runLapPath, 0, runLapLen, s2.run5_total, () => {
                    // ROW
                    doStation2(rowRoxInPath, rowRoxInLen, null, 0, rowRoxOutPath, rowRoxOutLen, s2, 'row', 'rowTimer2', () => {
                      console.log('row valmis!');
                      
                      // Juoksu 6
                      animateOnPath2(runLapPath, 0, runLapLen, s2.run6_total, () => {
                        // FARMERS
                        doStation2(farmersRoxInPath, farmersRoxInLen, farmersWorkPath, farmersWorkLen, farmersRoxOutPath, farmersRoxOutLen, s2, 'farmers', 'farmersTimer2', () => {
                          console.log('farmers valmis!');
                          
                          // Juoksu 7
                          animateOnPath2(runLapPath, 0, runLapLen, s2.run7_total, () => {
                            // LUNGES
                            doStation2(lungesRoxInPath, lungesRoxInLen, lungesWorkPath, lungesWorkLen, lungesRoxOutPath, lungesRoxOutLen, s2, 'lunges', 'lungesTimer2', () => {
                              console.log('lunges valmis!');
                              
                              // Juoksu 8
                              animateOnPath2(runLapPath, 0, runLapLen, s2.run8_total, () => {
                                // WALLBALL
                                doStation2(wallballRoxInPath, wallballRoxInLen, null, 0, wallballRoxOutPath, wallballRoxOutLen, s2, 'wallball', 'wallballTimer2', () => {
                                  raceFinished2 = true;      // STOP TIMER2!
                                  console.log('KISA VALMIS! 🏆');
                                }); // wallball done
                              }); // run8 done
                            }); // lunges done
                          }); // run7 done
                        }); // farmers done
                      }); // run6 done
                    }); // row done
                  }); // run5 done
                }); // burpee done
              }); // run4 done
            }); // sledPull done
          }); // run3 done
        }); // sledPush done
      }); // run2 done
    }); // skierg done
  }); // run1 done

} // runRace done


// Käynnistä
runRace();

