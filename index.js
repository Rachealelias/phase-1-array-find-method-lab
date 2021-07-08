 function superbowlWin(records){
//     //console.log(record);
     const solution = records.find( record => record.result === 'W');
     return !!solution ? solution.year : undefined;
//       //console.log(solution);

 }

// function superbowlWin(records){
//     const solution = records.find(record => record.result === 'W');
//     if (solution){
//         return solution.year;
//     }else {
//         return undefined;
//     }

