export default {
  asyncAddTodo(context, payload) {
    console.log(payload)
    //context.commit('addTodo', payload);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({name: 'from timeout', done: false});
      }, 3000);
    }).then( res => {
      /* State local */ context.commit('addTodo', res);
      //State Global context.commit('addTodo', res, { root: true });
    });
  }
}
