require('datejs');

function combineUsers(...args){
  let combinedObject={
    users: [],
  }
  args.forEach(function(array){
    combinedObject.users=[...combinedObject.users, ...array];
  })
  combinedObject.merge_date=new Date().toString('M/d/yyyy');
  return combinedObject;
}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};