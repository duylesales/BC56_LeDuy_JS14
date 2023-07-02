// Bài 1 - Buổi 14

function reA() {
  var num1 = Number(document.getElementById("so-t1").value);
  var num2 = Number(document.getElementById("so-t2").value);
  var num3 = Number(document.getElementById("so-t3").value);

  // Hoán đổi thứ tự 3 số
  var soT1, soT2, soT3;

  if (num1 <= num2 && num1 <= num3) {
    soT1 = num1;
    if (num2 <= num3) {
      soT2 = num2;
      soT3 = num3;
    } else {
      soT2 = num3;
      soT3 = num2;
    }
  } else if (num2 <= num1 && num2 <= num3) {
    soT1 = num2;
    if (num1 <= num3) {
      soT2 = num1;
      soT3 = num3;
    } else {
      soT2 = num3;
      soT3 = num1;
    }
  } else {
    soT1 = num3;
    if (num1 <= num2) {
      soT2 = num1;
      soT3 = num2;
    } else {
      soT2 = num2;
      soT3 = num1;
    }
  }

  document.getElementById("kq1").innerHTML = `<h3> ${
    soT1 + ", " + soT2 + ", " + soT3
  } </h3>`;
}

//Bài 2 - buổi 14

function greeting() {
  var _Who = document.getElementById("who").value;

  switch (_Who) {
    case "B": {
      _Who = "Xin chào Bố";
      break;
    }
    case "M": {
      _Who = "Xin chào Mẹ";
      break;
    }
    case "A": {
      _Who = "Xin chào Anh trai";
      break;
    }
    case "E": {
      _Who = "Xin chào Em gái";
      break;
    }
  }

  document.getElementById(
    "kq2"
  ).innerHTML = `<h2 class="mt-3 alert-warning">${_Who}</h2>`;
}

// Bài 3 - buổi 14

function kq3() {
  var soThu1 = Number(document.getElementById("so-thu-1").value);
  var soThu2 = Number(document.getElementById("so-thu-2").value);
  var soThu3 = Number(document.getElementById("so-thu-3").value);

  var soLe = 0;
  var soChan = 0;

  if (soThu1 % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }

  if (soThu2 % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }

  if (soThu3 % 2 === 0) {
    soChan++;
  } else {
    soLe++;
  }

  document.getElementById("kq3").innerHTML = `<h2 class= "mt-3 alert-warning">${
    "Số lẻ: " + soLe + "<br>Số chẵn: " + soChan
  }</h2>`;
}

// Bài 4 - buổi 14

function kq4() {
  var canhA = Number(document.getElementById("cA").value);
  var canhB = Number(document.getElementById("cB").value);
  var canhC = Number(document.getElementById("cC").value);

  if (canhA === canhB && canhB === canhC) {
    var tamGiac = "Tam giác đều";
  } else if (canhA === canhB || canhA === canhC || canhB === canhC) {
    var tamGiac = "Tam giác cân";
  } else if (
    canhA * canhA + canhB * canhB === canhC * canhC ||
    canhA * canhA + canhC * canhC === canhB * canhB ||
    canhB * canhB + canhC * canhC === canhA * canhA
  ) {
    var tamGiac = "Tam giác vuông";
  } else {
    var tamGiac = "Tam giác thường";
  }

  document.getElementById(
    "kq4"
  ).innerHTML = `<h3 class="mt-4 alert-warning">${tamGiac} </h3>`;
}
