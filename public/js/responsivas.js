const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const radio_nombre = document.getElementById("hombre");
const radio_mujer = document.getElementById("mujer");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s\d\-\:\.\!\/]{5,100}$/, // Letras y espacios, pueden llevar acentos.
	emision: /^(198[5-9]|199[0-9]|20[0-9]{2})\-(0[1-9]|1[1-2])\-(0[1-9]|[1-2][0-9]|3[0-1])/,//Fechas desde 1984 a 2099
	vigencia:/^\s$|\-$|(198[5-9]|199[0-9]|20[0-9]{2})\-(0[1-9]|1[1-2])\-(0[1-9]|[1-2][0-9]|3[0-1])/,//Fechas desde 1984 a 2099
	periodo:/^(198[5-9]|199[0-9]|20[0-9]{2})\/(0[1-9]|[1-9][0-9])$/, // Período iniciando por el año/numero concecutivo 01 a 99
	cp:/^[0-9]{5}$/, // 5 número restringir al itervalo de la CDMX.
	calle:/^[À-ÿ\w\s\#\.]{5,40}$/, // 40 letras para la calle
	exterior:/^[\.\-\d]{1,5}$/, // 1 a 5 números.
	interior:/^[\.\-\d]{1,5}$/, // 1 a 5 números.
	colonia:/[a-zA-ZÀ-ÿ\s\d\-]{1,5}$/, // Letras, tíldes, espacios, numeros, y guión medio 
	alcaldia:/^[Aa]zcapotzalco|[AaÁá]lvaro [Oo]breg[óo]n|[Bb]enito [jJ]u[aá]rez|[Cc]oyoac[aá]n|[Cu]uajimalpa de [Mm]orelos|[cC]uauht[ée]moc|[gG]ustavo A\. [Mm]adero|[Ii]ztacalco|[Ii]ztapalapa|[mM]agdalena [Cc]ontreras|[mM]iguel [Mm]idalgo|[Mm]ilpa [tT]lta|[Tt]lalpan|[Tt]l[áa]huac|[vV]enustiano [cC]arranza|[xX]ochimilco$/, // alcaldias
	catastro:/^(([0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{3}\-[0-9]{1,2})|([0-9]{3}\-[0-9]{3}\-[0-9]{2}\-[0-9]{3})|([0-9]{12} *))$/, // 123-123-12-123-1
	tipos:/^Manifestaci[óo]n tipo "[BbCc]"|ESPECIALES y OTRAS RESPONSIVAS$/, // 1 a 5 números.
	manifes:/^No aplica|Obra nueva|Ampliación|Modificación|Reparación|Barda \(mayor de 2\.50 m\. de altura\)|Prórroga\, \(indicar \% avance\)|Uso y ocupación$/, // 1 a 5 números.
	licencias:/^No aplica|Edificaciones en suelo de conservación|Estaciones repetidoras de comunicación celular o inalámbrica|Instalaciones subterráneas o aéreas en la vía pública|Demolición|Excavaciones o cortes cuya profundidad sea mayor de 1m|Tapiales que invadan la acera en una medida superior a 0\.5 m|Obras o instalaciones temporales|Instalaciones o modificaciones en edificaciones existentes\(ascensores\, escaleras mecánicas\)|Registro de obra ejecutada|Licencia de anuncio|Const\. de Seg\. Estructural|Vo\. Bo\. de Seg\. y Operaci\ón|Desmantelamiento|Aviso de terminación de obra|Otros \(en observaciones\)$/, // 1 a 5 números.
	uso:/^[\w\s.,[\]{}()ñÑÀ-ÿ]{1,500}$/, // 1 a 500 letras, números, puntos, comas, [], {}, () ñ y Ñ
	m_predio:/^[\.\-\d]{1,6}$/, // 1 a 5 números.
	m_responsiva:/^[\.\-\d]{1,10}$/, // 1 a 5 números.
	snb:/^[\.\-\d]{1,5}$/, // 1 a 5 números.
	sotanos:/^[\.\-\d]{1,5}$/, // 1 a 5 números.
	viviendas:/^[\.\-\d]{1,5}$/, // 1 a 5 números
	cajones:/^[\.\-\d]{1,5}$/, // 1 a 5 números.
	conservacion:/^S[Ii]|si|N[Oo]|no$/, // Si o No
	estaciones:/^[\.\-\d]{1,5}$/, // 1 a 5 números.
	antenas:/^[\.\-\d]{1,5}$/, // 1 a 5 números.
	observaciones:/^[\#\%\w\s\.\,d[\]{}()ñÑ]{1,500}$/, // 1 a 500 letras, números, puntos, comas, [], {}, () ñ y Ñ
	razon:/^[\.\-a-zA-ZÀ-ÿ\s]{3,90}$/, // Letras y espacios, pueden llevar acentos.
	propietario:/^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	prop_apellido_1:/^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	prop_apellido_2:/^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	telefono: /^[\d\-\s]{8,11}$/, // 8 a 11 números.
	rfc:/^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,// validar correo electronico
	propietario_1:/^[\.\-a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	registro: /^\d{1,5}$/, // 1 a 5 números.
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	ubicacion:/^[a-zA-ZÀ-ÿ\s\d\-\:\.\!]{5,100}$/ // Letras y espacios, pueden llevar acentos.
}

//console.log("Nombre = "+radio_nombre);
//console.log("Estado = "+ radio_nombre.checked);
//console.log("Tipo = "+ typeof(radio_nombre.checked) );// boolean


function moral() {
	console.log("Persona Moral");
	document.getElementById("grupo__razon").classList.remove('ocultar');
	document.getElementById("grupo__propietario").classList.add('ocultar');
	document.getElementById("grupo__prop_apellido_1").classList.add('ocultar');	
	document.getElementById("grupo__prop_apellido_2").classList.add('ocultar');
}

function fisica() {
	console.log("Persona Fisica");	
	document.getElementById("grupo__propietario").classList.remove('ocultar');
	document.getElementById("grupo__prop_apellido_1").classList.remove('ocultar');	
	document.getElementById("grupo__prop_apellido_2").classList.remove('ocultar');
	document.getElementById("grupo__razon").classList.add('ocultar');
}
let bandera=false;
function archivo() {
	if(bandera==false){
		console.log("ingresar archivo");	
		document.getElementById("formulario1").classList.remove('ocultar');
		document.getElementById("legend_archivo").classList.remove('ocultar');		
		bandera=true;
	}else{
		console.log("ingresar archivo");	
		document.getElementById("formulario1").classList.add('ocultar');
		document.getElementById("legend_archivo").classList.add('ocultar');
		bandera=false;
	}
	
}
//Funcion para convertir mayusculas todo lo que se tenga Input RFC
function mayus(e) {
    var tecla=e.value;
    var tecla2=tecla.toUpperCase();
    document.getElementById("rfc").value=tecla2;
}
	

//document.getElementById('enviar').disabled = false;
const campos = {
	nombre: false,
	emision: false,
	vigencia: false,
	periodo: false,
	cp: false,
	calle: false,
	exterior: false,
	interior: false,
	alcaldia: false,
	colonia: false,
	catastro: false,
	tipos: false,
	manifes: false,
	licencias: false,
	uso: false,
	m_predio: false,
	m_responsiva: false,
	snb: false,
	sotanos: false,
	viviendas: false,
	cajones: false,
	conservacion: false,
	estaciones: false,
	antenas: false,
	observaciones: false,
	razon: false,
	propietario: false,
	prop_apellido_1: false,
	prop_apellido_2: false,
	telefono: false,
	rfc: false,
	ubicacion:false,
	propietario_1:false
}


const validarFormulario = (e) => {
	console.log(e.target.name);
    switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;

		case "emision":
			validarCampo(expresiones.emision, e.target, 'emision');
		break;

		case "vigencia":
			/*emi=new Date(document.getElementById('emision').value);
			vig=new Date(document.getElementById('vigencia').value)
			if(emi>=vig){
				console.log("emision es mayor o igual a vigencia");
			}*/
			validarCampo(expresiones.vigencia, e.target, 'vigencia');
			//console.log("valor = "+e.target.value);.getFullYear()
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

		case "ubicacion":
			validarCampo(expresiones.ubicacion, e.target, 'ubicacion');
		break;

		case "propietario_1":
			validarCampo(expresiones.propietario_1, e.target, 'propietario_1');
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

function foco(idElemento){
	document.getElementById(idElemento).focus();
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
const imges = document.querySelectorAll('#tabla img');
imges.forEach((imgs) => {
	imgs.addEventListener('click', validarFormulario);
});






let salida_form=false;
function enviar_formulario(){
	if(campos.nombre==true ){
		if(campos.emision==true){
			if(campos.periodo==true){
				if(campos.cp==true){
					//&& campos.apellido_1 && campos.apellido_2 && campos.password && campos.correo && campos.registro
					// Validar con los elementos del reglamento
					//Validacion de espacio libre== m_predio m_responsiva
					let a_nombre=document.getElementById('nombre').value;
					let a_emision=document.getElementById('emision').value;
					let a_calle=document.getElementById('calle').value;
					let a_interi=document.getElementById('interior').value;
					let a_exteri=document.getElementById('exterior').value;
					let a_coloni=document.getElementById('colonia').value;
					let a_alcald=document.getElementById('alcaldia').value;
					let a_cp=document.getElementById('cp').value;
					let a_uso=document.getElementById('uso').value;
					let a_razon=document.getElementById('razon').value;
					let a_pro=document.getElementById('propietario').value;
					let a_ape1=document.getElementById('prop_apellido_1').value;
					let a_ape2=document.getElementById('prop_apellido_2').value;
					let a_cajones=document.getElementById('cajones').value;
					let a_tipos=document.getElementById('tipos').value;
					console.log("Tipo: "+typeof(a_cajones)+" Valor: "+a_cajones);

					let a_m_predio=parseFloat(document.getElementById('m_predio').value);
					let a_m_responsiva=parseFloat(document.getElementById('m_responsiva').value);
					let a_snb=parseFloat(document.getElementById('snb').value);
					let a_bnb=parseFloat(document.getElementById('sotanos').value);
					let a_factor=a_snb+a_bnb;
					console.log("factor= "+a_factor);
					let b_predio=((a_m_predio)-(a_m_predio*(0.25)))*a_factor;
					console.log("Calcúlo= "+b_predio);
					if(salida_form==false&&b_predio<a_m_responsiva){
						document.getElementById('superficie_cab').classList.remove('ocultar');
						document.getElementById('superficie_cab').innerText=`
						Los ${a_m_responsiva}m² de la responsiva no puede ser mayor a los : ${b_predio.toFixed(2)}m² del predio
						Teniendo ${a_snb} niveles y ${a_bnb} sotanos.
						Estas medidas incumplen con la Norma General de Ordenamiento 4 (30% de área libre).
						Para mas información consulte la sección de "Leyes y Reglamentos". 
						`;
						document.getElementById('uso_cab').classList.remove('ocultar');
						document.getElementById('uso_cab').innerText=`
						Segun el Reglamento de Construcciones para el Distrito Federal en su artículo 230 dice:
						Ningún inmueble podrá utilizarse para un uso diferente del autorizado...
						Para mas información consulte la sección de "Leyes y Reglamentos". 
						`;
						foco('m_predio');
						//console.log("El predio no puede ser mayor a la responsiva= "+b_predio+' > '+a_m_responsiva);
						if(a_cajones=='0'||a_cajones=='-'){
							document.getElementById('estacionamiento_cab').classList.remove('ocultar');
							document.getElementById('estacionamiento_cab').innerText=`
							Segun la Norma Técnica Complementaria para el Proyecto Arquitectónico señala:
							las edificaciones deberán contar con cierto número de estacionamientos...
							Para mas información consulte la sección de "Leyes y Reglamentos". 
							`;
							foco('cajones');
						}
						if(a_tipos=='Manifestación tipo "B"'){
							document.getElementById('tipos_cab').classList.remove('ocultar');
							document.getElementById('tipos_cab').innerText=`
							Segun el RCDF en su artículo 51:
							Establece los m² permitidos para una Manifestación tipo B...
							Para mas información consulte la sección de "Leyes y Reglamentos". 
							`;
							foco('tipos');
						}else{
							if(a_tipos=='Manifestación tipo "C"'){
								document.getElementById('tipos_cab').classList.remove('ocultar');
								document.getElementById('tipos_cab').innerText=`
								Segun el RCDF en su artículo 51:
								Establece los m² permitidos para una Manifestación tipo C...
								Para mas información consulte la sección de "Leyes y Reglamentos". 
								`;
								foco('tipos');
							}
						}
						salida_form=true;
					}else{//
						console.log("FORMULARIO ENVIADO");
						let emi=new Date(document.getElementById('emision').value);
						const tempoTranscurrido = Date.now();
						const hoy = new Date(tempoTranscurrido);
						if(emi.getFullYear()==hoy.getFullYear()){
							agendar(a_nombre);
						}

						/*document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
						
						document.getElementById("formulario").submit();
						console.log("FORMULARIO ENVIADO");
						setTimeout(() => {
							document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
							formulario.reset();
						}, 1500);
						
						document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
							icono.classList.remove('formulario__grupo-correcto');
						});
						foco('nombre');*/
					}
				}else{
					document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
					document.getElementById('mensaje_bot').innerText='Error: Hay un campo invalido';
					setTimeout(() => {
						document.getElementById('mensaje_bot').innerText='Buscando, espere...3';
						setTimeout(() => {
							document.getElementById('mensaje_bot').innerText='Mostrando error, espere...2';
							setTimeout(() => {
								document.getElementById('mensaje_bot').innerText='Erro: El código postal es incorrecto';
								setTimeout(() => {
									document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
									foco('cp');
								}, 1500);
							}, 1500);
						}, 1500);
					}, 1500);
				}
			}
			else{
				document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
				document.getElementById('mensaje_bot').innerText='Error: Hay un campo invalido';
				setTimeout(() => {
					document.getElementById('mensaje_bot').innerText='Buscando, espere...3';
					setTimeout(() => {
						document.getElementById('mensaje_bot').innerText='Mostrando error, espere...2';
						setTimeout(() => {
							document.getElementById('mensaje_bot').innerText='Erro: El periodo es incorrecto';
							setTimeout(() => {
								document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
								foco('periodo');
							}, 1500);
						}, 1500);
					}, 1500);
				}, 1500);
			}
		}else{
			document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
			document.getElementById('mensaje_bot').innerText='Error: Hay un campo invalido';
			setTimeout(() => {
				document.getElementById('mensaje_bot').innerText='Buscando, espere...3';
				setTimeout(() => {
					document.getElementById('mensaje_bot').innerText='Mostrando error, espere...2';
					setTimeout(() => {
						document.getElementById('mensaje_bot').innerText='Erro: La fecha de emisión es incorrecta';
						setTimeout(() => {
							document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
							foco('emision');
						}, 1500);
					}, 1500);
				}, 1500);
			}, 1500);
		}
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		document.getElementById('mensaje_bot').innerText='Error: Hay un campo invalido';
		setTimeout(() => {
			document.getElementById('mensaje_bot').innerText='Buscando, espere...3';
			setTimeout(() => {
				document.getElementById('mensaje_bot').innerText='Mostrando error, espere...2';
				setTimeout(() => {
					document.getElementById('mensaje_bot').innerText='Error: El nombre de la resposniva es incorrecto espere...1';
					setTimeout(() => {
						document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
						foco('nombre');
					}, 1500);
				}, 1500);
			}, 1500);
		}, 1500);
	}
}

function agendar(nombre) {//c,ni,ex,co,al,cp,ti,us,pro
	Swal.fire({
		title: 'Se ha ingresado una responsiva activa',
		text: 'Seleccione una propuesta para las visitas a obra',
		imageUrl: 'resource/img/opciones.png',
		imageWidth: 600,
		imageHeight: 200,
		showDenyButton: true,
		showCancelButton: true,
		confirmButtonText: 'Opcion 1',
		denyButtonText: `Opción 2`,
		cancelButtonText:'Omitir visitas'
	}).then((result) => {
		if (result.isConfirmed) {
				Swal.fire('Gracias por tu elección', '', 'success');
				window.location = '/opt_1/'+nombre;  
		}else if (result.isDenied) {
				Swal.fire('Gracias por tu elección', '', 'success');
				window.location = '/opt_2/'+nombre;  

		}	                        
	});
};
/*
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.nombre && campos.apellido_1 && campos.apellido_2 && campos.password && campos.correo && campos.registro){
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
*/
