//Manejador de archivos de excel
const XLSX = require('xlsx');
function leerExcel(ruta_excel) {
	const libro = XLSX.readFile(ruta_excel);
	const libro_hojas = libro.SheetNames;
	//console.log(libro_hojas);
	const hoja = libro_hojas[0];
	const datos_json = XLSX.utils.sheet_to_json(libro.Sheets[hoja]);

	const a = 1;
	console.log(datos_json[3].__EMPTY);
	console.log(datos_json[3].__EMPTY_1);

	


}
//leerExcel("informe.xlsx");


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
				res.render('login', {
					alert: true,
					alertTitle: "Conexión exitosa usuario " + req.session.name,
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
				results.forEach(element => console.log(element.nombre));
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
	global.relacion_propietario=" ";

	/*
	console.log(nombre);
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
	*/
	
	//---------------------------------insertar datos en 1er tabla "propietario"----------------------------------------
	if(razon.length != 0){
		console.log("Insert en Razon social");
		connection.query('INSERT INTO propietario SET ? ', {
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
				var sql = "SELECT COUNT(*) as total FROM usuarios";
				var query = connection.query(sql, function(err, result) {
					relacion_propietario=result[0].total;
					console.log("Total Records D: " + relacion_propietario);	
				});
			}
	
		});
	}
	//---------------------------------insertar datos en 1er tabla "predio"----------------------------------------
	//datos a entrar 
	/*
	
	*/
	//Consultar el indice antes de insertar en la segunda tabla predio
	
	
	console.log("Total Records F: " + relacion_propietario);

	connection.query('INSERT INTO predio SET ? ', {
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
		id_propietario:relacion_propietario
	},async (error, results) => {
		if (error) {
			console.log(error);
		} else {
			console.log("1 record inserted");
		}
	});

	

});

// pagina de terminos y condiciones
app.get('/terminos',(req,res)=>{
	res.render('terminos.ejs');
});








app.get('/consultas', (req, res) => {
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
