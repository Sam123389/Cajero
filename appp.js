let cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];
    
  let cuentaSeleccionada = "";
  let claveIngresada = "";
  
  let seccionCuentas = document.getElementById("seccion-cuentas");
  let seccionClave = document.getElementById("seccion-clave");
  let seccionOpciones = document.getElementById("seccion-opciones");
  let seccionConsultaSaldo = document.getElementById("consulta-saldo");
  let seccionIngresarMonto = document.getElementById("ingresar-monto");
  let seccionRetiroMonto = document.getElementById("retiro-monto");
  let seccionResultados = document.getElementById("seccion-resultados");
  let btnCuentaSeleccionada = document.getElementById("btn-cuenta-seleccionada");
  let btnSubirClave = document.getElementById("btn-subir-clave");
  let btnSaldo = document.getElementById("btn-saldo");
  let btnMonto = document.getElementById("btn-monto");
  let btnRetiro = document.getElementById("btn-retiro");
  let btnVolverOpciones1 = document.getElementById("btn-volver-opciones1");
  let btnVolverOpciones2 = document.getElementById("btn-volver-opciones2");
  let btnVolverOpciones3 = document.getElementById("btn-volver-opciones3");
  let btnVolverOpciones4 = document.getElementById("btn-volver-opciones4");
  let saldoActual = document.getElementById("saldo-actual");
  let montoIngresado = document.getElementById("monto-ingresado");
  let montoRetirado = document.getElementById("monto-retirado");
  let resultado = document.getElementById("resultado");
  let btnIngresoMonto = document.getElementById("btn-ingreso-monto");
  let btnRetiroMonto = document.getElementById("btn-retiro-monto");
  
  seccionCuentas.style.display = "none";
  seccionClave.style.display = "none";
  seccionOpciones.style.display = "none";
  seccionConsultaSaldo.style.display = "none";
  seccionIngresarMonto.style.display = "none";
  seccionRetiroMonto.style.display = "none";
  seccionResultados.style.display = "none";
  
  seccionCuentas.style.display = "block";
  
  btnCuentaSeleccionada.addEventListener("click", function() {
    cuentaSeleccionada = document.getElementById("cuenta-seleccionada").value;
    seccionCuentas.style.display = "none";
    seccionClave.style.display = "block";
  });
  function validarPassword(clave) {
    let cuenta = cuentas.find(function(c) {
      return c.nombre === cuentaSeleccionada;
    });
  
    if (cuenta) {
      if (cuenta.nombre === "Mali" && clave === "1111") {
        return true;
      } else if (cuenta.nombre === "Gera" && clave === "2222") {
        return true;
      } else if (cuenta.nombre === "Maui" && clave === "3333") {
        return true;
      }
    }
    return false;
  }
    
  btnSubirClave.addEventListener("click", function() {
    claveIngresada = document.getElementById("claveingresada");
  
    if (validarPassword(claveIngresada.value)) {
      seccionClave.style.display = "none";
      seccionOpciones.style.display = "block";
    } else {
      mostrarMensajeValidacion("Contraseña inválida. Intenta nuevamente.");
    }
  });
  
  btnSaldo.addEventListener("click", function() {
    seccionOpciones.style.display = "none";
    seccionConsultaSaldo.style.display = "block";
    mostrarSaldo();
  });
  
btnMonto.addEventListener("click", function() {
  seccionOpciones.style.display = "none";
  seccionIngresarMonto.style.display = "block";
  });

