// code your solution here

function superbowlWin(record) {
    // Find the first object in the record array with a "W" result and return its year
    const broncosWin = record.find(game => game.result === "W");
  
    // If a win is found, return the year; otherwise, return undefined
    return broncosWin ? broncosWin.year : undefined;
  }
  