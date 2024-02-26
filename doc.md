# Todo List API Documentation

This API provides endpoints for managing a Todo List.

## Endpoints

### Get All Todos

- **URL**: `/api/todos`
- **Method**: GET
- **Description**: Retrieve all todos.
- **Response**: 
  - `200 OK` with an array of todo objects.
  - Example Response:
    ```json
    [
      {
        "id": 1,
        "title": "Buy groceries",
        "completed": false
      },
      {
        "id": 2,
        "title": "Finish homework",
        "completed": true
      }
    ]
    ```

### Get Todo by ID

- **URL**: `/api/todos/:id`
- **Method**: GET
- **Description**: Retrieve a todo by its ID.
- **Parameters**:
  - `id`: ID of the todo.
- **Response**:
  - `200 OK` with the todo object.
  - `404 Not Found` if todo with given ID doesn't exist.
  - Example Response:
    ```json
    {
      "id": 1,
      "title": "Buy groceries",
      "completed": false
    }
    ```

### Create Todo

- **URL**: `/api/todos`
- **Method**: POST
- **Description**: Create a new todo.
- **Request Body**:
  - `title`: Title of the todo.
  - `completed`: Completion status of the todo (true/false).
- **Response**:
  - `201 Created` with the created todo object.
  - Example Request Body:
    ```json
    {
      "title": "Clean the house",
      "completed": false
    }
    ```
  - Example Response:
    ```json
    {
      "id": 3,
      "title": "Clean the house",
      "completed": false
    }
    ```

### Update Todo

- **URL**: `/api/todos/:id`
- **Method**: PUT
- **Description**: Update a todo by its ID.
- **Parameters**:
  - `id`: ID of the todo.
- **Request Body**:
  - `title`: New title of the todo.
  - `completed`: New completion status of the todo (true/false).
- **Response**:
  - `200 OK` with the updated todo object.
  - `404 Not Found` if todo with given ID doesn't exist.
  - Example Request Body:
    ```json
    {
      "title": "Buy milk",
      "completed": true
    }
    ```
  - Example Response:
    ```json
    {
      "id": 1,
      "title": "Buy milk",
      "completed": true
    }
    ```

### Delete Todo

- **URL**: `/api/todos/:id`
- **Method**: DELETE
- **Description**: Delete a todo by its ID.
- **Parameters**:
  - `id`: ID of the todo.
- **Response**:
  - `204 No Content` if todo is successfully deleted.
  - `404 Not Found` if todo with given ID doesn't exist.
