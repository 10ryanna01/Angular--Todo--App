import { Component, OnInit } from "@angular/core";
import { Todo } from "./../../models/Todo";
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./_todos.component.scss"],

})
export class TodosComponent implements OnInit {
  title = " title template litteral todos";

  todos: Todo[] = [];
  inputTodo: string = "";
  formDirective!: FormGroupDirective
  registerForm!: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // todo validation
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required]

    }, { updateOn: 'submit' })

    console.log("OnInit");
    this.todos = [
      {
        content: "create git repo",
        completed: true,
      }, {
        content: "add files to commit",
        completed: false,
      },
      {
        content: "set up API fetch and build out cards styling",
        completed: false,
      },

    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });
  }

  addTodo() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;

    }
    this.todos.push({
      content: this.inputTodo,
      completed: false,

    });



  }



  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }





}
