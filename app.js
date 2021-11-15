//--------------PDF 
const PDF = require('pdfkit');
const fs = require('fs');

//------------------

// 1- Invocar a express
const express = require('express');
const app = express();

// 2- seteamos urlencoded para capturar los datos del formulario 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3- Invocar a dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

// 4- configurar el directorio publico con express
app.use('/resourse', express.static('public'));
app.use('/resource', express.static(__dirname + '/public'));

//console.log("4: " + __dirname);


// 5- Establecer el motor de plantillas
app.set('view engine', 'ejs');

// 6- Invocar a bcryptjs
const bcryptjs = require('bcryptjs');

// 7- Variables de session
const session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


// 8- Invocar al modulo de conceion de la DB
const connection = require('./database/db');
const { x, fill } = require('pdfkit');
const multer = require('multer');


// 9- estableciendo las rutas
/*app.get('/',(require,response)=>{
	response.render('index.ejs',{msg: 'mensaje desde Node'});
})
*/
app.get('/login', (require, response) => {
	response.render('login.ejs');
})
app.get('/registro', (require, response) => {
	response.render('registro.ejs');
})

// 10- Registro de usuarios
app.post('/registro', async (req, res) => {
	//const user = req.body.user;
	//const pass = req.body.pass;
	const nombre = req.body.nombre;
	const apellido_1 = req.body.apellido_1;
	const apellido_2 = req.body.apellido_2;
	const correo = req.body.correo;
	const clave = req.body.password;
	const registro = req.body.registro;
	
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	const num_id = getRandomInt(1,9999);
	
	

	/*
	console.log("Nombre= "+nombre);
	console.log("Apellido_1= "+apellido_1);
	console.log("Apellido_2= "+apellido_2);
	console.log("Correo= "+correo);
	console.log("Clave= "+clave);
	console.log("Registro= "+registro);
	*/
	let passwordHaash = await bcryptjs.hash(clave, 8);// encriptar la clave password del formulario
	connection.query('INSERT INTO usuarios SET ?', {
		//user:nombre, //pasamos el usuario del formulario
		//password: pass
		//pass:passwordHaash, //de esta forma la contraseña esta encriptada
		//agregar los demas parametros
		id_usuario:num_id,
		num_registro: registro,
		email_usuario: correo,
		password: passwordHaash,
		nombre: nombre,
		primer_apellido: apellido_1,
		segundo_apellido: apellido_2
	}, async (error, results) => {
		if (error) {
			console.log(error);
		} else {
			res.render('registro.ejs', {
				alert: true,
				alertTitle: "Registro",
				alertMenssage: "Registro exitoso !",
				alertIcon: 'success',
				showConfirmButton: false,
				timer: 1500,
				ruta: ''
			})
		}

	});
})



// 11- Autenticacion 
app.post('/auth', async (req, res) => {
	const correo = req.body.correo;
	const pass = req.body.clave;
	let passwordHaash = await bcryptjs.hash(pass, 8);
	//console.log('USER= ', correo);
	//console.log('pass= ', pass);
	//console.log('passwordHaash= ', passwordHaash);

	if (correo && pass) {
		connection.query('SELECT * FROM usuarios WHERE email_usuario = ?', [correo], async (error, results, fields) => {
			if (results.length == 0 || !(await bcryptjs.compare(pass, results[0].password))) {
				/*console.log('RESULTS= ',results.length);
				console.log('passwordHaash= ',passwordHaash);
				console.log('pass= ',pass);
				console.log('results[0].pass= ',results[0].password);*/
				res.render('login', {
					alert: true,
					alertTitle: "Error",
					alertMessage: "USUARIO y/o PASSWORD incorrectas",
					alertIcon: 'error',
					showConfirmButton: true,
					timer: false,
					ruta: 'login'
				});

				//Mensaje simple y poco vistoso
				//res.send('Incorrect Username and/or Password!');				
			} else {
				//creamos una var de session y le asignamos true si INICIO SESSION       
				req.session.loggedin = true;
				req.session.name = results[0].nombre;
				req.session.name_2 = results[0].id_usuario;
				res.render('login', {
					alert: true,
					alertTitle: "Conexión exitosa usuario " + req.session.name_2,
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon: 'success',
					showConfirmButton: false,
					timer: 1800,
					ruta: ''
				});
			}
			res.end();
		});
	} else {
		res.render('login', {
			alert: true,
			alertTitle: "Advertencia",
			alertMessage: "¡Por favor ingresa un usuario y/o password!",
			alertIcon: 'warning',
			showConfirmButton: true,
			timer: false,
			ruta: 'login'
		});
	}
})


//12 - Método para controlar que está auth en todas las páginas
app.get('/', (req, res) => {
	if (req.session.loggedin) {
		res.render('inicio.ejs', {
			login: true,
			name: req.session.name
		});
	} else {
		res.render('index', {
			login: false,
			name: 'Debe iniciar sesión para continuar',
		});
	}
	res.end();
});

app.get('/inicio', (req, res) => {
	if (req.session.loggedin) {
		res.render('inicio.ejs', {
			login: true,
			name: req.session.name
		});
	} else {
		res.render('index.ejs', {
			login: false,
			name: 'Debe iniciar sesión',
		});
	}
	res.end();
});

app.get('/responsivas', (req, res) => {
	connection.query('select * from propietario;',(error,results)=>{
		if(error){
			throw error;
		}else{
			if (req.session.loggedin) {
				//results.forEach(element => console.log(element.nombre));
				//console.log("results= ",results[0].email_usuario);
				res.render('responsivas.ejs', {
					results:results,
					login: true,
					name: req.session.name
					
				});
			} else {
				res.render('index.ejs', {
					login: false,
					name: 'Debe iniciar sesión',
				});
			}
			res.end();
		}
	})
});
// Recuperacion de datos del formulario responsivas
app.post('/responsivas',(req,res)=>{
	const nombre = req.body.nombre;
	const emision= req.body.emision;
	const vigencia = req.body.vigencia;
	const periodo = req.body.periodo;
	const cp = req.body.cp;
	const calle = req.body.calle;
	const exterior = req.body.exterior;
	const interior = req.body.interior;
	const colonia = req.body.colonia;
	const alcaldia = req.body.alcaldia;
	const catastro = req.body.catastro;
	const tipos = req.body.tipos;
	const manifes = req.body.manifes;
	const licencias = req.body.licencias;
	const uso = req.body.uso;
	const m_predio = req.body.m_predio;
	const m_responsiva = req.body.m_responsiva;
	const snb = req.body.snb;
	const sotanos = req.body.sotanos;
	const viviendas = req.body.viviendas;
	const cajones = req.body.cajones;
	const conservacion = req.body.conservacion;
	const estaciones = req.body.estaciones;
	const antenas = req.body.antenas;
	const observaciones = req.body.observaciones;
	
	const razon = req.body.razon;
	const propietario = req.body.propietario;
	const prop_apellido_1 = req.body.prop_apellido_1;
	const prop_apellido_2 = req.body.prop_apellido_2;

	const telefono = req.body.telefono;
	const rfc = req.body.rfc;

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	const num_id = getRandomInt(1,9999);
	//console.log(num_id);
	//global.relacion_propietario=" ";
	/*console.log(nombre);
	console.log(vigencia);
	console.log(periodo);
	console.log(cp);
	console.log(calle);
	console.log(exterior);
	console.log(interior);
	console.log(colonia);
	console.log(alcaldia);
	console.log(catastro);
	console.log(tipos);
	console.log(manifes);
	console.log(licencias);
	console.log(uso);
	console.log(m_predio);
	console.log(m_responsiva);
	console.log(snb);
	console.log(sotanos);
	console.log(viviendas);
	console.log(cajones);
	console.log(sotanos);
	console.log(conservacion);
	console.log(estaciones);
	console.log(antenas);
	console.log(observaciones);
	console.log(razon);
	console.log(propietario);
	console.log(prop_apellido_1);
	console.log(prop_apellido_2);
	console.log(telefono);
	console.log(rfc);
	console.log(num_id);*/

	
	
	//---------------------------------insertar datos en 1er tabla "propietario"----------------------------------------
	if(razon.length != 0){
		console.log("Insert en Razon social");
		connection.query('INSERT INTO propietario SET ? ', {
			id_propietario:num_id,
			razon:razon,
			telefono:telefono,// campo de la BD : dato del formulario (Fun)
			rfc:rfc,
			resp_grupo:periodo
		},async (error, results) => {
			if (error) {
				console.log(error);
			} else {
				console.log("1 record inserted");
			}
		});
	}
	else{
		console.log("insert en persona fisica");
		connection.query('INSERT INTO propietario SET ? ', {
			id_propietario:num_id,
			nombre: propietario,
			primer_apellido: prop_apellido_1,
			segundo_apellido: prop_apellido_2,
			telefono:telefono,// campo de la BD : dato del formulario (Fun)
			rfc:rfc,
			resp_grupo:periodo
		}, async (error, results) => {
			if (error) {
				console.log(error);
			} else {
				console.log("1 record inserted");
				/*var sql = "SELECT COUNT(*) as total FROM usuarios";
				var query = connection.query(sql, function(err, result) {
					relacion_propietario=result[0].total;
					console.log("Total Records D: " + relacion_propietario);	
				});*/
			}
	
		});
	}
	//---------------------------------insertar datos en 1er tabla "predio"----------------------------------------
	//datos a entrar 
	/*
	
	*/
	//Consultar el indice antes de insertar en la segunda tabla predio
	
	
	//console.log("Total Records F: " + relacion_propietario);

	connection.query('INSERT INTO predio SET ? ', {
		id_predio:num_id,
		calle:calle,
		num_interior:interior,
		num_exterior:exterior,
		superficie_predio:m_predio,
		niveles_snb:snb,
		niveles_bnb:sotanos,
		colonia:colonia,
		alcaldia:alcaldia,
		cp:cp,
		viviendas:viviendas,
		cajones:cajones,
		altura_soporte:estaciones,
		antenas:antenas,
		longitud_instalacion_subt:'-',
		resp_grupo:periodo,
		id_propietario:num_id
	},async (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log("1 record inserted");
		}
	});
	//---------------------------------insertar datos en 1er tabla "Vigencia"----------------------------------------
	connection.query('INSERT INTO vigencia SET ? ', {
		id_vigencia:num_id,
		expedicion:emision,
		vencimiento:vigencia,
		resp_grupo:periodo
	},async (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log("INSERT INTO VIGENCIA");
		}
	});
	//---------------------------------insertar datos en 1er tabla "tipo_tramite"----------------------------------------
	connection.query('INSERT INTO tipo_tramite SET ? ', {
		id_tipo_tramite:num_id,
		manifestacion:manifes,
		licencia:licencias,
		otra_resp:tipos,
		resp_grupo:periodo
	},async (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log("INSERT INTO Tipo de tramite");
		}
	});
	//---------------------------------insertar datos en 1er tabla "observaciones"----------------------------------------
	connection.query('INSERT INTO observaciones SET ? ', {
		id_observaciones:num_id,
		descripcion:observaciones,
		resp_grupo:periodo,
		id_tipo_tramite:num_id
	},async (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log("INSERT INTO observaciones");
		}
	});
	//---------------------------------insertar datos en 1er tabla "responsiva"----------------------------------------
	connection.query('INSERT INTO responsiva SET ? ', {
		id_responsiva:num_id,
		nombre:nombre,
		superficie_responsiva:m_responsiva,
		num_catastral:catastro,
		uso:uso,
		area_patrimonial:conservacion,
		uso_de_suelo:'-',
		resp_grupo:periodo,
		id_usuario:req.session.name_2,//agregar el id de la tabla con la consulta de variable de sesion para crear la relacion 
		id_vigencia:num_id,
		id_tipo_tramite:num_id,
		id_predio:num_id,
		id_observaciones:num_id
	},async (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log("INSERT INTO Responsiva");
		}
	});
	

});

