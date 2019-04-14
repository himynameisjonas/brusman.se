import './app.scss'
import fitty from 'fitty';

document.documentElement.classList.add('js');

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  fitty('.fit');
})


