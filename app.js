let create_array = (total, numero) => Array.from(Array(total), () => number_random(numero));
let number_random = (number) => Math.round(Math.random() * number);
let mod = (dividendo, divisor) => Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);

function cpf() {
  let total_array = 9;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = create_array(total_array, n);

  let d1 =
    n9 * 2 +
    n8 * 3 +
    n7 * 4 +
    n6 * 5 +
    n5 * 6 +
    n4 * 7 +
    n3 * 8 +
    n2 * 9 +
    n1 * 10;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;

  let d2 =
    d1 * 2 +
    n9 * 3 +
    n8 * 4 +
    n7 * 5 +
    n6 * 6 +
    n5 * 7 +
    n4 * 8 +
    n3 * 9 +
    n2 * 10 +
    n1 * 11;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;

  if (document.form_main.cpf.checked)
    return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
}

function cnpj() {
  let total_array = 8;
  let n = 9;
  let [n1, n2, n3, n4, n5, n6, n7, n8] = create_array(total_array, n);
  let n9 = 0;
  let n10 = 0;
  let n11 = 0;
  let n12 = 1;

  let d1 =
    n12 * 2 +
    n11 * 3 +
    n10 * 4 +
    n9 * 5 +
    n8 * 6 +
    n7 * 7 +
    n6 * 8 +
    n5 * 9 +
    n4 * 2 +
    n3 * 3 +
    n2 * 4 +
    n1 * 5;
  d1 = 11 - mod(d1, 11);
  if (d1 >= 10) d1 = 0;

  let d2 =
    d1 * 2 +
    n12 * 3 +
    n11 * 4 +
    n10 * 5 +
    n9 * 6 +
    n8 * 7 +
    n7 * 8 +
    n6 * 9 +
    n5 * 2 +
    n4 * 3 +
    n3 * 4 +
    n2 * 5 +
    n1 * 6;
  d2 = 11 - mod(d2, 11);
  if (d2 >= 10) d2 = 0;

  if (document.form_main.cnpj.checked)
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`;
}

function rg() {
  let total_array = 8;
  let n = 8;
  let [n1, n2, n3, n4, n5, n6, n7, n8] = create_array(total_array, n);

  let d1 =
    n8 * 2 + n7 * 3 + n6 * 4 + n5 * 5 + n4 * 6 + n3 * 7 + n2 * 8 + n1 * 9;
  d1 = 10 - mod(d1, 10);
  if (d1 >= 9) d1 = 0;

  // let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  // d2 = 11 - (mod(d2, 11));
  // if (d2 >= 10) d2 = 0;

  if (document.form_main.rg.checked)
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${d1}`;
}

function gerar() {
  let value;
  if (document.form_main.tipo[0].checked) {
    value = cpf();
  } else if (document.form_main.tipo[1].checked) {
    value = cnpj();
  } else if (document.form_main.tipo[2].checked) {
    value = rg();
  }

  document.form_main.numero.value = value;
}

function clickElement() {
  var idGeneratedElement = document.getElementById("numero");

  copyResult(idGeneratedElement)
}

function copyResult(idGeneratedElement) {
  
  event.preventDefault();
  if (idGeneratedElement.value == "") {
    Toastify({
      text: "Nenhum valor gerado!",
      className: "info",
      style: {
        color: "var(--default-white)",
        border: "1px solid var(--black-color)",
        background: "var(--black-color)",
      }
    }).showToast();
  } else {
    idGeneratedElement.select();
    idGeneratedElement.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(idGeneratedElement.value);
    
    Toastify({
      text: "Copiado para a área de transferência!",
      className: "info",
      style: {
        color: "var(--default-white)",
        border: "1px solid var(--black-color)",
        background: "var(--black-color)",
      }
    }).showToast();
  }
}

clickElement();