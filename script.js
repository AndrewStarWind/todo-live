const $todoList = document.querySelector('.todos');
const $form = document.querySelector('.todo-add-form');
const $formInput = $form.querySelector('.todo-input')
const $searchInput = document.querySelector('.header__search');

const deleteTodo = (element) => {
    element.closest('.todo').remove();
}

$todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('item-actions_type_delete')) {
        return deleteTodo(event.target);
    }
});

$form.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = $formInput.value;
    const template = `
    <article class="todo" tabindex="0">
        <span class="todo__text">${value}</span>
        <div class="item-actions">
            <button type="button" class="item-actions__action">Complete</button>
            <button type="button" class="item-actions__action item-actions_type_delete">Delete</button>
        </div>
    </article>
    `;

    $todoList.insertAdjacentHTML('beforeend', template);
    $form.reset();
});

$searchInput.addEventListener('input', (event) => {
    const searchValue = event.target.value;

    if (searchValue.length < 2) {
        [...$todoList.querySelectorAll('.hide')].forEach(($todo) => $todo.classList.remove('hide'));
        return;
    }

    [...$todoList.querySelectorAll('.todo')].forEach(($todo) => {
        const todoText = $todo.querySelector('.todo__text').textContent;

        if (todoText.includes(searchValue)) {
            $todo.classList.remove('hide');
        } else {
            $todo.classList.add('hide');
        }
    });
});