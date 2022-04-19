export const getTodos = () => {
    const URL = 'http://localhost:3001/todos'
    return fetch(URL)
}

export const getOneTodo = (id) => {
    const URL = `http://localhost:3001/todos/${id}`
    return fetch(URL)
}

export const deleteTodo = (id) => {
    const URL = `http://localhost:3001/todos/${id}`
    return fetch(URL, {method: 'DELETE'})
}

export const createTodo = (inputDoc) => {
    const URL = `http://localhost:3001/todos`
    return fetch(URL, {body:JSON.stringify(inputDoc), method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(res=>res.json())
}

export const updateTodo = (inputDoc,id) => {
    const URL = `http://localhost:3001/todos/${id}`

    return fetch(URL, {body: JSON.stringify(inputDoc), method: 'PUT',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(res=>res.json())

     //   Simple PUT request with a JSON body using fetch
        //    const requestOptions = {
        //     method: 'PUT',
        //     headers: {
        //       'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json'
        //      },
        //     body: JSON.stringify({ inputDoc, title: 'React PUT Request Example' })
        // };

  // return fetch(URL, requestOptions)

}
