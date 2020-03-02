function crearTablero() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      var div = document.createElement("div");
      div.id = i + "" + j;
      div.addEventListener("click", mostrarNumero, true);
      tablero.appendChild(div);
    }
  }
}

var minas = realizaMatriz();

function realizaMatriz() {
  var tabla = [];
  for (var i = 0, i < 8; i++) {
    tabla[i] = [0,0,0,0,0,0,0,0];
  }
  return tabla;
}

function generarBombas(tablero) {
  var filas = 0;
  var columnas = 0;

  filas = Math.floor((Math.random()*7)+0);
  columnas = Math.floor((Math.random()*7)+0);

  for (var i = 0, i < 8; i++) {
    while (tablero[filas][columnas] == "*") {
      filas = Math.floor((Math.random()*7)+0);
      columnas = Math.floor((Math.random()*7)+0);
    }
    tablero[filas][columnas] = "*";
  }
}

function bombasAlrededor(tablero) {
  for (var  i = 0, i < 8; i++) {
    for (var  j = 0, j < 8; j++) {
      if (tablero[i][j] == "*") {
        if (i == 0 && j == 0) {
          colocaNumero(i, j, i + 1, j + 1, tablero);
        }
        else if (i == 0 && (j > 0 && j < 7)) {
          colocaNumero(i, j - 1, i + 1, j + 1, tablero);
        }
        else if (i == 0 && j == 7) {
          colocaNumero(i, j - 1, i + 1, j, tablero);
        }
        else if (j == 7 && (i > 0 && i < 7)) {
          colocaNumero(i - 1, j - 1, i + 1, j, tablero);
        }
        else if (i == 7 && j == 7) {
          colocaNumero(i - 1, j - 1, i , j, tablero);
        }
        else if (i == 7 && (j > 0 && j < 7)) {
          colocaNumero(i - 1, j - 1, i, j + 1, tablero);
        }
        else if (i == 7 && j == 0) {
          colocaNumero(i - 1, j, i, j + 1, tablero);
        }
        else if (j == 0 && (i > 0 && i < 7)) {
          colocaNumero(i - 1, j, i + 1, j + 1, tablero);
        } else {
          colocaNumero(i - 1, j - 1, i + 1, j +1, tablero);
        }
      }
    }
  }
}

function colocaNumero(vari, varj, fini, finj, tablero) {
  for(var i = vari; i i <= fini; i++) {
    for (var j = varj; j <= finj; j++) {
      if(tablero[i][j] != "*") {
        tablero[i][j] = (parseInt(tablero[i][j]) + 1);
      }
    }
  }
}

function abrxirAlrededor(xi,xj,tablero) {
  if (xi == 0 && xj == 0) {
    abrirAlrededor(xi, xj, xi + 1, xj + 1, tablero);
  }
  else if (xi == 0 && (xj > 0 && xj < 7)) {
    abrirAlrededor(xi, xj - 1, xi + 1, xj + 1, tablero);
  }
  else if (xi == 0 && xj == 7) {
    abrirAlrededor(xi, xj - 1, xi + 1, xj, tablero);
  }
  else if (xj == 7 && (xi > 0 && xi < 7)) {
    abrirAlrededor(xi - 1, xj - 1, xi + 1, xj, tablero);
  }
  else if (xi == 7 && xj == 7) {
    abrirAlrededor(xi - 1, xj - 1, xi , xj, tablero);
  }
  else if (xi == 7 && (xj > 0 && xj < 7)) {
    abrirAlrededor(xi - 1, xj - 1, xi, xj + 1, tablero);
  }
  else if (xi == 7 && xj == 0) {
    abrirAlrededor(xi - 1, xj, xi, xj + 1, tablero);
  }
  else if (xj == 0 && (xi > 0 && xi < 7)) {
    abrirAlrededor(xi - 1, xj, xi + 1, xj + 1, tablero);
  } else {
    abrirAlrededor(xi - 1, xj - 1, xi + 1, xj +1, tablero);
  }
}
