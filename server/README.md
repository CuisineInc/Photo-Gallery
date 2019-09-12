## Specify RESTful CRUD API

# Create : POST
  - Insert statement
    - app.post('/listings')

# Read : GET
  - Select statement
    - getAll: app.get('/listings')
    - getOne: app.get('/listings/id')

# Update : PUT
  - Update statement
      - app.put('/listings/id')

# Delete : DELETE
  - Delete statement
      - app.delete('/listings/id)

