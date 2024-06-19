(function() {
    const toDoListArray = [];
    const form = document.querySelector('.form');
    const input = document.querySelector('.form__input');
    const ul = document.querySelector('.toDoList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const itemId = Date.now().toString();
        const toDoItem = input.value.trim();
        if (toDoItem !== '') {
            addItemToDOM(itemId, toDoItem);
            addItemToArray(itemId, toDoItem);
            input.value = '';
        }
    });

    ul.addEventListener('click', function(event) {
        const id = event.target.getAttribute('data-id');
        if (id) {
            removeItemFromDOM(id);
            removeItemFromArray(id);
        }
    });

    function addItemToDOM(itemId, toDoItem) {
        const li = document.createElement('li');
        li.setAttribute('data-id', itemId);
        li.textContent = toDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        toDoListArray.push({ itemId, toDoItem });
    }

    function removeItemFromDOM(id) {
        const li = document.querySelector(`[data-id="${id}"]`);
        if (li) {
            ul.removeChild(li);
        }
    }

    function removeItemFromArray(id) {
        const index = toDoListArray.findIndex(item => item.itemId === id);
        if (index !== -1) {
            toDoListArray.splice(index, 1);
        }
    }
})();
