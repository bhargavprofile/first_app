const initialState = {
  skills: ["HTML", "CSS", "JS", "React"],
  // newSkill: "",
};

const todolistReducer = (state = initialState, action) => {
  // if (action.type) {
  //   return {
  //     ...state,
  //     skills: [...state.skills, action.payload],
  //   };
  // }
  if (action.type === "addTodo") {
    return { ...state, skills: [...state.skills, action.payload] };
  }
  if (action.type === "deleteSkill") {
    var x = [...state.skills];
    x.splice(action.payload, 1);
    return { ...state, skills: [...x] };
  }
  return state;
};

export default todolistReducer;
