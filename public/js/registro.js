const formulario = document.getElementById('formulario');
const newLocal = '#formulario input';
const inputs = document.querySelectorAll(newLocal);

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido_paterno: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido_materno: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@gmail+\.com+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 números.
	registro: /^\d{1,5}$/, // 1 a 5 números.
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/ // Letras, numeros, guion y guion_bajo
}

const campos = {
	nombre: false,
	apellido_1: false,
	apellido_2: false,
	password: false,
	correo: false,
	registro: false
}


const validarFormulario = (e) => {
	console.log("e.taget.name: "+e.target.name);
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case "apellido_1":
			validarCampo(expresiones.apellido_paterno, e.target, 'apellido_1');
		break;

		case "apellido_2":
			validarCampo(expresiones.apellido_materno, e.target, 'apellido_2');
		break;

		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

		case "password":
			validarCampo(expresiones.password, e.target, 'password');//el otro campo es name="password2"
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		
		case "registro":
			validarCampo(expresiones.registro, e.target, 'registro');
			//document.getElementById('enviar').disabled = false;
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value ){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		if(inputPassword1.value == ''){
			document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
			document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
			document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
			document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
			document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');

		}else{
			document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
			document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
			document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
			document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
			document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
			campos['password'] = true;
		}
		
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	//e.preventDefault();
	
	const terminos = document.getElementById('terminos');
	
	if(campos.nombre && campos.apellido_1 && campos.apellido_2 && campos.password && campos.correo && campos.registro && terminos.checked ){
		//formulario.reset();
		
		

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
			formulario.reset();
		}, 5000);
		
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

