import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const loadHome = () => {
  const content = document.getElementById("content");
  
  content.innerHTML = `
    <aside>
      <ul>
        <li>
            <button type="button" id="start">Start</button>
        </li>
        <li>
            <button type="button" id="travel">Travel</button>
        </li>
        <li>
            <button type="button" id="clear">Clear</button>
        </li>
      </ul>
    </aside>
    <main>Main</main>
  `;
  
  const start = document.querySelector('#start');
  const travel = document.querySelector('#travel');
  const clear = document.querySelector('clear');
  start.addEventListener('click', (event) => {
      toastr.info('Click on any one of the squares to place the knight then press again to select the end point then press travel button to see the travel path',);
  });toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
};

export default loadHome;
