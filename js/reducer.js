function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

const dispatch = action => {
  state = changeState(state, action);
  render();
};
const render = () => document.body.textContent = state.count;

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

changeState(state, action)
dispatch(action)
dispatch(action)
render()