const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    alert(`form submitted; search = ${searchForm.search.value}; additional = ${searchForm.additional.value}`);
});