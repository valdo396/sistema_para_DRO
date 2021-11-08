const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const radio_nombre = document.getElementById("hombre");
const radio_mujer = document.getElementById("mujer");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{5,100}$/, // Letras y espacios, pueden llevar acentos.
	emision: /^(198[5-9]|199[0-9]|20[0-9]{2})\-(0[1-9]|1[1-2])\-(0[1-9]|[1-2][0-9]|3[0-1])/,//Fechas desde 1984 a 2099
	vigencia:/^(198[5-9]|199[0-9]|20[0-9]{2})\-(0[1-9]|1[1-2])\-(0[1-9]|[1-2][0-9]|3[0-1])/,//Fechas desde 1984 a 2099
	periodo:/^(198[5-9]|199[0-9]|20[0-9]{2})\/(0[1-9]|[1-9][0-9])$/, // Período iniciando por el año/numero concecutivo 01 a 99
	cp:/^[0-9]{5}$/, // 5 número restringir al itervalo de la CDMX.
	calle:/^[À-ÿ\w\s\#]{5,40}$/, // 40 letras para la calle
	exterior:/^\d{1,5}$/, // 1 a 5 números.
	interior:/^\d{1,5}$/, // 1 a 5 números.
	colonia:/[a-zA-ZÀ-ÿ\s\d\-]{1,5}$/, // Letras, tíldes, espacios, numeros, y guión medio 
	alcaldia:/^[Aa]zcapotzalco|[AaÁá]lvaro [Oo]breg[óo]n|[Bb]enito [jJ]u[aá]rez|[Cc]oyoac[aá]n|[Cu]uajimalpa de [Mm]orelos|[cC]uauht[ée]moc|[gg]ustavo A. [Mm]adero|[Ii]ztacalco|[Ii]ztapalapa|[mM]agdalena [Cc]ontreras|[mM]iguel [Mm]idalgo|[Mm]ilpa [tT]lta|[Tt]lalpan|[Tt]l[áa]huac|[vV]enustiano [cC]arranza|[xX]ochimilco$/, // alcaldias
	catastro:/^(([0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{3}\-[0-9]{1,2})|([0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{3})|([0-9]{12} *))$/, // 123-123-12-123-1
	tipos:/^Manifestaci[óo]n tipo "[BbCc]"|ESPECIALES y OTRAS RESPONSIVAS$/, // 1 a 5 números.
	manifes:/^No aplica|Obra nueva|Ampliación|Modificación|Reparación|Barda \(mayor de 2\.50 m\. de altura\)|Prórroga\, \(indicar \% avance\)|Uso y ocupación$/, // 1 a 5 números.
	licencias:/^No aplica|Edificaciones en suelo de conservación|Estaciones repetidoras de comunicación celular o inalámbrica|Instalaciones subterráneas o aéreas en la vía pública|Demolición|Excavaciones o cortes cuya profundidad sea mayor de 1m|Tapiales que invadan la acera en una medida superior a 0\.5 m|Obras o instalaciones temporales|Instalaciones o modificaciones en edificaciones existentes\(ascensores\, escaleras mecánicas\)$/, // 1 a 5 números.
	uso:/^[\w\s.,[\]{}()ñÑ]{1,500}$/, // 1 a 500 letras, números, puntos, comas, [], {}, () ñ y Ñ
	m_predio:/^\d{1,6}$/, // 1 a 5 números.
	m_responsiva:/^\d{1,10}$/, // 1 a 5 números.
	snb:/^\d{1,5}$/, // 1 a 5 números.
	sotanos:/^\d{1,5}$/, // 1 a 5 números.
	viviendas:/^\d{1,5}$/, // 1 a 5 números
	cajones:/^\d{1,5}$/, // 1 a 5 números.
	conservacion:/^S[Ii]|si|N[Oo]|no$/, // Si o No
	estaciones:/^\d{1,5}$/, // 1 a 5 números.
	antenas:/^\d{1,5}$/, // 1 a 5 números.
	observaciones:/^[\w\s.,d[\]{}()ñÑ]{1,500}$/, // 1 a 500 letras, números, puntos, comas, [], {}, () ñ y Ñ
	razon:/^[a-zA-ZÀ-ÿ\s]{3,90}$/, // Letras y espacios, pueden llevar acentos.
	propietario:/^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	prop_apellido_1:/^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	prop_apellido_2:/^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	telefono: /^\d{7,14}$/, // 7 a 14 números.
	rfc:/^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
	registro: /^\d{1,5}$/, // 1 a 5 números.
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/ // Letras, numeros, guion y guion_bajo
}

//console.log("Nombre = "+radio_nombre);
//console.log("Estado = "+ radio_nombre.checked);
//console.log("Tipo = "+ typeof(radio_nombre.checked) );// boolean


function moral() {
	console.log("Persona Moral");
	document.getElementById("razon").classList.remove('ocultar');
	document.getElementById("propietario").classList.add('ocultar');
	document.getElementById("prop_apellido_1").classList.add('ocultar');	
	document.getElementById("prop_apellido_2").classList.add('ocultar');
}

function fisica() {
	console.log("Persona Fisica");	
	document.getElementById("propietario").classList.remove('ocultar');
	document.getElementById("prop_apellido_1").classList.remove('ocultar');	
	document.getElementById("prop_apellido_2").classList.remove('ocultar');
	document.getElementById("razon").classList.add('ocultar');
}

function mayus(e) {
    var tecla=e.value;
    var tecla2=tecla.toUpperCase();
    document.getElementById("rfc").value=tecla2;
}
	

//document.getElementById('enviar').disabled = false;

const campos = {
	nombre: false,
	apellido_1: false,
	apellido_2: false,
	password: false,
	correo: false,
	registro: false
}


const validarFormulario = (e) => {
	console.log(e.target.name);
    switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case "emision":
			console.log("valor = "+e.target.value);
			validarCampo(expresiones.emision, e.target, 'emision');
		break;

		case "vigencia":
			validarCampo(expresiones.vigencia, e.target, 'vigencia');
		break;

		case "periodo":
			validarCampo(expresiones.periodo, e.target, 'periodo');
		break;

		case "cp":
			validarCampo(expresiones.cp, e.target, 'cp');
		break;

		case "calle":
			validarCampo(expresiones.calle, e.target, 'calle');
		break;

		case "exterior":
			validarCampo(expresiones.exterior, e.target, 'exterior');
		break;
		
		case "interior":
			validarCampo(expresiones.interior, e.target, 'interior');
		break;

		case "alcaldia":
			validarCampo(expresiones.alcaldia, e.target, 'alcaldia');
		break;

		case "colonia":
			validarCampo(expresiones.colonia, e.target, 'colonia');
		break;

		case "catastro":
			validarCampo(expresiones.catastro, e.target, 'catastro');
		break;
		
		case "tipos":
			validarCampo(expresiones.tipos, e.target, 'tipos');
		break;

		case "manifes":
			validarCampo(expresiones.manifes, e.target, 'manifes');
		break;
		
		case "licencias":
			validarCampo(expresiones.licencias, e.target, 'licencias');
		break;

		case "uso":
			validarCampo(expresiones.uso, e.target, 'uso');
		break;

		case "m_predio":
			validarCampo(expresiones.m_predio, e.target, 'm_predio');
		break;

		case "m_responsiva":
			validarCampo(expresiones.m_responsiva, e.target, 'm_responsiva');
		break;

		case "snb":
			validarCampo(expresiones.snb, e.target, 'snb');
		break;

		case "sotanos":
			validarCampo(expresiones.sotanos, e.target, 'sotanos');
		break;

		case "viviendas":
			validarCampo(expresiones.viviendas, e.target, 'viviendas');
		break;

		case "cajones":
			validarCampo(expresiones.cajones, e.target, 'cajones');
		break;

		case "conservacion":
			validarCampo(expresiones.conservacion, e.target, 'conservacion');
		break;

		case "estaciones":
			validarCampo(expresiones.estaciones, e.target, 'estaciones');
		break;

		case "antenas":
			validarCampo(expresiones.antenas, e.target, 'antenas');
		break;

		case "observaciones":
			validarCampo(expresiones.observaciones, e.target, 'observaciones');
		break;

		case "razon":
			validarCampo(expresiones.razon, e.target, 'razon');
		break;

		case "propietario":
			validarCampo(expresiones.propietario, e.target, 'propietario');
		break;

		case "prop_apellido_1":
			validarCampo(expresiones.prop_apellido_1, e.target, 'prop_apellido_1');
		break;

		case "prop_apellido_2":
			validarCampo(expresiones.prop_apellido_2, e.target, 'prop_apellido_2');
		break;

		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;

		case "rfc":
			validarCampo(expresiones.rfc, e.target, 'rfc');
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



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	//e.preventDefault();
	/*
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
	}*/
});