(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{112:function(e,a,o){"use strict";var r=o(169),t=JSON.parse,s=JSON.stringify,n={clear:function(e){return localStorage&&localStorage.getItem(e)?localStorage.removeItem(e):sessionStorage&&sessionStorage.getItem(e)?sessionStorage.removeItem(e):null},clearAppStorage:function(){localStorage&&localStorage.clear(),sessionStorage&&sessionStorage.clear()},clearToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwtToken";return n.clear(e)},clearUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"userInfo";return n.clear(e)},get:function(e){return localStorage&&localStorage.getItem(e)?t(localStorage.getItem(e))||null:sessionStorage&&sessionStorage.getItem(e)&&t(sessionStorage.getItem(e))||null},getToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwtToken";return n.get(e)},getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"userInfo";return n.get(e)},set:function(e,a,o){return Object(r.isEmpty)(e)?null:o&&localStorage?localStorage.setItem(a,s(e)):sessionStorage?sessionStorage.setItem(a,s(e)):null},setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"jwtToken";return n.set(e,o,a)},setUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"userInfo";return n.set(e,o,a)}};a.a=n},125:function(e,a,o){"use strict";o.r(a),o.d(a,"fetchRequest",function(){return n}),o.d(a,"fetchResponse",function(){return i}),o.d(a,"getEngines",function(){return c}),o.d(a,"selectProcess",function(){return l}),o.d(a,"setProcessSelected",function(){return d}),o.d(a,"changeFileID",function(){return u});var r,t=o(6),s=o(3),n=Object(s.createAction)("fetch request",function(e){return{loading:e}}),i=Object(s.createAction)("fetch response",function(e){return{loading:e}}),c=Object(s.createAction)("get engines",function(e,a){return{engines:e,defaultValue:a}}),l=Object(s.createAction)("select process",function(e){return{selected:e}}),d=Object(s.createAction)("set processSelected",function(e){return{processSelected:e}}),u=Object(s.createAction)("change fileId",function(e){return{fileId:e}});a.default=Object(s.createReducer)((r={},Object(t.a)(r,d,function(e,a){var o=a.processSelected;return Object.assign({},e,{processSelected:o})}),Object(t.a)(r,l,function(e,a){var o=a.selected;return Object.assign({},e,{selected:o})}),Object(t.a)(r,c,function(e,a){var o=a.engines,r=a.defaultValue;return Object.assign({},e,{engines:o,defaultValue:r})}),Object(t.a)(r,u,function(e,a){var o=a.fileId;return Object.assign({},e,{fileId:o})}),Object(t.a)(r,n,function(e){return Object.assign({},e,{loading:!0})}),Object(t.a)(r,i,function(e){return Object.assign({},e,{loading:!1})}),r),{selected:{name:null,engines:[]},loading:!1,engines:[],defaultValue:null,fileId:null,processSelected:null})},143:function(e,a,o){"use strict";o.r(a),o.d(a,"fetchAuth",function(){return c}),o.d(a,"addNotifications",function(){return l}),o.d(a,"changeNotifications",function(){return d});var r,t=o(6),s=o(116),n=o(3),i=o(270),c=Object(n.createAction)("fetch auth",function(e){return{auth:e.auth,accessToken:e.accessToken}}),l=Object(n.createAction)("add  notifications",function(e){return{notifications:e}}),d=Object(n.createAction)("change  notifications",function(e){return{notifications:e}});a.default=Object(n.createReducer)((r={},Object(t.a)(r,d,function(e,a){var o=a.notifications;return Object.assign({},e,{notifications:o})}),Object(t.a)(r,l,function(e,a){var o=a.notifications;return o=i.concat(e.notifications,o),Object(s.a)({},e,{notifications:o})}),r),{notifications:[]})},163:function(e,a){},166:function(e){e.exports={engines:{allServices:"All Services",all:"All Engines",enables:"Engines Granted",add:"Add Engine",model:"Model",service:"Service",inserviceid:"In Service Id",descr:"Description",src:"Source",tgt:"Target",domain:"Domain",flavor:"Flavor",status:"Status",confirmDelete:"Are you sure delete this Engine?",edit:"Edit Engine",delete:"Delete Engine",enabled:"Enabled Engine",disabled:"Disabled Engine",rules:{service:{required:"Please input your Service!"},inserviceid:{required:"Please input the inserviceid field!"},descr:{required:"Please input your Description!"},src:{required:"Please input your Source!"},tgt:{required:"Please input your Target!"},domain:{required:"Please input your Path!"},flavor:{required:"Please input your Father!"}}},eds:{all:"All Eds",add:"Add Ed",node_id:"Node Id",model_id:"Model Id",engine_id:"Engine Id",running_mode:"Running Mode",last_tu:"Last Tu",status:"status",confirmDelete:"Are you sure delete this Ed?",delete:"Delete Ed",enabled:"Enable Ed",disabled:"Disable Ed",rules:{node_id:{required:"Please input your Node Id!"},model_id:{required:"Please input your Model Id!"},engine_id:{required:"Please input your Engine Id!"},running_mode:{required:"Please input your Running Mode!"},last_tu:{required:"Please input your last Tu!"},status:{required:"Please input your Status!"}}},nodes:{all:"All Nodes",add:"Add Node",name:"Name",ipaddress:"IP Address",port:"Port",status:"Status",confirmDelete:"Are you sure to delete this Node?",confirmRestart:"Are you sure to restart the node?",restart:"Restart Node",edit:"Edit Node",delete:"Delete Node",enabled:"Enabled Node",disabled:"Disabled Node",eds:"Show Eds",setStatus:"Set Node Status",rules:{name:{required:"Please input your Name!"},ipaddress:{required:"Please input your IP Address!"},port:{required:"Please input your Port!"},status:{required:"Please input your Status!"}}},models:{all:"All Models",add:"Add Model",name:"Name",descr:"Description",src:"Source",tgt:"Target",path:"Path",father:"Father",updated:"Updated",last_tu:"Last_tu",olmode:"Clonable",trainable:"Trainable",status:"status",confirmDelete:"Are you sure delete this Model?",edit:"Edit Model",delete:"Delete Model",clone:"Clone Model",children:"Show children",rules:{name:{required:"Please input your Name!"},descr:{required:"Please input your Description!"},src:{required:"Please input your Source!"},tgt:{required:"Please input your Target!"},path:{required:"Please input your Path!"},father:{required:"Please input your Father!"},last_tu:{required:"Please input your Last_tu!"},olmode:{required:"Please input your Clonable!"},updated:{required:"Please input your Updated!"},status:{required:"Please input your Status!"}}},payment:{cancel:{paymentProcessCanceled:"Payment process canceled",canceled:"Canceled",detailsOfTheProcess:"Details of the Process",filename:"Filename",nameOfProcess:"Name of process",language:"Language",status:"Status",quotedPrice:"Quoted price"},error:{paymentProcessCanceled:"Payment process error",canceled:"Error"},success:{paymentProcessCanceled:"Payment process success",canceled:"Success"},question1:"Are you a company of the European Union?",question2:"Are you a citizen of the European Union?",question3:"Other cases.",step1:"Question",step2:"Verification",step3:"Pay",alert:"TAX/VAT/IVA Included",info:"Click in the amount to pay to choose the process mode",modal:"Payment process",next:"Next",previous:"Previous",form:{name:"Name",address:"Address",country:"Country",vattax:"VAT/TAX number",error:{name:"Please input your Name!",address:"Please input your Address!",country:"Please select your country!",vattax:"Please input your VAT/TAX number!"}}},dashboard:{lastWeek:"Last Week",lastMonth:"Last Month",visits:"Visits",dailyVisits:"Daily visits",descriptionOfTheIndicator:"Description of the indicator",numberOfUsers:"Number of users",visitThisWeek:"Visit this week",numberOfProcesses:"Number of Processes",totalExpenses:"Total Expenses",expensesthisMonth:"Expenses this Month",salesThisMonth:"Sales this Month",processesThisMonth:"Processes this Month",process:"Processes",processesCompleted:"Processes completed",salesTrend:"Activity trend",lastProcesses:"Last processes",casualUser:"Number of processes for casual users",registerUser:"Number of processes for registered users"},profile:{oldPassword:"Old password",errorOldPassword:"The old password is incorrect",changePassword:"Change password",editProfile:"Edit profile",billinginformation:"Billing information",name:"Name",address:"Address",country:"Country",vattax:"VAT/TAX number",account:"Account"},typeOfPermits:{name:"Name",defaultValue:"Default Value",default:"Default",confirm:"Are you sure delete this Type of Permits?",addPermissionType:"Add permission type",create:"Create permission type",edit:"Edit permission type",updateEngines:"Reload Engines",rules:{name:{required:"Please input Name field!"},defaultValue:{required:"Please input Default Value field!"}}},settings:{mailNotifications:"Mail Notifications",infoNotesEmails:"Manage notifications through the email, select which notification activate.",infoNotesPayPal:"Data of the PayPal account with which transactions are made.",infoNotesProcesses:"Management of different groups (Motors / Processes) that are assigned to different users.",client_id:"Client Id",client_secret:"Client Secret",rules:{client_id:{required:"Please input your Client Id!"},client_secret:{required:"Please confirm your Client Secret!"}}},users:{all:"All Users",create:"Create user",edit:"Edit user",confirmDelete:"Are you sure delete this User?",addUser:"Add user"},languages:{en:"English",es:"Spanish"},menus:{dashboard:"Dashboard",user:"Users",profile:"Profile",logout:"Logout",models:"Models",nodes:"Nodes",eds:"EDS",setting:"Settings",processServices:"Services / Processes",services:"Services",engines:"Engines",stats:"Stats"},default:{success:"The action was successful",loading:"Loading",seeMore:"see more",cancel:"Cancel",create:"Create",save:"Save",send:"Send",actions:"Actions",no:"No",yes:"Yes",infoNotes:"Informational Notes",goBack:"Go back",goHome:"Back to Home",notFound:"Sorry, the page you have visited does not exist.",signIn:"Sign In",signUp:"Sign Up",getStarted:"Get Started",granted:"Granted"},process:{user:"User",client:"Client",drag:"Click or drag file to this area to upload",alert:"You must upload a file before continuing!!",process:"Process type",processText:"Process",source:"Source Language",target:"Target Language",notification:"Notification email",notificationHelp:"The result of the process will be notified via email.",uploading:"Uploading",uploadingLoad:"Start Upload",loading:"Loading",errorProcess:"Hmm, something went wrong",errorProcessSub:"so it looks like your transfer didn't work \u2013 please give it another go",tryAgain:"Try Again",successProcess:"You\u2019re done!",successProcessSub:"Soon you will receive a notification to the mail to notify the completion of the process.",another:"Send another?",listProcess:"List Process",fileName:"File Name",processName:"Process Name",language:"Language",status:"Status",quote:"Quote",finished:"Finished",inProcess:"In Process",paidProcess:"Paid Process",processAFile:"Process a File",subProcessAFile:"Use the language processing service with files",processing:"Processing file",translate:"Translate",translating:"Translating",error:{uploadOne:"You can only upload (allowedFiles) file!",uploadTwo:"Image must smaller than 2MB!"},rules:{process:{required:"Please select your Process!"},source:{required:"Please select your Language of origin!"},target:{required:"Please select your output Language!"},email:{type:"The input is not valid E-mail!",required:"Please input your E-mail!"}}},signup:{role:"Role",typeOfPermits:"Type of permits",typeOfUser:"Type of user",typeOfUsers:{nqnp:"No quotes and no payment.",qnp:"With quotes and without payment.",qp:"With quotes and with payment."},password:"Password",fullName:"FullName",confirm:"Confirm password",btnSignUp:"Register",btnSignUpLoad:"Send Data",login:"Login now!",or:"Or",roles:{admin:"Administrator",user:"User",client:"Client"},rules:{fullName:{required:"Please, fullName is required!"},email:{type:"The input is not valid E-mail!",required:"Please input your E-mail!"},password:{required:"Please input your Password!",match:"Two passwords that you enter is inconsistent!",confirm:"Please confirm your password!"}},success:"Registration completed successfully",error:{email:"The email is already in use",all:"There has been an error, please try later"}},signin:{password:"Password",rememberMe:"Remember me",btnSignIn:"Sign me in",btnSignInLoad:"Send Data",register:"register now!",or:"Or",rules:{email:{type:"The input is not valid E-mail!",required:"Please input your E-mail!"},password:{required:"Please input your Password!"}},success:"Signin completed successfully",error:{user:"The user has not been found",password:"The password is invalid",all:"There has been an error, please try later"}},landing:{pangeanic:{1:{text1:"Welcome to PangeaMT",text2:"PangeaMT is a company specialized in Natural Language Processing & Machine Translation.",text3:"PangeaMT has the resources and knowledge to translate hundreds of million of words in record time."},2:{text1:"Anonymization",text2:"PangeaMT has developed full data anonymization services and proprietary, AI-based techniques that fully support GDPR.",text3:"Anonymization is fast becoming a requirement at all types of companies that deal with personal data."},3:{text1:"e-Discovery",text2:"Electronic Discovery (e-Discovery) techniques can find key concepts, information, words and even sentences or paragraphs from documentation.",text3:"E-Discovery refers to relevant data discovery such as legal proceedings in litigation, investigations, governments, and other type of requests."},4:{text1:"Summarization",text2:"Automatic summarization is the process whereby a text is shortened (page, paragraph, full document) and another document is created using machine learning software.",text3:"We develop technologies that can make a coherent summary of any text taking into account variables such as length, syntax, facts, figures, people as well as writing style, for example."}},autheticity:{1:{text1:"Welcome to Authenticity.ai",text2:"Authenticity.ai was founded to provide highly accurate Artificial Intelligence surveillance solutions to the Legal and Compliance industries.",text3:"We provide audio and video recognition solutions with custom trainable artificial intelligence engines."},2:{text1:"Audio Recognition",text2:"Our proprietary platform ingests and processes your audio surveillance in near real-time using our Loud & Clear technology.",text3:"The result is accurate transcripts driven to your existing surveillance tools."},3:{text1:"IDENTIFY Call Center Compliance",text2:"Authenticity provides an industry leading call center surveillance software solution to monitor agents and customer interactions.",text3:"IDENTIFY provides management dashboards, keyword compliance reporting and call emotion tracking."},4:{text1:"Machine Language Translation",text2:"Authenticity provides machine translation of over 100 languages. All major Americas, European and Asian languages are covered.",text3:"Our translation engines are accurate from the start and are custom trainable for enterprises that have unique language requirements."}}}}},167:function(e){e.exports={engines:{allServices:"Todos los servicios",all:"Todos los Motores",enables:"Motores concedidos",add:"Adiconar Motor",model:"Modelo",service:"Servicio",inserviceid:"InServiceId",descr:"Descripci\xf3n",src:"Source",tgt:"Target",domain:"Dominio",flavor:"Flavor",status:"Estado",confirmDelete:"Est\xe1s seguro de eliminar este Motor?",edit:"Editar Motor",delete:"Eliminar Motor",enabled:"Habilitar Motor",disabled:"Deshabilitar Motor",rules:{service:{required:"Por favor ingrese el campo Servicio!"},inserviceid:{required:"Por favor ingrese el campo InServiceId!"},descr:{required:"Por favor ingrese el campo Descripci\xf3n!"},src:{required:"Por favor ingrese el campo Source!"},tgt:{required:"Por favor ingrese el campo Target!"},domain:{required:"Por favor ingrese el campo Dominio!"},flavor:{required:"Por favor ingrese el campo Flavor!"}}},eds:{all:"Todos los Eds",add:"Adicionar Ed",node_id:"Nodo Id",model_id:"Modelo Id",engine_id:"Motor Id",running_mode:"Modo de ejecuci\xf3n",last_tu:"Last Tu",status:"Estado",confirmDelete:"Est\xe1s seguro de eliminar este Ed?",delete:"Eliminar Ed",enabled:"Habilitar Ed",disabled:"Deshabilitar Ed",rules:{node_id:{required:"Por favor ingrese el campo Nod Id!"},model_id:{required:"Por favor ingrese el campo Modelo Id!"},running_mode:{required:"Por favor ingrese el campo Modo de ejecuci\xf3n!"},last_tu:{required:"Por favor ingrese el campo last Tu!"},status:{required:"Por favor ingrese el campo Estado!"}}},nodes:{all:"Todos los Nodos",add:"Adicionar Nodo",name:"Nombre",ipaddress:"Direcci\xf3n IP",port:"Puerto",status:"Estado",confirmDelete:"\xbfEst\xe1s seguro de eliminar este nodo?",confirmRestart:"Est\xe1s seguro de reiniciar este nodo?",restart:"Reiniciar Nodo",edit:"Editar Nodo",delete:"Eliminar Nodo",enabled:"Habilitar Nodo",disabled:"Deshabilitar Nodo",eds:"Mostrar Eds",setStatus:"Establecer Estado del Nodo",rules:{name:{required:"Por favor ingrese el campo Nombre!"},ipaddress:{required:"Por favor ingrese el campo Direcci\xf3n IP!"},port:{required:"Por favor ingrese el campo Puerto!"},status:{required:"Por favor ingrese el campo Estado!"}}},models:{all:"Todos los Modelo",add:"Adicionar Modelo",name:"Nombre",descr:"Descripci\xf3n",src:"Fuente",tgt:"Target",path:"Path",father:"Father",updated:"Actualizado",last_tu:"Last_tu",olmode:"Clonable",trainable:"Entrenable",status:"status",confirmDelete:"\xbfEst\xe1s seguro de eliminar este modelo?",edit:"Editar modelo",delete:"Eliminar modelo",clone:"Clonar modelo",children:"Mostrar Hijos",rules:{name:{required:"Por favor ingrese el campo Nombre!"},descr:{required:"Por favor ingrese el campo Description!"},src:{required:"Por favor ingrese el campo Fuente!"},tgt:{required:"Por favor ingrese el campo Target!"},path:{required:"Por favor ingrese el campo Path!"},father:{required:"Por favor ingrese el campo Padre!"},last_tu:{required:"Por favor ingrese el campo Last_tu!"},olmode:{required:"Por favor ingrese el campo Clonable!"},updated:{required:"Por favor ingrese el campo Updated!"},status:{required:"Por favor ingrese el campo Estado!"}}},payment:{cancel:{paymentProcessCanceled:"Proceso de pago cancelado",canceled:"Cancelado",detailsOfTheProcess:"Detalles del Proceso",filename:"Nombre del archivo",nameOfProcess:"Nombre del Proceso",language:"Lenguage",status:"Estado",quotedPrice:"Precio cotizado"},error:{paymentProcessCanceled:"Proceso de pago con error",canceled:"Error"},success:{paymentProcessCanceled:"Proceso de pago satisfactorio",canceled:"Satisfactorio"},question1:"\xbfEres una empresa de la Uni\xf3n Europea?",question2:"\xbfEres ciudadano de la Uni\xf3n Europea?",question3:"Otros casos",step1:"Pregunta",step2:"Verificaci\xf3n",step3:"Pago",alert:"TAX/VAT/IVA Inclu\xeddo",info:"Haga clic en el monto a pagar para elegir el modo de proceso",modal:"Proceso de Pago",next:"Pr\xf3ximo",previous:"Anterior",form:{name:"Nombre",address:"Direcci\xf3n",country:"Pa\xeds",vattax:"VAT/TAX n\xfamero",error:{name:"Por favor ingrese el campo Nombre!",address:"Por favor ingrese el campo Direcci\xf3n!",country:"Por favor seleccione su Pa\xeds!",vattax:"Por favor ingrese el campo del n\xfamero VAT/TAX!"}}},dashboard:{lastWeek:"La semana pasada",lastMonth:"El mes pasado",visits:"Visitas",dailyVisits:"Visitas diarias",descriptionOfTheIndicator:"Descripci\xf3n del indicador",numberOfUsers:"N\xfamero de usuarios",visitThisWeek:"Visita esta semana",numberOfProcesses:"N\xfamero de Procesos",processesThisMonth:"Procesos esta semana",salesThisMonth:"Ventas este Mes",totalExpenses:"Gastos totales",expensesthisMonth:"Gastos esta semana",process:"Procesos",processesCompleted:"Procesos completados",salesTrend:"Tendencia de actividad",lastProcesses:"\xdaltimos procesos",casualUser:"Number of processes for casual users",registerUser:"N\xfamero de procesos para usuarios registrados."},profile:{oldPassword:"Vieja contrase\xf1a",errorOldPassword:"La vieja contrase\xf1a es incorrecta",changePassword:"Cambiar contrase\xf1a",editProfile:"Editar profile",billinginformation:"Informaci\xf3n de facturaci\xf3n",name:"Nombre",address:"Direcci\xf3n",country:"Pa\xeds",vattax:"N\xfamero VAT/TAX",account:"Cuenta"},typeOfPermits:{name:"Nombre",defaultValue:"Valor por defecto",default:"Por defecto",confirm:"\xbfEst\xe1s seguro de eliminar este tipo de permisos?",addPermissionType:"Agregar tipo de permiso",create:"Crear tipo de permiso",edit:"Editar tipo de permiso",updateEngines:"Recargar Motores",rules:{name:{required:"Por favor ingrese el campo Nombre!"},defaultValue:{required:"Por favor ingrese el valor por defecto!"}}},settings:{mailNotifications:"Notificaciones de correo",infoNotesEmails:"Administrar notificaciones a trav\xe9s del correo electr\xf3nico, seleccione qu\xe9 notificaci\xf3n activar.",infoNotesPayPal:"Datos de la cuenta de PayPal con la que se realizan las transacciones.",infoNotesProcesses:"Gesti\xf3n de diferentes grupos (Motores / Procesos) que se asignan a diferentes usuarios.",client_id:"ID del cliente",client_secret:"ID Secreto del cliente",rules:{client_id:{required:"Por favor ingrese su ID de Cliente!"},client_secret:{required:"Por favor, confirme el ID Secreto de su Cliente!"}}},users:{all:"Todos los Usuarios",create:"Crear usuario",edit:"Editar usuario",confirmDelete:"\xbfEst\xe1s seguro de eliminar este usuario?",addUser:"Adicionar usuario"},languages:{en:"Ingles",es:"Espa\xf1ol"},menus:{dashboard:"Tablero",user:"Usuarios",profile:"Perfil",logout:"Salir",nodes:"Nodos",models:"Modelos",eds:"EDS",setting:"Ajustes",processServices:"Servicios / Procesos",services:"Servicios",engines:"Motores",stats:"Estad\xedsticas"},default:{success:"La acci\xf3n se ha realizado satisfactoriamente",loading:"Cargando",seeMore:"ver m\xe1s",cancel:"Cancelar",create:"Crear",save:"Guardar",send:"Enviar",actions:"Acciones",no:"No",yes:"Si",infoNotes:"Notas informativas",goBack:"Regresar",goHome:"Volver al Inicio",notFound:"Lo sentimos, la p\xe1gina que has visitado no existe.",signIn:"Log In",signUp:"Registro",getStarted:"Comenzar",granted:"Concedidos"},process:{user:"Usuario",client:"Cliente",drag:"Haga clic o arrastre el archivo a esta \xe1rea para subir",alert:"Debes subir un archivo antes de continuar !!",process:"Tipo de proceso",processText:"Procesar",source:"Lenguaje fuente",target:"Lengua de llegada",notification:"Email de notificaci\xf3n",notificationHelp:"El resultado del proceso ser\xe1 notificado v\xeda correo electr\xf3nico.",uploading:"Subiendo",uploadingLoad:"Iniciar la subida",loading:"Cargando",errorProcess:"Hmm, algo sali\xf3 mal",errorProcessSub:"As\xed que parece que tu transferencia no funcion\xf3. Por favor, dale otra oportunidad.",tryAgain:"Int\xe9ntalo de nuevo",successProcess:"Ya has terminado",successProcessSub:"Pronto recibir\xe1 una notificaci\xf3n por correo para notificar la finalizaci\xf3n del proceso.",another:"\xbfEnvie otro?",listProcess:"Lista de Procesos",fileName:"Nombre del Archivo",processName:"Nombre del Proceso",language:"Lenguage",status:"Estado",quote:"Cotizar",finished:"Finalizados",inProcess:"En Proceso",paidProcess:"Proceso Pagado",processAFile:"Procesar un archivo",subProcessAFile:"Usar el servicio de procesamiento de idiomas con archivos",processing:"Procesando archivo",translate:"Traducir",translating:"Traduciendo",error:{uploadOne:"\xa1Solo puedes subir el archivo (allowedFiles)!",uploadTwo:"La imagen debe ser m\xe1s peque\xf1a que 2MB!"},rules:{process:{required:"Por favor, seleccione su proceso!"},source:{required:"Por favor seleccione su idioma de origen!"},target:{required:"Por favor seleccione su idioma de salida!"},email:{type:"El campo E-mail no es v\xe1lido!",required:"Por favor entre su E-mail!"}}},signup:{typeOfPermits:"Tipo de permisos",typeOfUser:"Tipo de usuario",typeOfUsers:{nqnp:"Sin cotizaciones y sin pago.",qnp:"Con cotizaciones y sin pago.",qp:"Con cotizaciones y con pago."},role:"Rol",password:"Contrase\xf1a",fullName:"Nombre Completo",confirm:"Confirmar contrase\xf1a",btnSignUp:"Registrarse",btnSignUpLoad:"Enviando",login:"Ingresar ahora!",or:"O",roles:{admin:"Administrador",user:"Usuario",client:"Cliente"},rules:{fullName:{required:"Por favor, este campo es requerido!"},email:{type:"El campo E-mail no es v\xe1lido!",required:"Por favor entre su E-mail!"},password:{required:"Por favor entre su Contrase\xf1a!",match:"\xa1Las dos contrase\xf1as que ingresas son inconsistentes!",confirm:"\xa1Por favor, confirme su contrase\xf1a!"}},success:"Registro completado exitosamente",error:{email:"El correo electr\xf3nico ya est\xe1 en uso",all:"Ha habido un error, por favor intente m\xe1s tarde"}},signin:{password:"Contrase\xf1a",rememberMe:"Recuerdame",btnSignIn:"Ingresar",btnSignInLoad:"Enviando",register:"registrarse ahora!",or:"O",rules:{email:{type:"El campo E-mail no es v\xe1lido!",required:"Por favor entre su E-mail!"},password:{required:"Por favor entre su Contrase\xf1a!"}},success:"Inicio de sesi\xf3n completado correctamente",error:{user:"El usuario no ha sido encontrado.",password:"La contrase\xf1a no es valida",all:"Ha habido un error, por favor intente m\xe1s tarde"}},landing:{pangeanic:{1:{text1:"PangeaMT",text2:"Empresa especializada en Procesamiento del Lenguaje Natural y Traducci\xf3n Autom\xe1tica.",text3:"PangeaMT dispone de los recursos y conocimientos para traducir cientos de millones de palabras en tiempo r\xe9cord."},2:{text1:"Anonimizaci\xf3n",text2:"PangeaMT ha desarrollado servicios para la anonimizaci\xf3n completa de datos y t\xe9cnicas propias basadas en IA que cumplen con el RGPD.",text3:"La Anonimizaci\xf3n se est\xe1 convirtiendo r\xe1pidamente en un requisito para todo tipo de empresas que tratan con datos personales."},3:{text1:"e-Discovery",text2:"Las t\xe9cnicas de Descubrimiento electr\xf3nico (e-Discovery) pueden encontrar conceptos clave, informaci\xf3n, palabras e incluso frases o p\xe1rrafos en la documentaci\xf3n.",text3:"El E-Discovery consiste en descubrir datos relevantes, como procedimientos legales en litigios, investigaciones, gobiernos y otros tipos de solicitudes."},4:{text1:"Sumarizaci\xf3n",text2:"La sumarizaci\xf3n autom\xe1tica es el proceso mediante el cual un texto (p\xe1gina, p\xe1rrafo o documento completo) se resume y se crea otro documento utilizando software de aprendizaje autom\xe1tico.",text3:"Desarrollamos tecnolog\xedas capaces de crear un resumen coherente de cualquier texto, teniendo en cuenta variables como, por ejemplo, la longitud, la sintaxis, hechos, figuras, personas o el estilo de escritura."}},autheticity:{1:{text1:"Bienvenido a Authenticity.ai",text2:"Authenticity.ai se cre\xf3 con el fin de proporcionar soluciones de inteligencia artificial muy precisas para empresas legales y de cumplimiento normativo.",text3:"Proporcionamos soluciones de reconocimiento de audio y video con motores de inteligencia artificial customizables y entrenables."},2:{text1:"Reconocimiento de audio",text2:"Nuestra plataforma patentada recibe y procesa su audio vigilancia casi en tiempo real utilizando nuestra tecnolog\xeda Loud & Clear.",text3:"El resultado son transcripciones precisas dirigidas a sus herramientas de vigilancia."},3:{text1:"Centro de llamadas IDENTIFY",text2:"Authenticity proporciona una soluci\xf3n de software de vigilancia para el centro de llamadas l\xedder en la industria para monitorear las intercaciones entre agentes y clientes.",text3:"IDENTIFY proporciona paneles de gesti\xf3n, informes de cumplimiento de palabras clave y seguimiento de la emoci\xf3n de las llamadas."},4:{text1:"Traducci\xf3n autom\xe1tica",text2:"Authenticity ofrece traducci\xf3n autom\xe1tica en m\xe1s de 100 idiomas. Los idiomas principales de Am\xe9rica, Europa y Asia est\xe1n incluidos",text3:"Nuestros motores de traducci\xf3n son rigurosos desde el principio y se les realiza entrenamiento personalizado para las empresas que tengan unos requisitos ling\xfc\xedsticos concretos."}}}}},217:function(e,a,o){e.exports=o(401)},233:function(e,a){},239:function(e,a){},261:function(e,a,o){},262:function(e,a,o){},263:function(e,a,o){},264:function(e,a,o){},265:function(e,a,o){},266:function(e,a,o){},401:function(e,a,o){"use strict";o.r(a);var r=o(0),t=o.n(r),s=o(48),n=o(21),i=o(32),c=o(33),l=o(36),d=o(34),u=o(35),m=o(68),p=o(25),g=o(38),f=o(403),h=o(172),P=o.n(h),v=o(102),b=o(70),y=o(15),E=o(164),q=o.n(E),T=o(165),A=o.n(T),S=o(166),N=o(167),O=o(50);Object(b.b)([].concat(Object(v.a)(q.a),Object(v.a)(A.a)));var I={en:S,es:N},j=Object(p.c)(function(e){return{lang:e.rootReducer.auth.lang,location:e.router.location}},function(e){return{authChangeLang:Object(y.a)(O.changeLang,e)}})(function(e){var a=e.children,o=e.lang,r=e.location,s=e.authChangeLang,n="";return n+=r.pathname[1],s("en"===(n+=r.pathname[2])||"es"===n?n:o),t.a.createElement(b.a,{key:o,locale:o,messages:I[o]},a)}),w=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(t.a.Component),x=Object(g.g)(w),D=o(107),C=o(71),M=o(67),L=o.n(M),k=o(69),_=o(161),U=o(112),V=function(e){var a=e.component,o=Object(_.a)(e,["component"]);return t.a.createElement(g.b,Object.assign({},o,{render:function(e){return null!==U.a.getToken()?t.a.createElement(a,e):t.a.createElement(g.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},z=o(43);o(261),o(262),o(263),o(264),o(265),o(266);function R(){var e=Object(D.a)(["\n  .ant-btn-primary {\n    background-color: "," !important;\n    border-color: "," !important;\n    color: #fff !important;\n  }\n"]);return R=function(){return e},e}var F=L()({loader:function(){return Promise.all([o.e(2),o.e(10),o.e(22)]).then(o.bind(null,702))},loading:k.a}),H=L()({loader:function(){return Promise.all([o.e(0),o.e(1),o.e(2),o.e(3),o.e(6)]).then(o.bind(null,1333))},loading:k.a}),W=L()({loader:function(){return Promise.all([o.e(2),o.e(8),o.e(12)]).then(o.bind(null,1337))},loading:k.a}),G=C.c.div(R(),z.a[z.a.default].theme.bg_color,z.a[z.a.default].theme.border_color),B=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return"/"===this.props.location.pathname?t.a.createElement(g.a,{to:"/main"}):t.a.createElement(C.a,{theme:{theme:"pangeanic"}},t.a.createElement(G,{id:"app"},t.a.createElement(g.d,null,t.a.createElement(g.b,{path:"/main",component:W}),t.a.createElement(V,{path:"/dashboard",component:H}),t.a.createElement(g.b,{exact:!0,path:"/404",component:F}),t.a.createElement(g.b,{render:function(){return t.a.createElement(g.a,{to:"/404"})}}))))}}]),a}(t.a.Component),Y=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.store,o=e.history;return t.a.createElement(p.a,{store:a},t.a.createElement(m.a,{history:o},t.a.createElement(f.a,{locale:P.a},t.a.createElement(j,null,t.a.createElement(x,null,t.a.createElement(g.b,{path:"/",component:B}))))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=o(125),J=o(143),Q=Object(y.b)({process:X.default,auth:O.default,notification:J.default});o.d(a,"history",function(){return $});var $=Object(n.a)({basename:""}),K=function(e,a){var o=y.c;return Object(y.d)(Object(y.b)({router:Object(m.b)(a),rootReducer:Q,initialState:e}),o())}({},$);Object(s.render)(t.a.createElement(Y,{store:K,history:$}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,a,o){"use strict";o.d(a,"a",function(){return r});var r={default:"autheticity",autheticity:{title:"Autheticity.io",bg:"/images/bg/background.jpg",logo:"".concat("","/images/logo-authenticityai_horizontal-color-01.png"),logoMin:"".concat("","/images/logo-authenticityai_small-color-01.png"),footer:"Copyright \xa9 2019 Authenticity.ai - All Rights Reserved.",hostApi:"http://pgweb.pangeamt.com:3004",hostClient:"http://authenticity.pangeamt.com",theme:{bg_color:"#0da44a",border_color:"#6caa7a",primary_color:"#0da44a"}},pangeanic:{title:"PangeaMT",bg:"/images/bg/background-pg.jpg",logo:"".concat("","/images/logo-pangeamt.d4023af.png"),logoMin:"".concat("","/images/logo-pangeamt.png"),footer:"PGWEB Powered by PangeaMT\xa9 2019.",hostApi:"http://pgweb.pangeamt.com:3004",hostClient:"http://pgweb.pangeamt.com",theme:{bg_color:"#d46b08",border_color:"#fa8c16",primary_color:"#d46b08"}}}},50:function(e,a,o){"use strict";o.r(a),o.d(a,"fetchAuth",function(){return n}),o.d(a,"fetchUser",function(){return i}),o.d(a,"changeLang",function(){return c});var r,t=o(6),s=o(3),n=Object(s.createAction)("fetch auth",function(e){return{auth:e.auth,accessToken:e.accessToken}}),i=Object(s.createAction)("fetch user",function(e){return{user:e}}),c=Object(s.createAction)("change language",function(e){return{lang:e}});a.default=Object(s.createReducer)((r={},Object(t.a)(r,n,function(e,a){var o=a.auth,r=a.accessToken;return Object.assign({},e,{auth:o,accessToken:r})}),Object(t.a)(r,i,function(e,a){var o=a.user;return Object.assign({},e,{user:o})}),Object(t.a)(r,c,function(e,a){var o=a.lang;return Object.assign({},e,{lang:o})}),r),{auth:!1,accessToken:null,user:{},lang:"en"})},69:function(e,a,o){"use strict";var r=o(0),t=o.n(r),s=o(402),n=function(){return t.a.createElement(s.a,{size:"large"})};a.a=function(e){return e.error?t.a.createElement("div",{className:"loader-container"},"Error! Please refresh the page"):e.pastDelay?t.a.createElement("div",{className:"loader-container"}," ",t.a.createElement(n,null)," "):null}}},[[217,5,7]]]);
//# sourceMappingURL=main.c88361e5.chunk.js.map