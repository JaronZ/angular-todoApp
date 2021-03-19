import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: {
    id: number;
    title: string;
    done: boolean;
  }[];
  inputToDo: string;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: "first todo",
        done: false
      },
      {
        id: 2,
        title: "second todo",
        done: false
      },
      {
        id: 3,
        title: "third todo",
        done: true
      }
    ];
  }

  onInput(todo: string){
    this.inputToDo = todo;
  }

  addTodo(){
    this.todos.push({
      id: this.todos.length + 1,
      title: this.inputToDo,
      done: false
    });
  }

  removeTodo(itemId: number){
    this.todos.splice(itemId - 1, 1);
    const newTodos: {
      id: number;
      title: string;
      done: boolean;
    }[] = [];
    this.todos.forEach((todo, index) => {
      newTodos.push({
        id: index + 1,
        title: todo.title,
        done: todo.done
      });
    });
    this.todos = newTodos;
  }
}
