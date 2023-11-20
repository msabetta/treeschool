function login() {
    const newTask = {
        content: 'Check out mockapi.io',
        completed: false,
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify(newTask)
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        // do something with the new task
        console.log(task);
    }).catch(error => {
        // handle error
        console.log(error);
    })
}

