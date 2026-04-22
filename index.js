require('datejs');

function combineUsers(...args){
  let combinedObject={
    users: [],
  }
  // for(let i=0; i<args.length; i++){
  //   combinedObject.users=[...combinedObject.users, ...args[i]];
  // }
  args.forEach(function(array){
    combinedObject.users=[...combinedObject.users, ...array];
  })
  combinedObject.merge_date=new Date().toString('M/d/yyyy');
  return combinedObject;
}





module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};