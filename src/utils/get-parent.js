// Helper function to get reference of parent object.replies[]
export const getParentRef = (newStateObj, parentIndices) => {
  let parentPtr = newStateObj;
  for (let idx of parentIndices) {
    parentPtr = parentPtr[idx].replies;
  }
  return parentPtr;
};

// Helper function to get parent comment object
export const getParentComment = (thread, parentIndices) => {
  let parentPtr = thread;
  const lastParent = parentIndices.length - 1;
  for (let idx in parentIndices) {
    if (idx < lastParent) {
      parentPtr = parentPtr[parentIndices[idx]].replies;
    } else {
      parentPtr = parentPtr[parentIndices[idx]];
    }
  }
  return parentPtr;
};
