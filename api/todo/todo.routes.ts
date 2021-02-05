import { FastifyInstance } from "fastify";
import { TodoController } from "./todo.controller";

export class TodoRoutes {
  initRoutes(server: FastifyInstance, opts: any, done: () => void) {
    const todoController = new TodoController();
    server.get("/todos", todoController.getTodosListHandler);
    server.get("/todos/:id", todoController.getTodoDetailHandler);
    server.post("/todo/create", todoController.createTodoHandler);

    done();
  }
}
