var observable = require('../../libs/mobx-wechat/mobx').observable;
var extendObservable = require('../../libs/mobx-wechat/mobx').extendObservable;

var nextTodoId = 0
var TodoItemStore = function(title) {
  nextTodoId ++;

  extendObservable(this, {
    title: title,
    id: nextTodoId,
    completed: false,
    get ids() {
      return this.id + ": " + this.title;
    }
  });
}

module.exports = {
  default: TodoItemStore,
}