// pagina de terminos y condiciones
app.get('/terminos',(req,res)=>{
	res.render('terminos.ejs');
});
//------------------------------------------------------------
const mimeTypes = require('mime-types');
//const { isAsyncFunction } = require('util/types');
const storage = multer.diskStorage({
	destination: 'entradas/',
	filename: function(req,file,cb){
		//cb("",file.originalname + "."+ mimeTypes.extension(file.mimetype));
		//cb("",file.originalname);
		cb("",req.session.name_2 +"."+ mimeTypes.extension(file.mimetype))
		algo=file.originalname;
	}
});
const upload = multer({
	storage:storage
});


function obtenerDatos(ws){
	const responsivas=[];
	const nombre_resp=[];//
	const emision_resp=[];//
	const vigencia_resp=[];//
	const direccion=[];//
	const catastro=[];//
	const manf_B=[];//
	const manf_C=[];//
	const licencias=[];//
	const manf_j=[];
	const manf_k=[];
	const manf_l=[];
	const manf_m=[];
	const manf_n=[];
	const manf_o=[];
	const manf_p=[];
	const lic_q=[];
	const lic_r=[];
	const lic_s=[];
	const lic_t=[];
	const lic_u=[];
	const lic_v=[];
	const lic_w=[];
	const lic_x=[];
	const otra_y=[];
	const otra_z=[];
	const otra_aa=[];
	const otra_ab=[];
	const otra_ac=[];
	const otra_ad=[];
	const otra_ae=[];
	const af=[];
	const ag=[];
	const ah=[];
	const ai=[];
	const aj=[];
	const ak=[];
	const al=[];
	const am=[];
	const an=[];
	const ao=[];
	const ap=[];
	const aq=[];
	const ar=[];
	const as=[];
	const at=[];
	const au=[];
	const av=[];
	const aw=[];
	const ax=[];

	try { // declaraciones para try
		nombre_resp.push(ws.B9.v);
		nombre_resp.push(ws.B10.v);
		nombre_resp.push(ws.B11.v);
		nombre_resp.push(ws.B12.v);
		nombre_resp.push(ws.B13.v);
		nombre_resp.push(ws.B14.v);
		nombre_resp.push(ws.B15.v);
		nombre_resp.push(ws.B16.v);
		nombre_resp.push(ws.B17.v);
		nombre_resp.push(ws.B18.v);
		nombre_resp.push(ws.B19.v);
		nombre_resp.push(ws.B20.v);
		nombre_resp.push(ws.B21.v);
		nombre_resp.push(ws.B22.v);
		nombre_resp.push(ws.B23.v);
		nombre_resp.push(ws.B24.v);
		nombre_resp.push(ws.B25.v);
		nombre_resp.push(ws.B26.v);
		nombre_resp.push(ws.B27.v);
		nombre_resp.push(ws.B28.v);
	}
	catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { //emision_resp
        var date_9 = new Date(Math.round((ws.C9.v - 25569)*86400*1000));
		const c9=date_9.getFullYear().toString()+'-'+('0'+(date_9.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_9.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c9);
		var date_10 = new Date(Math.round((ws.C10.v - 25569)*86400*1000));
		const c10=date_10.getFullYear().toString()+'-'+('0'+(date_10.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_10.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c10);
		var date_11 = new Date(Math.round((ws.C11.v - 25569)*86400*1000));
		const c11=date_11.getFullYear().toString()+'-'+('0'+(date_11.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_11.getDate()+1).toString()).slice(-2);
		
		emision_resp.push(c11);
		var date_12 = new Date(Math.round((ws.C12.v - 25569)*86400*1000));
		const c12=date_12.getFullYear().toString()+'-'+('0'+(date_12.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_12.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c12);
		var date_13 = new Date(Math.round((ws.C13.v - 25569)*86400*1000));
		const c13=date_13.getFullYear().toString()+'-'+('0'+(date_13.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_13.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c13);
		var date_14 = new Date(Math.round((ws.C14.v - 25569)*86400*1000));
		const c14=date_14.getFullYear().toString()+'-'+('0'+(date_14.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_14.getDate()+1).toString()).slice(-2);

		emision_resp.push(c14);
		var date_15 = new Date(Math.round((ws.C15.v - 25569)*86400*1000));
		const c15=date_15.getFullYear().toString()+'-'+('0'+(date_15.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_15.getDate()+1).toString()).slice(-2);

		emision_resp.push(c15);
		var date_16 = new Date(Math.round((ws.C16.v - 25569)*86400*1000));
		const c16=date_16.getFullYear().toString()+'-'+('0'+(date_16.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_16.getDate()+1).toString()).slice(-2);

		emision_resp.push(c16);
		var date_17 = new Date(Math.round((ws.C17.v - 25569)*86400*1000));
		const c17=date_17.getFullYear().toString()+'-'+('0'+(date_17.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_17.getDate()+1).toString()).slice(-2);
		
		emision_resp.push(c17);
		var date_18 = new Date(Math.round((ws.C18.v - 25569)*86400*1000));
		const c18=date_18.getFullYear().toString()+'-'+('0'+(date_18.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_18.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c18);
		var date_19 = new Date(Math.round((ws.C19.v - 25569)*86400*1000));
		const c19=date_19.getFullYear().toString()+'-'+('0'+(date_19.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_19.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c19);
		var date_20 = new Date(Math.round((ws.C20.v - 25569)*86400*1000));
		const c20=date_20.getFullYear().toString()+'-'+('0'+(date_20.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_20.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c20);
		var date_21 = new Date(Math.round((ws.C21.v - 25569)*86400*1000));
		const c21=date_21.getFullYear().toString()+'-'+('0'+(date_21.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_21.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c21);
		var date_22 = new Date(Math.round((ws.C22.v - 25569)*86400*1000));
		const c22=date_22.getFullYear().toString()+'-'+('0'+(date_22.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_22.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c22);
		var date_23 = new Date(Math.round((ws.C23.v - 25569)*86400*1000));
		const c23=date_23.getFullYear().toString()+'-'+('0'+(date_23.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_23.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c23);
		var date_24 = new Date(Math.round((ws.C24.v - 25569)*86400*1000));
		const c24=date_24.getFullYear().toString()+'-'+('0'+(date_24.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_24.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c24);
		var date_25 = new Date(Math.round((ws.C25.v - 25569)*86400*1000));
		const c25=date_25.getFullYear().toString()+'-'+('0'+(date_25.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_25.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c25);
		var date_26 = new Date(Math.round((ws.C26.v - 25569)*86400*1000));
		const c26=date_26.getFullYear().toString()+'-'+('0'+(date_26.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_26.getDate()+1).toString()).slice(-2);

		emision_resp.push(c26);
		var date_27 = new Date(Math.round((ws.C27.v - 25569)*86400*1000));
		const c27=date_27.getFullYear().toString()+'-'+('0'+(date_27.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_27.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c27);
		var date_28 = new Date(Math.round((ws.C28.v - 25569)*86400*1000));
		const c28=date_28.getFullYear().toString()+'-'+('0'+(date_28.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_28.getDate()+1).toString()).slice(-2);
	
		emision_resp.push(c28);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // vigencia_resp
		//console.log("VIGENCIAS: ");
		var date_9 = new Date(Math.round((ws.D9.v - 25569)*86400*1000));
		const d9=date_9.getFullYear().toString()+'-'+('0'+(date_9.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_9.getDate()+1).toString()).slice(-2);
		vigencia_resp.push(d9);//vigencia push()
		var date_10 = new Date(Math.round((ws.D10.v - 25569)*86400*1000));
		const d10=date_10.getFullYear().toString()+'-'+('0'+(date_10.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_10.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d10);//vigencia push()
		var date_11 = new Date(Math.round((ws.D11.v - 25569)*86400*1000));
		const d11=date_11.getFullYear().toString()+'-'+('0'+(date_11.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_11.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d11);//vigencia push()
		var date_12 = new Date(Math.round((ws.D12.v - 25569)*86400*1000));
		const d12=date_12.getFullYear().toString()+'-'+('0'+(date_12.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_12.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d12);//vigencia push()
		var date_13 = new Date(Math.round((ws.D13.v - 25569)*86400*1000));
		const d13=date_13.getFullYear().toString()+'-'+('0'+(date_13.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_13.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d13);//vigencia push()
		var date_14 = new Date(Math.round((ws.D14.v - 25569)*86400*1000));
		const d14=date_14.getFullYear().toString()+'-'+('0'+(date_14.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_14.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d14);//vigencia push()
		var date_15 = new Date(Math.round((ws.D15.v - 25569)*86400*1000));
		const d15=date_15.getFullYear().toString()+'-'+('0'+(date_15.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_15.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d15);//vigencia push()
		var date_16 = new Date(Math.round((ws.D16.v - 25569)*86400*1000));
		const d16=date_16.getFullYear().toString()+'-'+('0'+(date_16.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_16.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d16);//vigencia push()
		var date_17 = new Date(Math.round((ws.D17.v - 25569)*86400*1000));
		const d17=date_17.getFullYear().toString()+'-'+('0'+(date_17.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_17.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d17);//vigencia push()
		var date_18 = new Date(Math.round((ws.D18.v - 25569)*86400*1000));
		const d18=date_18.getFullYear().toString()+'-'+('0'+(date_18.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_18.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d18);//vigencia push()
		var date_19 = new Date(Math.round((ws.D19.v - 25569)*86400*1000));
		const d19=date_19.getFullYear().toString()+'-'+('0'+(date_19.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_19.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d19);//vigencia push()
		var date_20 = new Date(Math.round((ws.D20.v - 25569)*86400*1000));
		const d20=date_20.getFullYear().toString()+'-'+('0'+(date_20.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_20.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d20);//vigencia push()
		var date_21 = new Date(Math.round((ws.D21.v - 25569)*86400*1000));
		const d21=date_21.getFullYear().toString()+'-'+('0'+(date_21.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_21.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d21);//vigencia push()
		var date_22 = new Date(Math.round((ws.D22.v - 25569)*86400*1000));
		const d22=date_22.getFullYear().toString()+'-'+('0'+(date_22.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_22.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d22);//vigencia push()
		var date_23 = new Date(Math.round((ws.D23.v - 25569)*86400*1000));
		const d23=date_23.getFullYear().toString()+'-'+('0'+(date_23.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_23.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d23);//vigencia push()
		var date_24 = new Date(Math.round((ws.D24.v - 25569)*86400*1000));
		const d24=date_24.getFullYear().toString()+'-'+('0'+(date_24.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_24.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d24);//vigencia push()
		var date_25 = new Date(Math.round((ws.D25.v - 25569)*86400*1000));
		const d25=date_25.getFullYear().toString()+'-'+('0'+(date_25.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_25.getDate()+1).toString()).slice(-2);
	
		vigencia_resp.push(d25);//vigencia push()
		var date_26 = new Date(Math.round((ws.D26.v - 25569)*86400*1000));
		const d26=date_26.getFullYear().toString()+'-'+('0'+(date_26.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_26.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d26);//vigencia push()
		var date_27 = new Date(Math.round((ws.D27.v - 25569)*86400*1000));
		const d27=date_27.getFullYear().toString()+'-'+('0'+(date_27.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_27.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d27);//vigencia push()
		var date_28 = new Date(Math.round((ws.D28.v - 25569)*86400*1000));
		const d28=date_28.getFullYear().toString()+'-'+('0'+(date_28.getMonth()+1).toString()).slice(-2)+'-'+('0'+(date_28.getDate()+1).toString()).slice(-2);
		
		vigencia_resp.push(d28);//vigencia push()
	}
	catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // direccion
		direccion.push(ws.E9.w.replace(/,/g, '.'));
		direccion.push(ws.E10.w.replace(/,/g, '.'));
		direccion.push(ws.E11.w.replace(/,/g, '.'));
		direccion.push(ws.E12.w.replace(/,/g, '.'));
		direccion.push(ws.E13.w.replace(/,/g, '.'));
		direccion.push(ws.E14.w.replace(/,/g, '.'));
		direccion.push(ws.E15.w.replace(/,/g, '.'));
		direccion.push(ws.E16.w.replace(/,/g, '.'));
		direccion.push(ws.E17.w.replace(/,/g, '.'));
		direccion.push(ws.E18.w.replace(/,/g, '.'));
		direccion.push(ws.E19.w.replace(/,/g, '.'));
		direccion.push(ws.E20.w.replace(/,/g, '.'));
		direccion.push(ws.E21.w.replace(/,/g, '.'));
		direccion.push(ws.E22.w.replace(/,/g, '.'));
		direccion.push(ws.E23.w.replace(/,/g, '.'));
		direccion.push(ws.E24.w.replace(/,/g, '.'));
		direccion.push(ws.E25.w.replace(/,/g, '.'));
		direccion.push(ws.E26.w.replace(/,/g, '.'));
		direccion.push(ws.E27.w.replace(/,/g, '.'));
		direccion.push(ws.E28.w.replace(/,/g, '.'));
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // catastro
		catastro.push(ws.F9.w);
		catastro.push(ws.F10.w);
		catastro.push(ws.F11.w);
		catastro.push(ws.F12.w);
		catastro.push(ws.F13.w);
		catastro.push(ws.F14.w);
		catastro.push(ws.F15.w);
		catastro.push(ws.F16.w);
		catastro.push(ws.F17.w);
		catastro.push(ws.F18.w);
		catastro.push(ws.F19.w);
		catastro.push(ws.F20.w);
		catastro.push(ws.F21.w);
		catastro.push(ws.F22.w);
		catastro.push(ws.F23.w);
		catastro.push(ws.F24.w);
		catastro.push(ws.F25.w);
		catastro.push(ws.F26.w);
		catastro.push(ws.F27.w);
		catastro.push(ws.F28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_B
		manf_B.push(ws.G9.w);
		manf_B.push(ws.G10.w);
		manf_B.push(ws.G11.w);
		manf_B.push(ws.G12.w);
		manf_B.push(ws.G13.w);
		manf_B.push(ws.G14.w);
		manf_B.push(ws.G15.w);
		manf_B.push(ws.G16.w);
		manf_B.push(ws.G17.w);
		manf_B.push(ws.G18.w);
		manf_B.push(ws.G19.w);
		manf_B.push(ws.G20.w);
		manf_B.push(ws.G21.w);
		manf_B.push(ws.G22.w);
		manf_B.push(ws.G23.w);
		manf_B.push(ws.G24.w);
		manf_B.push(ws.G25.w);
		manf_B.push(ws.G26.w);
		manf_B.push(ws.G27.w);
		manf_B.push(ws.G28.w);
	}		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_C
		manf_C.push(ws.H9.w);
		manf_C.push(ws.H10.w);
		manf_C.push(ws.H11.w);
		manf_C.push(ws.H12.w);
		manf_C.push(ws.H13.w);
		manf_C.push(ws.H14.w);
		manf_C.push(ws.H15.w);
		manf_C.push(ws.H16.w);
		manf_C.push(ws.H17.w);
		manf_C.push(ws.H18.w);
		manf_C.push(ws.H19.w);
		manf_C.push(ws.H20.w);
		manf_C.push(ws.H21.w);
		manf_C.push(ws.H22.w);
		manf_C.push(ws.H23.w);
		manf_C.push(ws.H24.w);
		manf_C.push(ws.H25.w);
		manf_C.push(ws.H26.w);
		manf_C.push(ws.H27.w);
		manf_C.push(ws.H28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // licencias
		licencias.push(ws.I9.w);
		licencias.push(ws.I10.w);
		licencias.push(ws.I11.w);
		licencias.push(ws.I12.w);
		licencias.push(ws.I13.w);
		licencias.push(ws.I14.w);
		licencias.push(ws.I15.w);
		licencias.push(ws.I16.w);
		licencias.push(ws.I17.w);
		licencias.push(ws.I18.w);
		licencias.push(ws.I19.w);
		licencias.push(ws.I20.w);
		licencias.push(ws.I21.w);
		licencias.push(ws.I22.w);
		licencias.push(ws.I23.w);
		licencias.push(ws.I24.w);
		licencias.push(ws.I25.w);
		licencias.push(ws.I26.w);
		licencias.push(ws.I27.w);
		licencias.push(ws.I28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_j
		manf_j.push(ws.J9.w);
		manf_j.push(ws.J10.w);
		manf_j.push(ws.J11.w);
		manf_j.push(ws.J12.w);
		manf_j.push(ws.J13.w);
		manf_j.push(ws.J14.w);
		manf_j.push(ws.J15.w);
		manf_j.push(ws.J16.w);
		manf_j.push(ws.J17.w);
		manf_j.push(ws.J18.w);
		manf_j.push(ws.J19.w);
		manf_j.push(ws.J20.w);
		manf_j.push(ws.J21.w);
		manf_j.push(ws.J22.w);
		manf_j.push(ws.J23.w);
		manf_j.push(ws.J24.w);
		manf_j.push(ws.J25.w);
		manf_j.push(ws.J26.w);
		manf_j.push(ws.J27.w);
		manf_j.push(ws.J28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_k
		manf_k.push(ws.K9.w);
		manf_k.push(ws.K10.w);
		manf_k.push(ws.K11.w);
		manf_k.push(ws.K12.w);
		manf_k.push(ws.K13.w);
		manf_k.push(ws.K14.w);
		manf_k.push(ws.K15.w);
		manf_k.push(ws.K16.w);
		manf_k.push(ws.K17.w);
		manf_k.push(ws.K18.w);
		manf_k.push(ws.K19.w);
		manf_k.push(ws.K20.w);
		manf_k.push(ws.K21.w);
		manf_k.push(ws.K22.w);
		manf_k.push(ws.K23.w);
		manf_k.push(ws.K24.w);
		manf_k.push(ws.K25.w);
		manf_k.push(ws.K26.w);
		manf_k.push(ws.K27.w);
		manf_k.push(ws.K28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_l
		manf_l.push(ws.L9.w);
		manf_l.push(ws.L10.w);
		manf_l.push(ws.L11.w);
		manf_l.push(ws.L12.w);
		manf_l.push(ws.L13.w);
		manf_l.push(ws.L14.w);
		manf_l.push(ws.L15.w);
		manf_l.push(ws.L16.w);
		manf_l.push(ws.L17.w);
		manf_l.push(ws.L18.w);
		manf_l.push(ws.L19.w);
		manf_l.push(ws.L20.w);
		manf_l.push(ws.L21.w);
		manf_l.push(ws.L22.w);
		manf_l.push(ws.L23.w);
		manf_l.push(ws.L24.w);
		manf_l.push(ws.L25.w);
		manf_l.push(ws.L26.w);
		manf_l.push(ws.L27.w);
		manf_l.push(ws.L28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_m
		manf_m.push(ws.M9.w);
		manf_m.push(ws.M10.w);
		manf_m.push(ws.M11.w);
		manf_m.push(ws.M12.w);
		manf_m.push(ws.M13.w);
		manf_m.push(ws.M14.w);
		manf_m.push(ws.M15.w);
		manf_m.push(ws.M16.w);
		manf_m.push(ws.M17.w);
		manf_m.push(ws.M18.w);
		manf_m.push(ws.M19.w);
		manf_m.push(ws.M20.w);
		manf_m.push(ws.M21.w);
		manf_m.push(ws.M22.w);
		manf_m.push(ws.M23.w);
		manf_m.push(ws.M24.w);
		manf_m.push(ws.M25.w);
		manf_m.push(ws.M26.w);
		manf_m.push(ws.M27.w);
		manf_m.push(ws.M28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_n
		manf_n.push(ws.N9.w);
		manf_n.push(ws.N10.w);
		manf_n.push(ws.N11.w);
		manf_n.push(ws.N12.w);
		manf_n.push(ws.N13.w);
		manf_n.push(ws.N14.w);
		manf_n.push(ws.N15.w);
		manf_n.push(ws.N16.w);
		manf_n.push(ws.N17.w);
		manf_n.push(ws.N18.w);
		manf_n.push(ws.N19.w);
		manf_n.push(ws.N20.w);
		manf_n.push(ws.N21.w);
		manf_n.push(ws.N22.w);
		manf_n.push(ws.N23.w);
		manf_n.push(ws.N24.w);
		manf_n.push(ws.N25.w);
		manf_n.push(ws.N26.w);
		manf_n.push(ws.N27.w);
		manf_n.push(ws.N28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_o
		manf_o.push(ws.O9.w);
		manf_o.push(ws.O10.w);
		manf_o.push(ws.O11.w);
		manf_o.push(ws.O12.w);
		manf_o.push(ws.O13.w);
		manf_o.push(ws.O14.w);
		manf_o.push(ws.O15.w);
		manf_o.push(ws.O16.w);
		manf_o.push(ws.O17.w);
		manf_o.push(ws.O18.w);
		manf_o.push(ws.O19.w);
		manf_o.push(ws.O20.w);
		manf_o.push(ws.O21.w);
		manf_o.push(ws.O22.w);
		manf_o.push(ws.O23.w);
		manf_o.push(ws.O24.w);
		manf_o.push(ws.O25.w);
		manf_o.push(ws.O26.w);
		manf_o.push(ws.O27.w);
		manf_o.push(ws.O28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // manf_p
		manf_p.push(ws.P9.w);
		manf_p.push(ws.P10.w);
		manf_p.push(ws.P11.w);
		manf_p.push(ws.P12.w);
		manf_p.push(ws.P13.w);
		manf_p.push(ws.P14.w);
		manf_p.push(ws.P15.w);
		manf_p.push(ws.P16.w);
		manf_p.push(ws.P17.w);
		manf_p.push(ws.P18.w);
		manf_p.push(ws.P19.w);
		manf_p.push(ws.P20.w);
		manf_p.push(ws.P21.w);
		manf_p.push(ws.P22.w);
		manf_p.push(ws.P23.w);
		manf_p.push(ws.P24.w);
		manf_p.push(ws.P25.w);
		manf_p.push(ws.P26.w);
		manf_p.push(ws.P27.w);
		manf_p.push(ws.P28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // lic_q
		lic_q.push(ws.Q9.w);
		lic_q.push(ws.Q10.w);
		lic_q.push(ws.Q11.w);
		lic_q.push(ws.Q12.w);
		lic_q.push(ws.Q13.w);
		lic_q.push(ws.Q14.w);
		lic_q.push(ws.Q15.w);
		lic_q.push(ws.Q16.w);
		lic_q.push(ws.Q17.w);
		lic_q.push(ws.Q18.w);
		lic_q.push(ws.Q19.w);
		lic_q.push(ws.Q20.w);
		lic_q.push(ws.Q21.w);
		lic_q.push(ws.Q22.w);
		lic_q.push(ws.Q23.w);
		lic_q.push(ws.Q24.w);
		lic_q.push(ws.Q25.w);
		lic_q.push(ws.Q26.w);
		lic_q.push(ws.Q27.w);
		lic_q.push(ws.Q28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // lic_r
		lic_r.push(ws.R9.w);
		lic_r.push(ws.R10.w);
		lic_r.push(ws.R11.w);
		lic_r.push(ws.R12.w);
		lic_r.push(ws.R13.w);
		lic_r.push(ws.R14.w);
		lic_r.push(ws.R15.w);
		lic_r.push(ws.R16.w);
		lic_r.push(ws.R17.w);
		lic_r.push(ws.R18.w);
		lic_r.push(ws.R19.w);
		lic_r.push(ws.R20.w);
		lic_r.push(ws.R21.w);
		lic_r.push(ws.R22.w);
		lic_r.push(ws.R23.w);
		lic_r.push(ws.R24.w);
		lic_r.push(ws.R25.w);
		lic_r.push(ws.R26.w);
		lic_r.push(ws.R27.w);
		lic_r.push(ws.R28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // lic_s
		lic_s.push(ws.S9.w);
		lic_s.push(ws.S10.w);
		lic_s.push(ws.S11.w);
		lic_s.push(ws.S12.w);
		lic_s.push(ws.S13.w);
		lic_s.push(ws.S14.w);
		lic_s.push(ws.S15.w);
		lic_s.push(ws.S16.w);
		lic_s.push(ws.S17.w);
		lic_s.push(ws.S18.w);
		lic_s.push(ws.S19.w);
		lic_s.push(ws.S20.w);
		lic_s.push(ws.S21.w);
		lic_s.push(ws.S22.w);
		lic_s.push(ws.S23.w);
		lic_s.push(ws.S24.w);
		lic_s.push(ws.S25.w);
		lic_s.push(ws.S26.w);
		lic_s.push(ws.S27.w);
		lic_s.push(ws.S28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // lic_t
		lic_t.push(ws.T9.w);
		lic_t.push(ws.T10.w);
		lic_t.push(ws.T11.w);
		lic_t.push(ws.T12.w);
		lic_t.push(ws.T13.w);
		lic_t.push(ws.T14.w);
		lic_t.push(ws.T15.w);
		lic_t.push(ws.T16.w);
		lic_t.push(ws.T17.w);
		lic_t.push(ws.T18.w);
		lic_t.push(ws.T19.w);
		lic_t.push(ws.T20.w);
		lic_t.push(ws.T21.w);
		lic_t.push(ws.T22.w);
		lic_t.push(ws.T23.w);
		lic_t.push(ws.T24.w);
		lic_t.push(ws.T25.w);
		lic_t.push(ws.T26.w);
		lic_t.push(ws.T27.w);
		lic_t.push(ws.T28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // lic_u
		lic_u.push(ws.U9.w);
		lic_u.push(ws.U10.w);
		lic_u.push(ws.U11.w);
		lic_u.push(ws.U12.w);
		lic_u.push(ws.U13.w);
		lic_u.push(ws.U14.w);
		lic_u.push(ws.U15.w);
		lic_u.push(ws.U16.w);
		lic_u.push(ws.U17.w);
		lic_u.push(ws.U18.w);
		lic_u.push(ws.U19.w);
		lic_u.push(ws.U20.w);
		lic_u.push(ws.U21.w);
		lic_u.push(ws.U22.w);
		lic_u.push(ws.U23.w);
		lic_u.push(ws.U24.w);
		lic_u.push(ws.U25.w);
		lic_u.push(ws.U26.w);
		lic_u.push(ws.U27.w);
		lic_u.push(ws.U28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // lic_v
		lic_v.push(ws.V9.w);
		lic_v.push(ws.V10.w);
		lic_v.push(ws.V11.w);
		lic_v.push(ws.V12.w);
		lic_v.push(ws.V13.w);
		lic_v.push(ws.V14.w);
		lic_v.push(ws.V15.w);
		lic_v.push(ws.V16.w);
		lic_v.push(ws.V17.w);
		lic_v.push(ws.V18.w);
		lic_v.push(ws.V19.w);
		lic_v.push(ws.V20.w);
		lic_v.push(ws.V21.w);
		lic_v.push(ws.V22.w);
		lic_v.push(ws.V23.w);
		lic_v.push(ws.V24.w);
		lic_v.push(ws.V25.w);
		lic_v.push(ws.V26.w);
		lic_v.push(ws.V27.w);
		lic_v.push(ws.V28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // lic_w
		lic_w.push(ws.W9.w);
		lic_w.push(ws.W10.w);
		lic_w.push(ws.W11.w);
		lic_w.push(ws.W12.w);
		lic_w.push(ws.W13.w);
		lic_w.push(ws.W14.w);
		lic_w.push(ws.W15.w);
		lic_w.push(ws.W16.w);
		lic_w.push(ws.W17.w);
		lic_w.push(ws.W18.w);
		lic_w.push(ws.W19.w);
		lic_w.push(ws.W20.w);
		lic_w.push(ws.W21.w);
		lic_w.push(ws.W22.w);
		lic_w.push(ws.W23.w);
		lic_w.push(ws.W24.w);
		lic_w.push(ws.W25.w);
		lic_w.push(ws.W26.w);
		lic_w.push(ws.W27.w);
		lic_w.push(ws.W28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // lic_x
		lic_x.push(ws.X9.w);
		lic_x.push(ws.X10.w);
		lic_x.push(ws.X11.w);
		lic_x.push(ws.X12.w);
		lic_x.push(ws.X13.w);
		lic_x.push(ws.X14.w);
		lic_x.push(ws.X15.w);
		lic_x.push(ws.X16.w);
		lic_x.push(ws.X17.w);
		lic_x.push(ws.X18.w);
		lic_x.push(ws.X19.w);
		lic_x.push(ws.X20.w);
		lic_x.push(ws.X21.w);
		lic_x.push(ws.X22.w);
		lic_x.push(ws.X23.w);
		lic_x.push(ws.X24.w);
		lic_x.push(ws.X25.w);
		lic_x.push(ws.X26.w);
		lic_x.push(ws.X27.w);
		lic_x.push(ws.X28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // otra_y
		otra_y.push(ws.Y9.w);
		otra_y.push(ws.Y10.w);
		otra_y.push(ws.Y11.w);
		otra_y.push(ws.Y12.w);
		otra_y.push(ws.Y13.w);
		otra_y.push(ws.Y14.w);
		otra_y.push(ws.Y15.w);
		otra_y.push(ws.Y16.w);
		otra_y.push(ws.Y17.w);
		otra_y.push(ws.Y18.w);
		otra_y.push(ws.Y19.w);
		otra_y.push(ws.Y20.w);
		otra_y.push(ws.Y21.w);
		otra_y.push(ws.Y22.w);
		otra_y.push(ws.Y23.w);
		otra_y.push(ws.Y24.w);
		otra_y.push(ws.Y25.w);
		otra_y.push(ws.Y26.w);
		otra_y.push(ws.Y27.w);
		otra_y.push(ws.Y28.w);
	}
	catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // otra_z
		otra_z.push(ws.Z9.w);
		otra_z.push(ws.Z10.w);
		otra_z.push(ws.Z11.w);
		otra_z.push(ws.Z12.w);
		otra_z.push(ws.Z13.w);
		otra_z.push(ws.Z14.w);
		otra_z.push(ws.Z15.w);
		otra_z.push(ws.Z16.w);
		otra_z.push(ws.Z17.w);
		otra_z.push(ws.Z18.w);
		otra_z.push(ws.Z19.w);
		otra_z.push(ws.Z20.w);
		otra_z.push(ws.Z21.w);
		otra_z.push(ws.Z22.w);
		otra_z.push(ws.Z23.w);
		otra_z.push(ws.Z24.w);
		otra_z.push(ws.Z25.w);
		otra_z.push(ws.Z26.w);
		otra_z.push(ws.Z27.w);
		otra_z.push(ws.Z28.w);
	}
	catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // otra_aa
		otra_aa.push(ws.AA9.w);
		otra_aa.push(ws.AA10.w);
		otra_aa.push(ws.AA11.w);
		otra_aa.push(ws.AA12.w);
		otra_aa.push(ws.AA13.w);
		otra_aa.push(ws.AA14.w);
		otra_aa.push(ws.AA15.w);
		otra_aa.push(ws.AA16.w);
		otra_aa.push(ws.AA17.w);
		otra_aa.push(ws.AA18.w);
		otra_aa.push(ws.AA19.w);
		otra_aa.push(ws.AA20.w);
		otra_aa.push(ws.AA21.w);
		otra_aa.push(ws.AA22.w);
		otra_aa.push(ws.AA23.w);
		otra_aa.push(ws.AA24.w);
		otra_aa.push(ws.AA25.w);
		otra_aa.push(ws.AA26.w);
		otra_aa.push(ws.AA27.w);
		otra_aa.push(ws.AA28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // otra_ab
		otra_ab.push(ws.AB9.w);
		otra_ab.push(ws.AB10.w);
		otra_ab.push(ws.AB11.w);
		otra_ab.push(ws.AB12.w);
		otra_ab.push(ws.AB13.w);
		otra_ab.push(ws.AB14.w);
		otra_ab.push(ws.AB15.w);
		otra_ab.push(ws.AB16.w);
		otra_ab.push(ws.AB17.w);
		otra_ab.push(ws.AB18.w);
		otra_ab.push(ws.AB19.w);
		otra_ab.push(ws.AB20.w);
		otra_ab.push(ws.AB21.w);
		otra_ab.push(ws.AB22.w);
		otra_ab.push(ws.AB23.w);
		otra_ab.push(ws.AB24.w);
		otra_ab.push(ws.AB25.w);
		otra_ab.push(ws.AB26.w);
		otra_ab.push(ws.AB27.w);
		otra_ab.push(ws.AB28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // otra_ac
		otra_ac.push(ws.AC9.w);
		otra_ac.push(ws.AC10.w);
		otra_ac.push(ws.AC11.w);
		otra_ac.push(ws.AC12.w);
		otra_ac.push(ws.AC13.w);
		otra_ac.push(ws.AC14.w);
		otra_ac.push(ws.AC15.w);
		otra_ac.push(ws.AC16.w);
		otra_ac.push(ws.AC17.w);
		otra_ac.push(ws.AC18.w);
		otra_ac.push(ws.AC19.w);
		otra_ac.push(ws.AC20.w);
		otra_ac.push(ws.AC21.w);
		otra_ac.push(ws.AC22.w);
		otra_ac.push(ws.AC23.w);
		otra_ac.push(ws.AC24.w);
		otra_ac.push(ws.AC25.w);
		otra_ac.push(ws.AC26.w);
		otra_ac.push(ws.AC27.w);
		otra_ac.push(ws.AC28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // otra_ad
		otra_ad.push(ws.AD9.w);
		otra_ad.push(ws.AD10.w);
		otra_ad.push(ws.AD11.w);
		otra_ad.push(ws.AD12.w);
		otra_ad.push(ws.AD13.w);
		otra_ad.push(ws.AD14.w);
		otra_ad.push(ws.AD15.w);
		otra_ad.push(ws.AD16.w);
		otra_ad.push(ws.AD17.w);
		otra_ad.push(ws.AD18.w);
		otra_ad.push(ws.AD19.w);
		otra_ad.push(ws.AD20.w);
		otra_ad.push(ws.AD21.w);
		otra_ad.push(ws.AD22.w);
		otra_ad.push(ws.AD23.w);
		otra_ad.push(ws.AD24.w);
		otra_ad.push(ws.AD25.w);
		otra_ad.push(ws.AD26.w);
		otra_ad.push(ws.AD27.w);
		otra_ad.push(ws.AD28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // otra_ae
		otra_ae.push(ws.AE9.w);
		otra_ae.push(ws.AE10.w);
		otra_ae.push(ws.AE11.w);
		otra_ae.push(ws.AE12.w);
		otra_ae.push(ws.AE13.w);
		otra_ae.push(ws.AE14.w);
		otra_ae.push(ws.AE15.w);
		otra_ae.push(ws.AE16.w);
		otra_ae.push(ws.AE17.w);
		otra_ae.push(ws.AE18.w);
		otra_ae.push(ws.AE19.w);
		otra_ae.push(ws.AE20.w);
		otra_ae.push(ws.AE21.w);
		otra_ae.push(ws.AE22.w);
		otra_ae.push(ws.AE23.w);
		otra_ae.push(ws.AE24.w);
		otra_ae.push(ws.AE25.w);
		otra_ae.push(ws.AE26.w);
		otra_ae.push(ws.AE27.w);
		otra_ae.push(ws.AE28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // af
		af.push(ws.AF9.w);
		af.push(ws.AF10.w);
		af.push(ws.AF11.w);
		af.push(ws.AF12.w);
		af.push(ws.AF13.w);
		af.push(ws.AF14.w);
		af.push(ws.AF15.w);
		af.push(ws.AF16.w);
		af.push(ws.AF17.w);
		af.push(ws.AF18.w);
		af.push(ws.AF19.w);
		af.push(ws.AF20.w);
		af.push(ws.AF21.w);
		af.push(ws.AF22.w);
		af.push(ws.AF23.w);
		af.push(ws.AF24.w);
		af.push(ws.AF25.w);
		af.push(ws.AF26.w);
		af.push(ws.AF27.w);
		af.push(ws.AF28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // ag
		ag.push(ws.AG9.w);
		ag.push(ws.AG10.w);
		ag.push(ws.AG11.w);
		ag.push(ws.AG12.w);
		ag.push(ws.AG13.w);
		ag.push(ws.AG14.w);
		ag.push(ws.AG15.w);
		ag.push(ws.AG16.w);
		ag.push(ws.AG17.w);
		ag.push(ws.AG18.w);
		ag.push(ws.AG19.w);
		ag.push(ws.AG20.w);
		ag.push(ws.AG21.w);
		ag.push(ws.AG22.w);
		ag.push(ws.AG23.w);
		ag.push(ws.AG24.w);
		ag.push(ws.AG25.w);
		ag.push(ws.AG26.w);
		ag.push(ws.AG27.w);
		ag.push(ws.AG28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // ah
		ah.push(ws.AH9.w);
		ah.push(ws.AH10.w);
		ah.push(ws.AH11.w);
		ah.push(ws.AH12.w);
		ah.push(ws.AH13.w);
		ah.push(ws.AH14.w);
		ah.push(ws.AH15.w);
		ah.push(ws.AH16.w);
		ah.push(ws.AH17.w);
		ah.push(ws.AH18.w);
		ah.push(ws.AH19.w);
		ah.push(ws.AH20.w);
		ah.push(ws.AH21.w);
		ah.push(ws.AH22.w);
		ah.push(ws.AH23.w);
		ah.push(ws.AH24.w);
		ah.push(ws.AH25.w);
		ah.push(ws.AH26.w);
		ah.push(ws.AH27.w);
		ah.push(ws.AH28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // ai
		ai.push(ws.AI9.w);
		ai.push(ws.AI10.w);
		ai.push(ws.AI11.w);
		ai.push(ws.AI12.w);
		ai.push(ws.AI13.w);
		ai.push(ws.AI14.w);
		ai.push(ws.AI15.w);
		ai.push(ws.AI16.w);
		ai.push(ws.AI17.w);
		ai.push(ws.AI18.w);
		ai.push(ws.AI19.w);
		ai.push(ws.AI20.w);
		ai.push(ws.AI21.w);
		ai.push(ws.AI22.w);
		ai.push(ws.AI23.w);
		ai.push(ws.AI24.w);
		ai.push(ws.AI25.w);
		ai.push(ws.AI26.w);
		ai.push(ws.AI27.w);
		ai.push(ws.AI28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // aj
		aj.push(ws.AJ9.w);
		aj.push(ws.AJ10.w);
		aj.push(ws.AJ11.w);
		aj.push(ws.AJ12.w);
		aj.push(ws.AJ13.w);
		aj.push(ws.AJ14.w);
		aj.push(ws.AJ15.w);
		aj.push(ws.AJ16.w);
		aj.push(ws.AJ17.w);
		aj.push(ws.AJ18.w);
		aj.push(ws.AJ19.w);
		aj.push(ws.AJ20.w);
		aj.push(ws.AJ21.w);
		aj.push(ws.AJ22.w);
		aj.push(ws.AJ23.w);
		aj.push(ws.AJ24.w);
		aj.push(ws.AJ25.w);
		aj.push(ws.AJ26.w);
		aj.push(ws.AJ27.w);
		aj.push(ws.AJ28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // ak
		ak.push(ws.AK9.w);
		ak.push(ws.AK10.w);
		ak.push(ws.AK11.w);
		ak.push(ws.AK12.w);
		ak.push(ws.AK13.w);
		ak.push(ws.AK14.w);
		ak.push(ws.AK15.w);
		ak.push(ws.AK16.w);
		ak.push(ws.AK17.w);
		ak.push(ws.AK18.w);
		ak.push(ws.AK19.w);
		ak.push(ws.AK20.w);
		ak.push(ws.AK21.w);
		ak.push(ws.AK22.w);
		ak.push(ws.AK23.w);
		ak.push(ws.AK24.w);
		ak.push(ws.AK25.w);
		ak.push(ws.AK26.w);
		ak.push(ws.AK27.w);
		ak.push(ws.AK28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // al
		al.push(ws.AL9.w);
		al.push(ws.AL10.w);
		al.push(ws.AL11.w);
		al.push(ws.AL12.w);
		al.push(ws.AL13.w);
		al.push(ws.AL14.w);
		al.push(ws.AL15.w);
		al.push(ws.AL16.w);
		al.push(ws.AL17.w);
		al.push(ws.AL18.w);
		al.push(ws.AL19.w);
		al.push(ws.AL20.w);
		al.push(ws.AL21.w);
		al.push(ws.AL22.w);
		al.push(ws.AL23.w);
		al.push(ws.AL24.w);
		al.push(ws.AL25.w);
		al.push(ws.AL26.w);
		al.push(ws.AL27.w);
		al.push(ws.AL28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // am
		am.push(ws.AM9.w);
		am.push(ws.AM10.w);
		am.push(ws.AM11.w);
		am.push(ws.AM12.w);
		am.push(ws.AM13.w);
		am.push(ws.AM14.w);
		am.push(ws.AM15.w);
		am.push(ws.AM16.w);
		am.push(ws.AM17.w);
		am.push(ws.AM18.w);
		am.push(ws.AM19.w);
		am.push(ws.AM20.w);
		am.push(ws.AM21.w);
		am.push(ws.AM22.w);
		am.push(ws.AM23.w);
		am.push(ws.AM24.w);
		am.push(ws.AM25.w);
		am.push(ws.AM26.w);
		am.push(ws.AM27.w);
		am.push(ws.AM28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // an
		an.push(ws.AN9.w);
		an.push(ws.AN10.w);
		an.push(ws.AN11.w);
		an.push(ws.AN12.w);
		an.push(ws.AN13.w);
		an.push(ws.AN14.w);
		an.push(ws.AN15.w);
		an.push(ws.AN16.w);
		an.push(ws.AN17.w);
		an.push(ws.AN18.w);
		an.push(ws.AN19.w);
		an.push(ws.AN20.w);
		an.push(ws.AN21.w);
		an.push(ws.AN22.w);
		an.push(ws.AN23.w);
		an.push(ws.AN24.w);
		an.push(ws.AN25.w);
		an.push(ws.AN26.w);
		an.push(ws.AN27.w);
		an.push(ws.AN28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // ao
		ao.push(ws.AO9.w);
		ao.push(ws.AO10.w);
		ao.push(ws.AO11.w);
		ao.push(ws.AO12.w);
		ao.push(ws.AO13.w);
		ao.push(ws.AO14.w);
		ao.push(ws.AO15.w);
		ao.push(ws.AO16.w);
		ao.push(ws.AO17.w);
		ao.push(ws.AO18.w);
		ao.push(ws.AO19.w);
		ao.push(ws.AO20.w);
		ao.push(ws.AO21.w);
		ao.push(ws.AO22.w);
		ao.push(ws.AO23.w);
		ao.push(ws.AO24.w);
		ao.push(ws.AO25.w);
		ao.push(ws.AO26.w);
		ao.push(ws.AO27.w);
		ao.push(ws.AO28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // ap
		ap.push(ws.AP9.w);
		ap.push(ws.AP10.w);
		ap.push(ws.AP11.w);
		ap.push(ws.AP12.w);
		ap.push(ws.AP13.w);
		ap.push(ws.AP14.w);
		ap.push(ws.AP15.w);
		ap.push(ws.AP16.w);
		ap.push(ws.AP17.w);
		ap.push(ws.AP18.w);
		ap.push(ws.AP19.w);
		ap.push(ws.AP20.w);
		ap.push(ws.AP21.w);
		ap.push(ws.AP22.w);
		ap.push(ws.AP23.w);
		ap.push(ws.AP24.w);
		ap.push(ws.AP25.w);
		ap.push(ws.AP26.w);
		ap.push(ws.AP27.w);
		ap.push(ws.AP28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // aq
		aq.push(ws.AQ9.w);
		aq.push(ws.AQ10.w);
		aq.push(ws.AQ11.w);
		aq.push(ws.AQ12.w);
		aq.push(ws.AQ13.w);
		aq.push(ws.AQ14.w);
		aq.push(ws.AQ15.w);
		aq.push(ws.AQ16.w);
		aq.push(ws.AQ17.w);
		aq.push(ws.AQ18.w);
		aq.push(ws.AQ19.w);
		aq.push(ws.AQ20.w);
		aq.push(ws.AQ21.w);
		aq.push(ws.AQ22.w);
		aq.push(ws.AQ23.w);
		aq.push(ws.AQ24.w);
		aq.push(ws.AQ25.w);
		aq.push(ws.AQ26.w);
		aq.push(ws.AQ27.w);
		aq.push(ws.AQ28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // ar
		ar.push(ws.AR9.w);
		ar.push(ws.AR10.w);
		ar.push(ws.AR11.w);
		ar.push(ws.AR12.w);
		ar.push(ws.AR13.w);
		ar.push(ws.AR14.w);
		ar.push(ws.AR15.w);
		ar.push(ws.AR16.w);
		ar.push(ws.AR17.w);
		ar.push(ws.AR18.w);
		ar.push(ws.AR19.w);
		ar.push(ws.AR20.w);
		ar.push(ws.AR21.w);
		ar.push(ws.AR22.w);
		ar.push(ws.AR23.w);
		ar.push(ws.AR24.w);
		ar.push(ws.AR25.w);
		ar.push(ws.AR26.w);
		ar.push(ws.AR27.w);
		ar.push(ws.AR28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // as
		as.push(ws.AS9.w);
		as.push(ws.AS10.w);
		as.push(ws.AS11.w);
		as.push(ws.AS12.w);
		as.push(ws.AS13.w);
		as.push(ws.AS14.w);
		as.push(ws.AS15.w);
		as.push(ws.AS16.w);
		as.push(ws.AS17.w);
		as.push(ws.AS18.w);
		as.push(ws.AS19.w);
		as.push(ws.AS20.w);
		as.push(ws.AS21.w);
		as.push(ws.AS22.w);
		as.push(ws.AS23.w);
		as.push(ws.AS24.w);
		as.push(ws.AS25.w);
		as.push(ws.AS26.w);
		as.push(ws.AS27.w);
		as.push(ws.AS28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // at
		at.push(ws.AT9.w);
		at.push(ws.AT10.w);
		at.push(ws.AT11.w);
		at.push(ws.AT12.w);
		at.push(ws.AT13.w);
		at.push(ws.AT14.w);
		at.push(ws.AT15.w);
		at.push(ws.AT16.w);
		at.push(ws.AT17.w);
		at.push(ws.AT18.w);
		at.push(ws.AT19.w);
		at.push(ws.AT20.w);
		at.push(ws.AT21.w);
		at.push(ws.AT22.w);
		at.push(ws.AT23.w);
		at.push(ws.AT24.w);
		at.push(ws.AT25.w);
		at.push(ws.AT26.w);
		at.push(ws.AT27.w);
		at.push(ws.AT28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // au
		au.push(ws.AU9.w);
		au.push(ws.AU10.w);
		au.push(ws.AU11.w);
		au.push(ws.AU12.w);
		au.push(ws.AU13.w);
		au.push(ws.AU14.w);
		au.push(ws.AU15.w);
		au.push(ws.AU16.w);
		au.push(ws.AU17.w);
		au.push(ws.AU18.w);
		au.push(ws.AU19.w);
		au.push(ws.AU20.w);
		au.push(ws.AU21.w);
		au.push(ws.AU22.w);
		au.push(ws.AU23.w);
		au.push(ws.AU24.w);
		au.push(ws.AU25.w);
		au.push(ws.AU26.w);
		au.push(ws.AU27.w);
		au.push(ws.AU28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // av
		av.push(ws.AV9.w);
		av.push(ws.AV10.w);
		av.push(ws.AV11.w);
		av.push(ws.AV12.w);
		av.push(ws.AV13.w);
		av.push(ws.AV14.w);
		av.push(ws.AV15.w);
		av.push(ws.AV16.w);
		av.push(ws.AV17.w);
		av.push(ws.AV18.w);
		av.push(ws.AV19.w);
		av.push(ws.AV20.w);
		av.push(ws.AV21.w);
		av.push(ws.AV22.w);
		av.push(ws.AV23.w);
		av.push(ws.AV24.w);
		av.push(ws.AV25.w);
		av.push(ws.AV26.w);
		av.push(ws.AV27.w);
		av.push(ws.AV28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // aw
		aw.push(ws.AW9.w);
		aw.push(ws.AW10.w);
		aw.push(ws.AW11.w);
		aw.push(ws.AW12.w);
		aw.push(ws.AW13.w);
		aw.push(ws.AW14.w);
		aw.push(ws.AW15.w);
		aw.push(ws.AW16.w);
		aw.push(ws.AW17.w);
		aw.push(ws.AW18.w);
		aw.push(ws.AW19.w);
		aw.push(ws.AW20.w);
		aw.push(ws.AW21.w);
		aw.push(ws.AW22.w);
		aw.push(ws.AW23.w);
		aw.push(ws.AW24.w);
		aw.push(ws.AW25.w);
		aw.push(ws.AW26.w);
		aw.push(ws.AW27.w);
		aw.push(ws.AW28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	try { // ax
		ax.push(ws.AX9.w);
		ax.push(ws.AX10.w);
		ax.push(ws.AX11.w);
		ax.push(ws.AX12.w);
		ax.push(ws.AX13.w);
		ax.push(ws.AX14.w);
		ax.push(ws.AX15.w);
		ax.push(ws.AX16.w);
		ax.push(ws.AX17.w);
		ax.push(ws.AX18.w);
		ax.push(ws.AX19.w);
		ax.push(ws.AX20.w);
		ax.push(ws.AX21.w);
		ax.push(ws.AX22.w);
		ax.push(ws.AX23.w);
		ax.push(ws.AX24.w);
		ax.push(ws.AX25.w);
		ax.push(ws.AX26.w);
		ax.push(ws.AX27.w);
		ax.push(ws.AX28.w);
	}
		catch (e) {
		//console.log("Terminado");
		//logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
	}
	
	//console.log(ws.AX9.w);
	responsivas.push(nombre_resp);
	responsivas.push(emision_resp);
	responsivas.push(vigencia_resp);
	responsivas.push(direccion);
	responsivas.push(catastro);
	responsivas.push(manf_B);
	responsivas.push(manf_C);
	responsivas.push(licencias);
	responsivas.push(manf_j);
	responsivas.push(manf_k);
	responsivas.push(manf_l);
	responsivas.push(manf_m);
	responsivas.push(manf_n);
	responsivas.push(manf_o);
	responsivas.push(manf_p);
	responsivas.push(lic_q);
	responsivas.push(lic_r);
	responsivas.push(lic_s);
	responsivas.push(lic_t);
	responsivas.push(lic_u);
	responsivas.push(lic_v);
	responsivas.push(lic_w);
	responsivas.push(lic_x);
	responsivas.push(otra_y);
	responsivas.push(otra_z);
	responsivas.push(otra_aa);
	responsivas.push(otra_ab);
	responsivas.push(otra_ac);
	responsivas.push(otra_ad);
	responsivas.push(otra_ae);
	responsivas.push(af);
	responsivas.push(ag);
	responsivas.push(ah);
	responsivas.push(ai);
	responsivas.push(aj);
	responsivas.push(ak);
	responsivas.push(al);
	responsivas.push(am);
	responsivas.push(an);
	responsivas.push(ao);
	responsivas.push(ap);
	responsivas.push(aq);
	responsivas.push(ar);
	responsivas.push(as);
	responsivas.push(at);
	responsivas.push(au);
	responsivas.push(av);
	responsivas.push(aw);
	responsivas.push(ax);

	//responsivas.forEach(element => console.log(element));
	return responsivas;
	transmite = responsivas;
	
	//nombre_resp.forEach(element => console.log(element));
	//vigencia_resp.forEach(element => console.log(element));
}

async function consulta(){
	let lista=[];
	connection.query('select * from propietario',(error,results_1)=>{
		if(error){
			throw error;
		}else{
			for(let i=0;i<results_1.length;i++){
				lista.push(results_1[i].id_propietario);
				console.log("Lista== "+lista);
			}
			return results_1;
		}
	});
	console.log("results_1= ",results_1);
	await console.log("SalidaFC== ",lista);
	return lista;
}

async function valida_R(valida){
	const lista = [1,2,3];
	
	const control = await connection.query('SELECT * FROM propietario');
	console.log(control);
	if(control.length==''){
		console.log("Control vale cero");
	}
	for(let i=0;i<control.length;i++){
		lista.push(control[i].id_propietario);
		console.log("Lista: "+lista);
	}
	await console.log("Lista= ",lista);

	
	/*
	if(valida==control[i].id_propietario){
		valida=valida+1;
		console.log("A validar: "+valida);
	}*/
	console.log("Salida: "+valida);
	return valida;
}
// Retorna un número aleatorio entre min (incluido) y max (excluido)
function gRA(min, max) {
	let salida = Math.random() * (max - min) + min;
	salida = parseInt(salida);
	
	return salida;
}
//Archivos
app.post('/files', upload.single('avatar') ,async (req,res)=>{
	const xlsx = require('xlsx');
	const ruta = ('entradas/'+req.session.name_2+'.xlsx');
	const wb = xlsx.readFile(ruta);
	//var ws = wb.Sheets['DRO Y C '];
	const wbs = wb.SheetNames;
	const ws = wb.Sheets[wbs[0]];
	const informe = obtenerDatos(ws);

	
	
	//prueba= await valida_R(prueba);
	//console.log("campo validado= "+prueba);
	/*
	for(let i=0;i<informe[0].length;i++) {
		//informe[0][i];//[0]nombre de la fila i
		//informe[1][i];//[1]emision de la fila 1
		let num_id = gRA(1,99999);
		//------------------------------------ Insertar Proietario--------------------------------------
		connection.query('INSERT INTO propietario SET ? ', {
			id_propietario:num_id,// campo de la BD : dato del formulario (Fun)
			propietario:informe[47][i]
		},async (error, results) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Proietario: "+num_id+" insertado");
			}
		});
		//------------------------------------ Insertar Proietario--------------------------------------
		connection.query('INSERT INTO propietario SET ? ', {
			id_propietario:num_id,// campo de la BD : dato del formulario (Fun)
			propietario:informe[47][i]
		},async (error, results) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Proietario: "+num_id+" insertado");
			}
		});
		//------------------------------------ Insertar Predio--------------------------------------
		connection.query('INSERT INTO predio SET ? ', {
			id_predio:num_id,// campo de la BD : dato del formulario (Fun)
			direccion:informe[3][i],
			superficie_predio:informe[31][i],
			niveles_snb:informe[33][i],
			niveles_bnb:informe[34][i],
			viviendas:informe[35][i],
			cajones:informe[36][i],
			altura_soporte:informe[39][i],
			antenas:informe[40][i],
			longitud_instalacion_subt:informe[41][i],
			resp_grupo:"2000/20",
			id_propietario:num_id
		},async (error, results) => {
			if (error) {
				console.log(error);
			} else {
				console.log("Predio: "+num_id+" insertado");
			}
		});
	}
	*/
	connection.query('select * from propietario;',(error,results)=>{
		if(error){
			throw error;
		}else{
			connection.query('select * from usuarios;',(error,results_1)=>{
				if(error){
					throw error;
				}else{
					if (req.session.loggedin) {
						//results.forEach(element => console.log(element.nombre));
						//console.log("results= ",results[0].email_usuario);
						res.render('responsivas_file.ejs', {
							results:results,
							results_1:results_1,
							informe:informe,
							login: true,
							name: req.session.name	
						});
					} else {
						res.render('index.ejs', {
							login: false,
							name: 'Debe iniciar sesión',
						});
					}
					res.end();
				}
			})
		}			
	})
});

app.get('/archivos',(req,res)=>{
	res.render('archivos.ejs');
	//res.sendFile('archivos.ejs')
});




// Consultas con app. get 
app.get('/consultas', (req, res) => {
	connection.query('select * from usuarios;',(error,results)=>{
		if(error){
			throw error;
		}else{
			if (req.session.loggedin) {
				results.forEach(element => console.log(element.nombre));
				//console.log("results= ",results[0].email_usuario);
				res.render('consultas.ejs', {
					results:results,
					login: true,
					name: req.session.name
					
				});
				var doc = new PDF();
				doc.pipe(fs.createWriteStream(__dirname+'/public/pdf/ejemplo.pdf'));
				
				doc.text('Nombres: ');
				results.forEach(element => {
					
					doc.text(element.nombre,{
						align:'justify'
					});
					doc.text(element.num_registro,{
						align:'justify'
					});
				});
				
				doc.end();
				//console.log("PDF CREADO");
			} else {
				res.render('index.ejs', {
					login: false,
					name: 'Debe iniciar sesión',
				});
			}
			res.end();
		}
	})
});

/*
app.get('/consultas', (req, res) => {
	var doc = new PDF();
	doc.pipe(fs.createWriteStream(__dirname+'/public/pdf/ejemplo.pdf'));
	doc.text('Hola mundo',{
		align:'justify'
	});
	doc.end();
	console.log("PDF CREADO");
	if (req.session.loggedin) {
		res.render('consultas.ejs', {
			login: true,
			name: req.session.name
		});
	} else {
		res.render('index.ejs', {
			login: false,
			name: 'Debe iniciar sesión',
		});
	}
	res.end();
});
*/
app.get('/informes', (req, res) => {
	if (req.session.loggedin) {
		res.render('informes.ejs', {
			login: true,
			name: req.session.name
		});
	} else {
		res.render('index.ejs', {
			login: false,
			name: 'Debe iniciar sesión',
		});
	}
	res.end();
});

app.get('/reglamento', (req, res) => {
	if (req.session.loggedin) {
		res.render('reglamento.ejs', {
			login: true,
			name: req.session.name
		});
	} else {
		res.render('index.ejs', {
			login: false,
			name: 'Debe iniciar sesión',
		});
	}
	res.end();
});

//función para limpiar la caché luego del logout
app.use(function (req, res, next) {
	if (!req.user)
		res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
	next();
});

//Logout
//Destruye la sesión.
app.get('/logout', function (req, res) {
	req.session.destroy(() => {
		res.redirect('/') // siempre se ejecutará después de que se destruya la sesión
	})
});




app.listen(3000, (req, res) => {
	console.log('Server runing in http://localhost:3000');
}

)
/*
//Manejador de archivos de excel
const xlsx = require('xlsx');
const wb = xlsx.readFile("informe.xlsx");
//var ws = wb.Sheets['DRO Y C '];
const wbs = wb.SheetNames;
const ws = wb.Sheets[wbs[0]];

console.log(wbs);
console.log(ws.B7.v);
console.log(ws.B8.v);
console.log(ws.A9.v +": "+ ws.B9.v);
console.log(ws.B10.v);
console.log(ws.B11.v);
console.log(ws.B12.v);
console.log(ws.B13.v);
console.log(ws.B14.v);
console.log(ws.B15.v);


//leerExcel("informe.xlsx");
*/