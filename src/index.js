const normalStateDiv = document.getElementById('normal-state');

const activeStateDiv = document.getElementById('active-state');

const shareBtnNormal = normalStateDiv.querySelector('button');
const shareBtnActive = activeStateDiv.querySelector('button');
const tooltip = document.getElementById('tooltip');

function toggelShareOption() {
  const viewport = window.innerWidth;
  if (viewport > 800) {
    tooltip.classList.toggle('hidden');
  } else {
    normalStateDiv.classList.toggle('hidden');
    activeStateDiv.classList.toggle('hidden');
  }
}

shareBtnActive.addEventListener('click', toggelShareOption);
shareBtnNormal.addEventListener('click', toggelShareOption);
