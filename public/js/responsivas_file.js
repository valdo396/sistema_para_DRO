let informe = document.getElementById('informe');
const ids_propietarios= document.getElementById('pros');
try{
    let resp_0 = document.getElementById('resp_0');//.split(",")
    if(resp_0){
        let resp__0 = resp_0.value.split(',');
    }
    let resp_1 = document.getElementById('resp_1');
    if(resp_1){
        let resp__1=resp_1.value.split(",");
    }
    let resp_2 = document.getElementById('resp_2');
    if(resp_2){
        let resp__2 = resp_2.value.split(",");
    }
    let resp_3 = document.getElementById('resp_3');
    if(resp_3){
        let resp__3 = resp_3.value.split(",");
    }
    let resp_4 = document.getElementById('resp_4');
    if(resp_4){
        let resp__4 = resp_4.value.split(",");
    }
    let resp_5 = document.getElementById('resp_5');
    if(resp_5){
        let resp__5 = resp_5.value.split(",");
    }
    let resp_6 = document.getElementById('resp_6');
    if(resp_6){
        let resp__6 = resp_6.value.split(",");
    }
    let resp_7 = document.getElementById('resp_7');
    if(resp_7){
        let resp__7 = resp_7.value.split(",");
    }
    let resp_8 = document.getElementById('resp_8');
    if(resp_8){
        let resp__8 = resp_8.value.split(",");
    }
    let resp_9 = document.getElementById('resp_9');
    if(resp_9){
        let resp__9 = resp_9.value.split(",");
    }
    let resp_10 = document.getElementById('resp_10');
    if(resp_10){
        let resp__10 = resp_10.value.split(",");
    }
    let resp_11 = document.getElementById('resp_11');
    if(resp_11){
        let resp__11 = resp_11.value.split(",");
    }
    let resp_12 = document.getElementById('resp_12');
    if(resp_12){
        let resp__12 = resp_12.value.split(",");
    }
    let resp_13 = document.getElementById('resp_13');
    if(resp_13){
        let resp__13 = resp_13.value.split(",");
    }
    let resp_14 = document.getElementById('resp_14');
    if(resp_14){
        let resp__14 = resp_14.value.split(",");
    }
    let resp_15 = document.getElementById('resp_15');
    if(resp_15){
        let resp__15 = resp_15.value.split(","); 
    }
    let resp_16 = document.getElementById('resp_16');
    if(resp_16){
        let resp__16 = resp_16.value.split(",");
    }
    let resp_17 = document.getElementById('resp_17');
    if(resp_17){
        let resp__17 = resp_17.value.split(",");
    }
    let resp_18 = document.getElementById('resp_18');
    if(resp_18){
        let resp__18 = resp_18.value.split(",");   
    }
    let resp_19 = document.getElementById('resp_19');
    if(resp_19){
        let resp__19 = resp_19.value.split(",");
    }
    
}catch(e){
    console.log("El error es: ",e);
}
const agregarForm = (e) => {
	console.log(e.target.name);
    switch (e.target.name) {
        case "img_0":
            const resp__0 = resp_0.value.split(',');
            document.getElementById('fila_0').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__0[0];
            document.getElementById('emision').value=resp__0[1];
            if(resp__0[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__0[2];
            }
            document.getElementById('ubicacion').value=resp__0[3];
            document.getElementById('catastro').value=resp__0[4];
            if(resp__0[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__0[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__0[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__0[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__0[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__0[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__0[30];
            document.getElementById('m_predio').value=resp__0[31];
            document.getElementById('m_responsiva').value=resp__0[32];
            document.getElementById('snb').value=resp__0[33];
            document.getElementById('sotanos').value=resp__0[34];
            document.getElementById('viviendas').value=resp__0[35];
            document.getElementById('cajones').value=resp__0[36];
            document.getElementById('conservacion').value=resp__0[38];
            document.getElementById('estaciones').value=resp__0[39];
            document.getElementById('antenas').value=resp__0[40];
            document.getElementById('propietario_1').value=resp__0[47];//47 propietario
            document.getElementById('observaciones').value=resp__0[48];//48 observaciones
            //document.getElementById('img_0').src="resource/img/arrow-up-square-fill.svg";
        break;
        case "img_1":
            const resp__1 = resp_1.value.split(',');
            document.getElementById('fila_1').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__1[0];
            document.getElementById('emision').value=resp__1[1];
            if(resp__1[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__1[2];
            }
            document.getElementById('ubicacion').value=resp__1[3];
            document.getElementById('catastro').value=resp__1[4];
            if(resp__1[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__1[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__1[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__1[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__1[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__1[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__1[30];
            document.getElementById('m_predio').value=resp__1[31];
            document.getElementById('m_responsiva').value=resp__1[32];
            document.getElementById('snb').value=resp__1[33];
            document.getElementById('sotanos').value=resp__1[34];
            document.getElementById('viviendas').value=resp__1[35];
            document.getElementById('cajones').value=resp__1[36];
            document.getElementById('conservacion').value=resp__1[38];
            document.getElementById('estaciones').value=resp__1[39];
            document.getElementById('antenas').value=resp__1[40];
            document.getElementById('propietario_1').value=resp__1[47];//47 propietario
            document.getElementById('observaciones').value=resp__1[48];//48 observaciones
        break;
        case "img_2":
            const resp__2 = resp_2.value.split(',');
            document.getElementById('fila_2').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__2[0];
            document.getElementById('emision').value=resp__2[1];
            if(resp__2[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__2[2];
            }
            document.getElementById('ubicacion').value=resp__2[3];
            document.getElementById('catastro').value=resp__2[4];
            if(resp__2[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__2[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__2[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__2[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__2[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__2[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__2[30];
            document.getElementById('m_predio').value=resp__2[31];
            document.getElementById('m_responsiva').value=resp__2[32];
            document.getElementById('snb').value=resp__2[33];
            document.getElementById('sotanos').value=resp__2[34];
            document.getElementById('viviendas').value=resp__2[35];
            document.getElementById('cajones').value=resp__2[36];
            document.getElementById('conservacion').value=resp__2[38];
            document.getElementById('estaciones').value=resp__2[39];
            document.getElementById('antenas').value=resp__2[40];
            document.getElementById('propietario_1').value=resp__2[47];//47 propietario
            document.getElementById('observaciones').value=resp__2[48];
        break;
        case "img_3":
            const resp__3 = resp_3.value.split(',');
            document.getElementById('fila_3').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__3[0];
            document.getElementById('emision').value=resp__3[1];
            if(resp__3[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__3[2];
            }
            document.getElementById('ubicacion').value=resp__3[3];
            document.getElementById('catastro').value=resp__3[4];
            if(resp__3[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__3[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__3[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__3[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__3[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__3[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__3[30];
            document.getElementById('m_predio').value=resp__3[31];
            document.getElementById('m_responsiva').value=resp__3[32];
            document.getElementById('snb').value=resp__3[33];
            document.getElementById('sotanos').value=resp__3[34];
            document.getElementById('viviendas').value=resp__3[35];
            document.getElementById('cajones').value=resp__3[36];
            document.getElementById('conservacion').value=resp__3[38];
            document.getElementById('estaciones').value=resp__3[39];
            document.getElementById('antenas').value=resp__3[40];
            document.getElementById('propietario_1').value=resp__3[47];//47 propietario
            document.getElementById('observaciones').value=resp__3[48];//48 observaciones
        break;
        case "img_4":
            const resp__4 = resp_4.value.split(',');
            document.getElementById('fila_4').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__4[0];
            document.getElementById('emision').value=resp__4[1];
            if(resp__4[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__4[2];
            }
            document.getElementById('ubicacion').value=resp__4[3];
            document.getElementById('catastro').value=resp__4[4];
            if(resp__4[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__4[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__4[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__4[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__4[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__4[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__4[30];
            document.getElementById('m_predio').value=resp__4[31];
            document.getElementById('m_responsiva').value=resp__4[32];
            document.getElementById('snb').value=resp__4[33];
            document.getElementById('sotanos').value=resp__4[34];
            document.getElementById('viviendas').value=resp__4[35];
            document.getElementById('cajones').value=resp__4[36];
            document.getElementById('conservacion').value=resp__4[38];
            document.getElementById('estaciones').value=resp__4[39];
            document.getElementById('antenas').value=resp__4[40];
            document.getElementById('propietario_1').value=resp__4[47];//47 propietario
            document.getElementById('observaciones').value=resp__4[48];//48 observaciones
        break;
        case "img_5":
            const resp__5 = resp_5.value.split(',');
            document.getElementById('fila_5').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__5[0];
            document.getElementById('emision').value=resp__5[1];
            if(resp__5[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__5[2];
            }
            document.getElementById('ubicacion').value=resp__5[3];
            document.getElementById('catastro').value=resp__5[4];
            if(resp__5[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__5[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__5[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__5[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__5[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__5[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__5[30];
            document.getElementById('m_predio').value=resp__5[31];
            document.getElementById('m_responsiva').value=resp__5[32];
            document.getElementById('snb').value=resp__5[33];
            document.getElementById('sotanos').value=resp__5[34];
            document.getElementById('viviendas').value=resp__5[35];
            document.getElementById('cajones').value=resp__5[36];
            document.getElementById('conservacion').value=resp__5[38];
            document.getElementById('estaciones').value=resp__5[39];
            document.getElementById('antenas').value=resp__5[40];
            document.getElementById('propietario_1').value=resp__5[47];//47 propietario
            document.getElementById('observaciones').value=resp__5[48];//48 observaciones
        break;
        case "img_6":
            const resp__6 = resp_6.value.split(',');
            document.getElementById('fila_6').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__6[0];
            document.getElementById('emision').value=resp__6[1];
            if(resp__6[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__6[2];
            }
            document.getElementById('ubicacion').value=resp__6[3];
            document.getElementById('catastro').value=resp__6[4];
            if(resp__6[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__6[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__6[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__6[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__6[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__6[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__6[30];
            document.getElementById('m_predio').value=resp__6[31];
            document.getElementById('m_responsiva').value=resp__6[32];
            document.getElementById('snb').value=resp__6[33];
            document.getElementById('sotanos').value=resp__6[34];
            document.getElementById('viviendas').value=resp__6[35];
            document.getElementById('cajones').value=resp__6[36];
            document.getElementById('conservacion').value=resp__6[38];
            document.getElementById('estaciones').value=resp__6[39];
            document.getElementById('antenas').value=resp__6[40];
            document.getElementById('propietario_1').value=resp__6[47];//47 propietario
            document.getElementById('observaciones').value=resp__6[48];//48 observaciones
        break;
        case "img_7":
            const resp__7 = resp_7.value.split(',');
            document.getElementById('fila_7').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__7[0];
            document.getElementById('emision').value=resp__7[1];
            if(resp__7[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__7[2];
            }
            document.getElementById('ubicacion').value=resp__7[3];
            document.getElementById('catastro').value=resp__7[4];
            if(resp__7[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__7[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__7[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__7[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__7[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__7[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__7[30];
            document.getElementById('m_predio').value=resp__7[31];
            document.getElementById('m_responsiva').value=resp__7[32];
            document.getElementById('snb').value=resp__7[33];
            document.getElementById('sotanos').value=resp__7[34];
            document.getElementById('viviendas').value=resp__7[35];
            document.getElementById('cajones').value=resp__7[36];
            document.getElementById('conservacion').value=resp__7[38];
            document.getElementById('estaciones').value=resp__7[39];
            document.getElementById('antenas').value=resp__7[40];
            document.getElementById('propietario_1').value=resp__7[47];//47 propietario
            document.getElementById('observaciones').value=resp__7[48];//48 observaciones
        break;
        case "img_8":
            const resp__8 = resp_8.value.split(',');
            document.getElementById('fila_8').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__8[0];
            document.getElementById('emision').value=resp__8[1];
            if(resp__8[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__8[2];
            }
            document.getElementById('ubicacion').value=resp__8[3];
            document.getElementById('catastro').value=resp__8[4];
            if(resp__8[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__8[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__8[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__8[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__8[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__8[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__8[30];
            document.getElementById('m_predio').value=resp__8[31];
            document.getElementById('m_responsiva').value=resp__8[32];
            document.getElementById('snb').value=resp__8[33];
            document.getElementById('sotanos').value=resp__8[34];
            document.getElementById('viviendas').value=resp__8[35];
            document.getElementById('cajones').value=resp__8[36];
            document.getElementById('conservacion').value=resp__8[38];
            document.getElementById('estaciones').value=resp__8[39];
            document.getElementById('antenas').value=resp__8[40];
            document.getElementById('propietario_1').value=resp__8[47];//47 propietario
            document.getElementById('observaciones').value=resp__8[48];//48 observaciones
        break;
        case "img_9":
            const resp__9 = resp_9.value.split(',');
            document.getElementById('fila_9').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__9[0];
            document.getElementById('emision').value=resp__9[1];
            if(resp__9[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__9[2];
            }
            document.getElementById('ubicacion').value=resp__9[3];
            document.getElementById('catastro').value=resp__9[4];
            if(resp__9[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__9[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__9[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__9[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__9[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__9[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__9[30];
            document.getElementById('m_predio').value=resp__9[31];
            document.getElementById('m_responsiva').value=resp__9[32];
            document.getElementById('snb').value=resp__9[33];
            document.getElementById('sotanos').value=resp__9[34];
            document.getElementById('viviendas').value=resp__9[35];
            document.getElementById('cajones').value=resp__9[36];
            document.getElementById('conservacion').value=resp__9[38];
            document.getElementById('estaciones').value=resp__9[39];
            document.getElementById('antenas').value=resp__9[40];
            document.getElementById('propietario_1').value=resp__9[47];//47 propietario
            document.getElementById('observaciones').value=resp__9[48];//48 observaciones
        break;
        case "img_10":
            const resp__10 = resp_10.value.split(',');
            document.getElementById('fila_10').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__10[0];
            document.getElementById('emision').value=resp__10[1];
            if(resp__10[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__10[2];
            }
            document.getElementById('ubicacion').value=resp__10[3];
            document.getElementById('catastro').value=resp__10[4];
            if(resp__10[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__10[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__10[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__10[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__10[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__10[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__10[30];
            document.getElementById('m_predio').value=resp__10[31];
            document.getElementById('m_responsiva').value=resp__10[32];
            document.getElementById('snb').value=resp__10[33];
            document.getElementById('sotanos').value=resp__10[34];
            document.getElementById('viviendas').value=resp__10[35];
            document.getElementById('cajones').value=resp__10[36];
            document.getElementById('conservacion').value=resp__10[38];
            document.getElementById('estaciones').value=resp__10[39];
            document.getElementById('antenas').value=resp__10[40];
            document.getElementById('propietario_1').value=resp__10[47];//47 propietario
            document.getElementById('observaciones').value=resp__10[48];//48 observaciones
        break;
        case "img_11":
            const resp__11 = resp_11.value.split(',');
            document.getElementById('fila_11').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__11[0];
            document.getElementById('emision').value=resp__11[1];
            if(resp__11[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__11[2];
            }
            document.getElementById('ubicacion').value=resp__11[3];
            document.getElementById('catastro').value=resp__11[4];
            if(resp__11[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__11[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__11[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__11[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__11[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__11[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__11[30];
            document.getElementById('m_predio').value=resp__11[31];
            document.getElementById('m_responsiva').value=resp__11[32];
            document.getElementById('snb').value=resp__11[33];
            document.getElementById('sotanos').value=resp__11[34];
            document.getElementById('viviendas').value=resp__11[35];
            document.getElementById('cajones').value=resp__11[36];
            document.getElementById('conservacion').value=resp__11[38];
            document.getElementById('estaciones').value=resp__11[39];
            document.getElementById('antenas').value=resp__11[40];
            document.getElementById('propietario_1').value=resp__11[47];//47 propietario
            document.getElementById('observaciones').value=resp__11[48];//48 observaciones
        break;
        case "img_12":
            const resp__12 = resp_12.value.split(',');
            document.getElementById('fila_12').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__12[0];
            document.getElementById('emision').value=resp__12[1];
            if(resp__12[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__12[2];
            }
            document.getElementById('ubicacion').value=resp__12[3];
            document.getElementById('catastro').value=resp__12[4];
            if(resp__12[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__12[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__12[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__12[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__12[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__12[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__12[30];
            document.getElementById('m_predio').value=resp__12[31];
            document.getElementById('m_responsiva').value=resp__12[32];
            document.getElementById('snb').value=resp__12[33];
            document.getElementById('sotanos').value=resp__12[34];
            document.getElementById('viviendas').value=resp__12[35];
            document.getElementById('cajones').value=resp__12[36];
            document.getElementById('conservacion').value=resp__12[38];
            document.getElementById('estaciones').value=resp__12[39];
            document.getElementById('antenas').value=resp__12[40];
            document.getElementById('propietario_1').value=resp__12[47];//47 propietario
            document.getElementById('observaciones').value=resp__12[48];//48 observaciones
        break;
        case "img_13":
            const resp__13 = resp_13.value.split(',');
            document.getElementById('fila_13').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__13[0];
            document.getElementById('emision').value=resp__13[1];
            if(resp__13[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__13[2];
            }
            document.getElementById('ubicacion').value=resp__13[3];
            document.getElementById('catastro').value=resp__13[4];
            if(resp__13[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__13[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__13[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__13[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__13[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__13[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__13[30];
            document.getElementById('m_predio').value=resp__13[31];
            document.getElementById('m_responsiva').value=resp__13[32];
            document.getElementById('snb').value=resp__13[33];
            document.getElementById('sotanos').value=resp__13[34];
            document.getElementById('viviendas').value=resp__13[35];
            document.getElementById('cajones').value=resp__13[36];
            document.getElementById('conservacion').value=resp__13[38];
            document.getElementById('estaciones').value=resp__13[39];
            document.getElementById('antenas').value=resp__13[40];
            document.getElementById('propietario_1').value=resp__13[47];//47 propietario
            document.getElementById('observaciones').value=resp__13[48];//48 observaciones
        break;
        case "img_14":
            const resp__14 = resp_14.value.split(',');
            document.getElementById('fila_14').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__14[0];
            document.getElementById('emision').value=resp__14[1];
            if(resp__14[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__14[2];
            }
            document.getElementById('ubicacion').value=resp__14[3];
            document.getElementById('catastro').value=resp__14[4];
            if(resp__14[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__14[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__14[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__14[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__14[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__14[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__14[30];
            document.getElementById('m_predio').value=resp__14[31];
            document.getElementById('m_responsiva').value=resp__14[32];
            document.getElementById('snb').value=resp__14[33];
            document.getElementById('sotanos').value=resp__14[34];
            document.getElementById('viviendas').value=resp__14[35];
            document.getElementById('cajones').value=resp__14[36];
            document.getElementById('conservacion').value=resp__14[38];
            document.getElementById('estaciones').value=resp__14[39];
            document.getElementById('antenas').value=resp__14[40];
            document.getElementById('propietario_1').value=resp__14[47];//47 propietario
            document.getElementById('observaciones').value=resp__14[48];//48 observaciones
        break;
        case "img_15":
            const resp__15 = resp_15.value.split(',');
            document.getElementById('fila_15').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__15[0];
            document.getElementById('emision').value=resp__15[1];
            if(resp__15[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__15[2];
            }
            document.getElementById('ubicacion').value=resp__15[3];
            document.getElementById('catastro').value=resp__15[4];
            if(resp__15[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__15[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__15[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__15[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__15[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__15[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__15[30];
            document.getElementById('m_predio').value=resp__15[31];
            document.getElementById('m_responsiva').value=resp__15[32];
            document.getElementById('snb').value=resp__15[33];
            document.getElementById('sotanos').value=resp__15[34];
            document.getElementById('viviendas').value=resp__15[35];
            document.getElementById('cajones').value=resp__15[36];
            document.getElementById('conservacion').value=resp__15[38];
            document.getElementById('estaciones').value=resp__15[39];
            document.getElementById('antenas').value=resp__15[40];
            document.getElementById('propietario_1').value=resp__15[47];//47 propietario
            document.getElementById('observaciones').value=resp__15[48];//48 observaciones
        break;
        case "img_16":
            const resp__16 = resp_16.value.split(',');
            document.getElementById('fila_16').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__16[0];
            document.getElementById('emision').value=resp__16[1];
            if(resp__16[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__16[2];
            }
            document.getElementById('ubicacion').value=resp__16[3];
            document.getElementById('catastro').value=resp__16[4];
            if(resp__16[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__16[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__16[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__16[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__16[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__16[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__16[30];
            document.getElementById('m_predio').value=resp__16[31];
            document.getElementById('m_responsiva').value=resp__16[32];
            document.getElementById('snb').value=resp__16[33];
            document.getElementById('sotanos').value=resp__16[34];
            document.getElementById('viviendas').value=resp__16[35];
            document.getElementById('cajones').value=resp__16[36];
            document.getElementById('conservacion').value=resp__16[38];
            document.getElementById('estaciones').value=resp__16[39];
            document.getElementById('antenas').value=resp__16[40];
            document.getElementById('propietario_1').value=resp__16[47];//47 propietario
            document.getElementById('observaciones').value=resp__16[48];//48 observaciones
        break;
        case "img_17":
            const resp__17 = resp_17.value.split(',');
            document.getElementById('fila_17').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__17[0];
            document.getElementById('emision').value=resp__17[1];
            if(resp__17[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__17[2];
            }
            document.getElementById('ubicacion').value=resp__17[3];
            document.getElementById('catastro').value=resp__17[4];
            if(resp__17[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__17[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__17[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__17[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__17[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__17[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__17[30];
            document.getElementById('m_predio').value=resp__17[31];
            document.getElementById('m_responsiva').value=resp__17[32];
            document.getElementById('snb').value=resp__17[33];
            document.getElementById('sotanos').value=resp__17[34];
            document.getElementById('viviendas').value=resp__17[35];
            document.getElementById('cajones').value=resp__17[36];
            document.getElementById('conservacion').value=resp__17[38];
            document.getElementById('estaciones').value=resp__17[39];
            document.getElementById('antenas').value=resp__17[40];
            document.getElementById('propietario_1').value=resp__17[47];//47 propietario
            document.getElementById('observaciones').value=resp__17[48];//48 observaciones
        break;
        case "img_18":
            const resp__18 = resp_18.value.split(',');
            document.getElementById('fila_18').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__18[0];
            document.getElementById('emision').value=resp__18[1];
            if(resp__18[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__18[2];
            }
            document.getElementById('ubicacion').value=resp__18[3];
            document.getElementById('catastro').value=resp__18[4];
            if(resp__18[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__18[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__18[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__18[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__18[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__18[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__18[30];
            document.getElementById('m_predio').value=resp__18[31];
            document.getElementById('m_responsiva').value=resp__18[32];
            document.getElementById('snb').value=resp__18[33];
            document.getElementById('sotanos').value=resp__18[34];
            document.getElementById('viviendas').value=resp__18[35];
            document.getElementById('cajones').value=resp__18[36];
            document.getElementById('conservacion').value=resp__18[38];
            document.getElementById('estaciones').value=resp__18[39];
            document.getElementById('antenas').value=resp__18[40];
            document.getElementById('propietario_1').value=resp__18[47];//47 propietario
            document.getElementById('observaciones').value=resp__18[48];//48 observaciones
        break;
        case "img_19":
            const resp__19 = resp_19.value.split(',');
            document.getElementById('fila_19').innerHTML='<img id="img_0" name="img_0" src="resource/img/arrow-up-square-fill.svg" width="60" height="30"><br>Cargado al Formulario';
            document.getElementById('nombre').value=resp__19[0];
            document.getElementById('emision').value=resp__19[1];
            if(resp__19[2]=="-"){
                document.getElementById('vigencia').type='text';
                document.getElementById('vigencia').value='-';
            }else{
                document.getElementById('vigencia').value=resp__19[2];
            }
            document.getElementById('ubicacion').value=resp__19[3];
            document.getElementById('catastro').value=resp__19[4];
            if(resp__19[5]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"B\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__19[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__19[6]=="X"){
                document.getElementById('tipos').value='Manifestación tipo \"C\"';//8-14
                for(let i=8;i<15;i++){
                    if(resp__19[i]=="X"){
                        switch(i){
                            case 8:
                                document.getElementById('manifes').value='Obra nueva';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 9:
                                document.getElementById('manifes').value='Ampliación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 10:
                                document.getElementById('manifes').value='Modificación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 11:
                                document.getElementById('manifes').value='Reparación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 12:
                                document.getElementById('manifes').value='Barda (mayor de 2.50 m. de altura)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 13:
                                document.getElementById('manifes').value='Prórroga, (indicar % avance)';
                                document.getElementById('licencias').value='No aplica';
                            break;
                            case 14:
                                document.getElementById('manifes').value='Uso y ocupación';
                                document.getElementById('licencias').value='No aplica';
                            break;
                        }
                    }
                }
            }
            if(resp__19[7]=="X"){
                document.getElementById('tipos').value='ESPECIALES y OTRAS RESPONSIVAS';//15-29
                for(let i=15;i<30;i++){
                    if(resp__19[i]=="X"){
                        switch(i){
                            case 15:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Edificaciones en suelo de conservación';
                            break;
                            case 16:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Estaciones repetidoras de comunicación celular o inalámbrica';
                            break;
                            case 17:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones subterráneas o aéreas en la vía pública';
                            break;
                            case 18:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Demolición';
                            break;
                            case 19:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Excavaciones o cortes cuya profundidad sea mayor de 1m';
                            break;
                            case 20:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Tapiales que invadan la acera en una medida superior a 0.5 m';
                            break;
                            case 21:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Obras o instalaciones temporales';
                            break;
                            case 22:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Instalaciones o modificaciones en edificaciones existentes(ascensores, escaleras mecánicas)';
                            break;
                            case 23:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Registro de obra ejecutada';
                            break;
                            case 24:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Licencia de anuncio';
                            break;
                            case 25:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Const. de Seg. Estructural';
                            break;
                            case 26:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Vo. Bo. de Seg. y Operación';
                            break;
                            case 27:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Desmantelamiento';
                            break;
                            case 28:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Aviso de terminación de obra';
                            break;
                            case 29:
                                document.getElementById('manifes').value='No aplica';
                                document.getElementById('licencias').value='Otros (en observaciones)';
                            break;
                        }
                    }
                }
            }
            document.getElementById('uso').value=resp__19[30];
            document.getElementById('m_predio').value=resp__19[31];
            document.getElementById('m_responsiva').value=resp__19[32];
            document.getElementById('snb').value=resp__19[33];
            document.getElementById('sotanos').value=resp__19[34];
            document.getElementById('viviendas').value=resp__19[35];
            document.getElementById('cajones').value=resp__19[36];
            document.getElementById('conservacion').value=resp__19[38];
            document.getElementById('estaciones').value=resp__19[39];
            document.getElementById('antenas').value=resp__19[40];
            document.getElementById('propietario_1').value=resp__19[47];//47 propietario
            document.getElementById('observaciones').value=resp__19[48];//48 observaciones
        break;
    }

}
const imgs = document.querySelectorAll('#tabla img');
imgs.forEach((img) => {
	img.addEventListener('click', agregarForm);
});

function enviar_formulario_2(){
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
	document.getElementById("formulario").submit();   
    console.log("FORMULARIO_FILE ENVIADO");
	setTimeout(() => {
		document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		formulario.reset();
	}, 1000);
}



// CONVERTIR EL DATATIME A FORMATO NORMAL  PARA LA SAILDA DE DATOS
/*const date = resp__0[1];
            const emi = date.split("/").reverse().join("-");
            const date_1= resp__0[2];
            console.log("EMISON = ",date_1);
            const vig = date_1.split("/").reverse().join("-");*/