btnIngresoMonto.addEventListener("click", function() {
    let monto = parseFloat(montoIngresado.value);

    if (monto && monto > 0) {
      if (monto <= 990) {
        let cuenta = cuentas.find(function(c) {
          return c.nombre === cuentaSeleccionada;
        });

        if (cuenta) {
          let saldoAnterior = cuenta.saldo;
          cuenta.saldo += monto;
          saldoActual.textContent = "Saldo actual: $" + cuenta.saldo;
        }
      } else {
        mostrarMensajeValidacion("El monto máximo para ingresar es $990.");
      }
    } else {
      mostrarMensajeValidacion("Ingresa un monto válido.");
    }
    seccionIngresarMonto.style.display = "none";
    seccionResultados.style.display = "block";
  });

  btnRetiro.addEventListener("click", function() {
    seccionOpciones.style.display = "none";
    seccionRetiroMonto.style.display = "block";
  });
  
  function mostrarSaldo() {
    let cuenta = cuentas.find(function(c) {
      return c.nombre === cuentaSeleccionada;
    });
  
    if (cuenta) {
      saldoActual.textContent = "Saldo actual: $" + cuenta.saldo;
    }
  }
  
  function actualizarSaldo(monto) {
    let cuenta = cuentas.find(function(c) {
      return c.nombre === cuentaSeleccionada;
    });
    if (cuenta) {
      cuenta.saldo = cuenta.saldo;
      saldoActual.textContent = "Saldo actual: $" + cuenta.saldo;
    }
  }
    
  btnIngresoMonto.addEventListener("click", function() {
    let monto = parseFloat(montoIngresado.value);  
    if (monto && monto > 0) {
      if (monto <= 990) {
        let cuenta = cuentas.find(function(c) {
          return c.nombre === cuentaSeleccionada;
        });
  
        if (cuenta) {
          let saldoAnterior = cuenta.saldo;
          cuenta.saldo = monto;
          saldoActual.textContent = "Saldo actual: $" + cuenta.saldo;
          resultado.textContent = "Monto ingresado: $" + monto + " | Saldo actual: $"+ cuenta.saldo;
        }
      } else {
        mostrarMensajeValidacion("El monto máximo para ingresar es $990.");
      }
    } else {
      mostrarMensajeValidacion("Ingresa un monto válido.");
    }
  
    seccionIngresarMonto.style.display = "none";
    seccionResultados.style.display = "block";
  });
  


  function retirarMonto(monto) {
    let cuenta = cuentas.find(function(c) {
      return c.nombre === cuentaSeleccionada;
    });
  
    if (cuenta) {
      if (cuenta.saldo >= monto) {
        cuenta.saldo -= monto;
        saldoActual.textContent = "Saldo actual: $" + cuenta.saldo;
      } else {
        mostrarMensajeValidacion("No tienes suficiente saldo para retirar esa cantidad.");
      }
    }
  }
  
  btnRetiroMonto.addEventListener("click", function() {
    let monto = parseFloat(montoRetirado.value);
  
    if (monto && monto > 0) {
      if (monto <= 990) {
        let cuenta = cuentas.find(function(c) {
          return c.nombre === cuentaSeleccionada;
        });
  
        if (cuenta) {
          if (cuenta.saldo >= monto) {
            cuenta.saldo -= monto;
            saldoActual.textContent = "Saldo actual: $" + cuenta.saldo;
            resultado.textContent = "Monto retirado: $" + monto + " | Saldo actual: $" + cuenta.saldo;
          } else {
            mostrarMensajeValidacion("No tienes suficiente saldo para retirar esa cantidad.");
          }
        }
      } else {
        mostrarMensajeValidacion("El monto máximo para retirar es $990.");
      }
    } else {
      mostrarMensajeValidacion("Ingresa un monto válido.");
    }
  
    seccionRetiroMonto.style.display = "none";
    seccionResultados.style.display = "block";
  });
  
  function mostrarMensajeValidacion(mensaje) {
    let mensajeValidacion = document.getElementById("mensaje-validacion");
    let mensajeValidacionmonto = document.getElementById("mensaje-validacion-monto");
    let mensajeValidacionretiro = document.getElementById("mensaje-validacion-retiro");
    mensajeValidacion.textContent = mensaje;
  }
  function mostrarMensajeResultado(mensaje) {
    resultado.textContent = mensaje;
  }
  
  btnVolverOpciones1.addEventListener("click", function() {
    seccionConsultaSaldo.style.display = "none";
    seccionOpciones.style.display = "block";
  });
  
  btnVolverOpciones2.addEventListener("click", function() {
    seccionIngresarMonto.style.display = "none";
    seccionOpciones.style.display = "block";
  });
  
  btnVolverOpciones3.addEventListener("click", function() {
    seccionRetiroMonto.style.display = "none";
    seccionOpciones.style.display = "block";
  });
  
  btnVolverOpciones4.addEventListener("click", function() {
    seccionResultados.style.display = "none";
    seccionOpciones.style.display = "block";
  });
  