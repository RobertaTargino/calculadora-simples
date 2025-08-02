function inserir(valor) {
  document.getElementById('display').value += valor;
}

function limpar() {
  document.getElementById('display').value = '';
}

function inverter() {
  let display = document.getElementById('display');
  if (display.value) {
    display.value = parseFloat(display.value) * -1;
  }
}

function calcular() {
  let display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Erro';
  }
}
