const loadHome = () => {
    const content = document.getElementById('content')
    const div = document.createElement('div');
    div.innerHTML = `
        <p>content</p>
    `;
    content.appendChild(div);
};
export default loadHome;