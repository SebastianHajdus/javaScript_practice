document.addEventListener("DOMContentLoaded", function(e) {

    console.log('dziala');

    var addTodoInput = document.querySelector('#todo-input'),
        addTodoBtn = document.querySelector('#add-todo-btn');

    addTodoBtn.addEventListener('click', function(e) {
        var inputValue = addTodoInput.value;
        alert(inputValue);
    });

});
