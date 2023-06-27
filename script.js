let counter = 0;
const action = (action) => {
  if (action === 'add') {
    counter = counter + 1;
  }
  if (action === 'subtract') {
    counter = counter - 1;
  }
  let target = document.getElementById('target');
  target.innerHTML = counter;
}