(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{122:function(e,r,a){"use strict";var t=a(169),o=JSON.parse,n=JSON.stringify,s={clear:function(e){return localStorage&&localStorage.getItem(e)?localStorage.removeItem(e):sessionStorage&&sessionStorage.getItem(e)?sessionStorage.removeItem(e):null},clearAppStorage:function(){localStorage&&localStorage.clear(),sessionStorage&&sessionStorage.clear()},clearToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwtToken";return s.clear(e)},clearUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"userInfo";return s.clear(e)},get:function(e){return localStorage&&localStorage.getItem(e)?o(localStorage.getItem(e))||null:sessionStorage&&sessionStorage.getItem(e)&&o(sessionStorage.getItem(e))||null},getToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwtToken";return s.get(e)},getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"userInfo";return s.get(e)},set:function(e,r,a){return Object(t.isEmpty)(e)?null:a&&localStorage?localStorage.setItem(r,n(e)):sessionStorage?sessionStorage.setItem(r,n(e)):null},setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"jwtToken";return s.set(e,a,r)},setUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"userInfo";return s.set(e,a,r)}};r.a=s},131:function(e,r,a){"use strict";a.r(r),a.d(r,"fetchRequest",function(){return s}),a.d(r,"fetchResponse",function(){return i}),a.d(r,"getEngines",function(){return c}),a.d(r,"selectProcess",function(){return l}),a.d(r,"setProcessSelected",function(){return d}),a.d(r,"changeFileID",function(){return u});var t,o=a(6),n=a(3),s=Object(n.createAction)("fetch request",function(e){return{loading:e}}),i=Object(n.createAction)("fetch response",function(e){return{loading:e}}),c=Object(n.createAction)("get engines",function(e,r){return{engines:e,defaultValue:r}}),l=Object(n.createAction)("select process",function(e){return{selected:e}}),d=Object(n.createAction)("set processSelected",function(e){return{processSelected:e}}),u=Object(n.createAction)("change fileId",function(e){return{fileId:e}});r.default=Object(n.createReducer)((t={},Object(o.a)(t,d,function(e,r){var a=r.processSelected;return Object.assign({},e,{processSelected:a})}),Object(o.a)(t,l,function(e,r){var a=r.selected;return Object.assign({},e,{selected:a})}),Object(o.a)(t,c,function(e,r){var a=r.engines,t=r.defaultValue;return Object.assign({},e,{engines:a,defaultValue:t})}),Object(o.a)(t,u,function(e,r){var a=r.fileId;return Object.assign({},e,{fileId:a})}),Object(o.a)(t,s,function(e){return Object.assign({},e,{loading:!0})}),Object(o.a)(t,i,function(e){return Object.assign({},e,{loading:!1})}),t),{selected:{name:null,engines:[]},loading:!1,engines:[],defaultValue:null,fileId:null,processSelected:null})},143:function(e,r,a){"use strict";a.r(r),a.d(r,"fetchAuth",function(){return c}),a.d(r,"addNotifications",function(){return l}),a.d(r,"changeNotifications",function(){return d});var t,o=a(6),n=a(121),s=a(3),i=a(276),c=Object(s.createAction)("fetch auth",function(e){return{auth:e.auth,accessToken:e.accessToken}}),l=Object(s.createAction)("add  notifications",function(e){return{notifications:e}}),d=Object(s.createAction)("change  notifications",function(e){return{notifications:e}});r.default=Object(s.createReducer)((t={},Object(o.a)(t,d,function(e,r){var a=r.notifications;return Object.assign({},e,{notifications:a})}),Object(o.a)(t,l,function(e,r){var a=r.notifications;return a=i.concat(e.notifications,a),Object(n.a)({},e,{notifications:a})}),t),{notifications:[]})},163:function(e,r){},166:function(e){e.exports={engines:{allServices:"All Services",all:"All Engines",enables:"Engines Granted",add:"Add Engine",model:"Model",service:"Service",inserviceid:"In Service Id",descr:"Description",src:"Source",tgt:"Target",domain:"Domain",flavor:"Flavor",status:"Status",confirmDelete:"Are you sure that you want to delete this Engine?",edit:"Edit Engine",delete:"Delete Engine",enabled:"Enable Engine",disabled:"Disable Engine",rules:{service:{required:"Please enter the Service"},inserviceid:{required:"Please enter the inserviceid field"},descr:{required:"Please enter the Description"},src:{required:"Please enter the Source language"},tgt:{required:"Please enter the Target language"},domain:{required:"Please enter the Path"},flavor:{required:"Please enter the Father engine"}}},eds:{all:"All Eds",add:"Add Ed",node_id:"Node Id",model_id:"Model Id",engine_id:"Engine Id",running_mode:"Running Mode",last_tu:"Last Tu",status:"Status",confirmDelete:"Are you sure that you want to delete this Ed?",delete:"Delete Ed",enabled:"Enable Ed",disabled:"Disable Ed",rules:{node_id:{required:"Please enter the Node Id"},model_id:{required:"Please enter the Model Id"},engine_id:{required:"Please enter the Engine Id"},running_mode:{required:"Please enter the Running Mode"},last_tu:{required:"Please enter the Last Tu"},status:{required:"Please enter the Status"}}},nodes:{all:"All Nodes",add:"Add Node",name:"Name",ipaddress:"IP Address",port:"Port",status:"Status",confirmDelete:"Are you sure that you want to delete this Node?",confirmRestart:"Are you sure that you want to restart this Node?",restart:"Restart Node",edit:"Edit Node",delete:"Delete Node",enabled:"Enable Node",disabled:"Disable Node",eds:"Show Eds",setStatus:"Set Node Status",rules:{name:{required:"Please enter the Name"},ipaddress:{required:"Please enter the IP Address"},port:{required:"Please enter the Port"},status:{required:"Please enter the Status"}}},models:{all:"All Models",add:"Add Model",name:"Name",descr:"Description",src:"Source",tgt:"Target",path:"Path",father:"Father",updated:"Updated",last_tu:"Last_tu",olmode:"Clonable",trainable:"Trainable",status:"Status",confirmDelete:"Are you sure that you want to delete this Model?",edit:"Edit Model",delete:"Delete Model",clone:"Clone Model",children:"Show Children",rules:{name:{required:"Please enter the Name"},descr:{required:"Please enter the Description"},src:{required:"Please enter the Source"},tgt:{required:"Please enter the Target"},path:{required:"Please enter the Path"},father:{required:"Please enter the Father"},last_tu:{required:"Please enter the Last_tu"},olmode:{required:"Please enter the Clonable"},updated:{required:"Please enter the Updated"},status:{required:"Please enter the Status"}}},payment:{cancel:{paymentProcessCanceled:"Payment process canceled",canceled:"Canceled",detailsOfTheProcess:"Details of the Process",filename:"File name",nameOfProcess:"Name of process",language:"Language",status:"Status",quotedPrice:"Quoted price"},error:{paymentProcessCanceled:"Error in the Payment process",canceled:"Error"},success:{paymentProcessCanceled:"The Payment process was successful",canceled:"Success"},question1:"Are you a company of the European Union?",question2:"Are you a citizen of the European Union?",question3:"Other cases.",step1:"Question",step2:"Verification",step3:"Pay",alert:"TAX/VAT/IVA Included",info:"Click in the amount to pay to choose the process mode",modal:"Payment process",next:"Next",previous:"Previous",form:{name:"Name",address:"Address",country:"Country",vattax:"VAT/TAX number",error:{name:"Please enter your Name",address:"Please enter your Address",country:"Please select your country",vattax:"Please enter your VAT/TAX number"}}},dashboard:{lastWeek:"Last Week",lastMonth:"Last Month",visits:"Visits",dailyVisits:"Daily visits",descriptionOfTheIndicator:"Description of the indicator",numberOfUsers:"Number of users",visitThisWeek:"Visits this week",numberOfProcesses:"Number of Processes",totalExpenses:"Total Expenses",expensesthisMonth:"Expenses this Month",salesThisMonth:"Sales this Month",processesThisMonth:"Processes this Month",process:"Processes",processesCompleted:"Processes completed",salesTrend:"Activity trend",lastProcesses:"Last processes",casualUser:"Number of processes for casual users",registerUser:"Number of processes for registered users"},profile:{oldPassword:"Old password",errorOldPassword:"The old password is incorrect",changePassword:"Change password",editProfile:"Edit profile",billinginformation:"Billing information",name:"Name",address:"Address",country:"Country",vattax:"VAT/TAX number",account:"Account"},typeOfPermits:{name:"Name",defaultValue:"Default Value",default:"Default",confirm:"Are you sure that you want to delete this Type of Permits?",addPermissionType:"Add permission type",create:"Create permission type",edit:"Edit permission type",updateEngines:"Reload Engines",rules:{name:{required:"Please enter the Name field!"},defaultValue:{required:"Please enter the Default Value field!"}}},settings:{mailNotifications:"Mail Notifications",infoNotesEmails:"Manage notifications through the email, select which notification activate.",infoNotesPayPal:"Data of the PayPal account with which transactions are made.",infoNotesProcesses:"Management of different groups (Motors / Processes) that are assigned to different users.",client_id:"Client Id",client_secret:"Client Secret",rules:{client_id:{required:"Please enter your Client Id!"},client_secret:{required:"Please confirm your Client Secret!"}}},users:{all:"All Users",create:"Create user",edit:"Edit user",confirmDelete:"Are you sure that you want to delete this User?",addUser:"Add user",clients:"Clients",users:"Users"},languages:{en:"English",es:"Spanish"},menus:{dashboard:"Dashboard",user:"Users",profile:"Profile",logout:"Logout",models:"Models",nodes:"Nodes",eds:"EDS",setting:"Settings",processServices:"Services / Processes",services:"Services",engines:"Engines",stats:"Stats",subscription:"Subscriptions"},subscription:{title:"Title",category:"Category",add:"Add subscription",edit:"Edit subscription",categories:"Categories",editCat:"Edit category",addCat:"Add category",removeCat:"Remove category",confirmDeleteCat:"Are you sure that you want to delete this category?",confirmDeleteSus:"Are you sure that you want to delete this subscription?",name:"Name",pages:"Pages",freePages:"Free Pages",recomended:"Recomended",active:"Active",price:"Price",minPrice:"Min Price",pricePerAdditionalPage:"Price Per Additional Page",period:"Period",freeDays:"Free Days",maxSharedEngines:"Max Shared Engines",maxPrivateInstances:"Max Private Instances",maxUsers:"Max Users",maxClones:"Max Clones",canUsePGB:"Can Use PGB",canTrain:"Can Train",canUseApi:"Can Use Api",rules:{name:{required:"Please enter the Name field"},title:{required:"Please enter the Title field"},pages:{required:"Please enter the Pages field"},freePages:{required:"Please enter the Free Pages field"},price:{required:"Please enter the Price field"},minPrice:{required:"Please enter the Min Price field"},pricePerAdditionalPage:{required:"Please enter the Price Per Additional Page field"},period:{required:"Please enter the Period field"},freeDays:{required:"Please enter the Free Days field"},maxSharedEngines:{required:"Please enter the Max Shared Engines field"},maxPrivateInstances:{required:"Please enter the Max Private Instances field"},maxUsers:{required:"Please enter the Max Users field"},maxClones:{required:"Please enter the Max Clones field"},category:{required:"Please enter the Category field"}}},default:{success:"The action was successful",loading:"Loading",seeMore:"See more",cancel:"Cancel",create:"Create",save:"Save",send:"Send",actions:"Actions",no:"No",yes:"Yes",infoNotes:"Informational Notes",goBack:"Go back",goHome:"Back to Home",notFound:"Sorry, the page you have visited does not exist.",signIn:"Sign In",signUp:"Sign Up",getStarted:"Get Started",granted:"Granted"},process:{user:"User",client:"Client",drag:"Click to choose or drag the files to this area to upload them",alert:"You must upload a file before continuing",process:"Process type",processText:"Process",source:"Source Language",target:"Target Language",notification:"Notification email",notificationHelp:"The result of the process will be notified via email.",uploading:"Uploading",uploadingLoad:"Start Upload",loading:"Loading",errorProcess:"Hmm, something went wrong",errorProcessSub:"So it looks like your transfer didn't work \u2013 please try again",tryAgain:"Try Again",successProcess:"You\u2019re done!",successProcessSub:"You will receive a notification to your Email to notify the completion of the process.",another:"Do you want to send another file?",listProcess:"List of Processes",fileName:"File Name",processName:"Process Name",language:"Language",status:"Status",quote:"Quote",finished:"Finished",inProcess:"In Process",paidProcess:"Paid Process",processAFile:"Process a File",subProcessAFile:"Use the language processing service with files",processing:"Processing file",newProcess:"New Process",translate:"Translate",translating:"Translating",loadingData:"Loading data",loadingDataDes:"We are getting the data, please wait.",error:{uploadOne:"You can only upload (allowedFiles) file(s)",uploadTwo:"Images must smaller than 2MB"},rules:{process:{required:"Please select your Process"},source:{required:"Please select your Source Language"},target:{required:"Please select your Target Language"},email:{type:"The E-mail is not valid.",required:"Please enter your E-mail!"}}},signup:{role:"Role",typeOfPermits:"Type of permits",typeOfUser:"Type of user",typeOfUsers:{nqnp:"Without quotes and without payment.",qnp:"With quotes and without payment.",qp:"With quotes and with payment."},password:"Password",fullName:"Full Name",confirm:"Confirm password",btnSignUp:"Register",btnSignUpLoad:"Send Data",login:"Login now",or:"Or",roles:{admin:"Administrator",user:"User",client:"Client"},rules:{fullName:{required:"Please, a Full Name is required"},email:{type:"The E-mail is not valid",required:"Please enter your E-mail"},password:{required:"Please enter your Password",match:"The two passwords that you entered are not the same",confirm:"Please confirm your password"}},success:"Registration successfully completed",error:{email:"The Email is already in use",all:"There has been an error, please try later"}},signin:{password:"Password",rememberMe:"Remember me",btnSignIn:"Sign me in",btnSignInLoad:"Send Data",register:"Register now",or:"Or",rules:{email:{type:"The E-mail is not valid",required:"Please enter your E-mail"},password:{required:"Please enter your Password"}},success:"Signin successfully completed",error:{user:"The User has not been found",password:"The password is invalid",all:"There has been an error, please try later"}},landing:{featuresTitle:"Features",servicesTitle:"Find your perfect plan",servicesSubTitle:"Whether you need to process or translate thousands of documents or you require just a translation every now and then we are at your service, choose your plan.",subscribeNow:"Subscribe now",pangeanic:{1:{text1:"Welcome to PangeaMT",text2:"PangeaMT is a company specialized in Natural Language Processing & Machine Translation.",text3:"PangeaMT has the resources and knowledge to translate hundreds of million of words in record time."},2:{text1:"Anonymization",text2:"PangeaMT has developed full data anonymization services and proprietary, AI-based techniques that fully support GDPR.",text3:"Anonymization is fast becoming a requirement at all types of companies that deal with personal data.",icon:"question"},3:{text1:"e-Discovery",text2:"Electronic Discovery (e-Discovery) techniques can find key concepts, information, words and even sentences or paragraphs from documentation.",text3:"E-Discovery refers to relevant data discovery such as legal proceedings in litigation, investigations, governments, and other type of requests.",icon:"search"},4:{text1:"Summarization",text2:"Automatic summarization is the process whereby a text is shortened (page, paragraph, full document) and another document is created using machine learning software.",text3:"We develop technologies that can make a coherent summary of any text taking into account variables such as length, syntax, facts, figures, people as well as writing style, for example.",icon:"plus"}},autheticity:{1:{text1:"Welcome to Authenticity.ai",text2:"Authenticity.ai was founded to provide highly accurate Artificial Intelligence surveillance solutions to the Legal and Compliance industries.",text3:"We provide audio and video recognition solutions with custom trainable artificial intelligence engines."},2:{text1:"Audio Recognition",text2:"Our proprietary platform ingests and processes your audio surveillance in near real-time using our Loud & Clear technology.",text3:"The result is accurate transcripts driven to your existing surveillance tools."},3:{text1:"IDENTIFY Call Center Compliance",text2:"Authenticity provides an industry leading call center surveillance software solution to monitor agents and customer interactions.",text3:"IDENTIFY provides management dashboards, keyword compliance reporting and call emotion tracking."},4:{text1:"Machine Language Translation",text2:"Authenticity provides machine translation of over 100 languages. All major Americas, European and Asian languages are covered.",text3:"Our translation engines are accurate from the start and are custom trainable for enterprises that have unique language requirements."}}}}},167:function(e){e.exports={engines:{allServices:"Todos los Servicios",all:"Todos los Motores",enables:"Motores concedidos",add:"A\xf1adir Motor",model:"Modelo",service:"Servicio",inserviceid:"InServiceId",descr:"Descripci\xf3n",src:"Idioma de origen",tgt:"Idioma de destino",domain:"Dominio",flavor:"Flavor",status:"Estado",confirmDelete:"\xbfDeseas eliminar este Motor?",edit:"Editar Motor",delete:"Eliminar Motor",enabled:"Activar Motor",disabled:"Desactivar Motor",rules:{service:{required:"Por favor rellene el campo Servicio"},inserviceid:{required:"Por favor rellene el campo InServiceId"},descr:{required:"Por favor rellene el campo Descripci\xf3n"},src:{required:"Por favor rellene el campo Idioma de origen"},tgt:{required:"Por favor rellene el campo Idioma de destino"},domain:{required:"Por favor rellene el campo Dominio"},flavor:{required:"Por favor rellene el campo Flavor"}}},eds:{all:"Todos los Eds",add:"A\xf1adir Ed",node_id:"Nodo Id",model_id:"Modelo Id",engine_id:"Motor Id",running_mode:"Modo de ejecuci\xf3n",last_tu:"\xdaltima TU",status:"Estado",confirmDelete:"\xbfDeseas eliminar este Ed?",delete:"Eliminar Ed",enabled:"Activar Ed",disabled:"Desactivar Ed",rules:{node_id:{required:"Por favor rellene el campo Nodo Id"},model_id:{required:"Por favor rellene el campo Modelo Id"},running_mode:{required:"Por favor rellene el campo Modo de ejecuci\xf3n"},last_tu:{required:"Por favor rellene el campo \xdaltima TU"},status:{required:"Por favor rellene el campo Estado"}}},nodes:{all:"Todos los Nodos",add:"A\xf1adir Nodo",name:"Nombre",ipaddress:"Direcci\xf3n IP",port:"Puerto",status:"Estado",confirmDelete:"\xbfDeseas eliminar este Nodo?",confirmRestart:"\xbfDeseas reiniciar este Nodo?",restart:"Reiniciar Nodo",edit:"Editar Nodo",delete:"Eliminar Nodo",enabled:"Activar Nodo",disabled:"Desactivar Nodo",eds:"Mostrar Eds",setStatus:"Establecer Estado del Nodo",rules:{name:{required:"Por favor rellene el campo Nombre"},ipaddress:{required:"Por favor rellene el campo Direcci\xf3n IP"},port:{required:"Por favor rellene el campo Puerto"},status:{required:"Por favor rellene el campo Estado"}}},models:{all:"Todos los Modelo",add:"A\xf1adir Modelo",name:"Nombre",descr:"Descripci\xf3n",src:"Idioma de origen",tgt:"Idioma de destino",path:"Ruta",father:"Clonar desde",updated:"Actualizado",last_tu:"\xdaltima_TU",olmode:"Clonable",trainable:"Entrenable",status:"Estado",confirmDelete:"\xbfDeseas eliminar este Modelo?",edit:"Editar modelo",delete:"Eliminar modelo",clone:"Clonar modelo",children:"Mostrar clones",rules:{name:{required:"Por favor rellene el campo Nombre"},descr:{required:"Por favor rellene el campo Descripci\xf3n"},src:{required:"Por favor rellene el campo Idioma de origen"},tgt:{required:"Por favor rellene el campo Idioma de destino"},path:{required:"Por favor rellene el campo Ruta"},father:{required:"Por favor rellene el campo Clonar desde"},last_tu:{required:"Por favor rellene el campo Last_tu"},olmode:{required:"Por favor rellene el campo Clonable"},updated:{required:"Por favor rellene el campo Actualizado"},status:{required:"Por favor rellene el campo Estado"}}},payment:{cancel:{paymentProcessCanceled:"Proceso de pago cancelado",canceled:"Cancelado",detailsOfTheProcess:"Detalles del Proceso",filename:"Nombre del archivo",nameOfProcess:"Nombre del Proceso",language:"Idioma",status:"Estado",quotedPrice:"Precio presupuestado"},error:{paymentProcessCanceled:"Error en el proceso de pago",canceled:"Error"},success:{paymentProcessCanceled:"Pago realizado con \xe9xito",canceled:"Completado"},question1:"\xbfEres una empresa de la Uni\xf3n Europea?",question2:"\xbfEres ciudadano de la Uni\xf3n Europea?",question3:"Otros casos",step1:"Pregunta",step2:"Verificaci\xf3n",step3:"Pago",alert:"TAX/VAT/IVA Inclu\xeddo",info:"Haga clic en la cantidad a pagar para elegir el modo del proceso",modal:"Proceso de Pago",next:"Siguiente",previous:"Anterior",form:{name:"Nombre",address:"Direcci\xf3n",country:"Pa\xeds",vattax:"VAT/TAX n\xfamero",error:{name:"Por favor rellene el campo Nombre",address:"Por favor rellene el campo Direcci\xf3n",country:"Por favor seleccione su Pa\xeds",vattax:"Por favor rellene el campo del n\xfamero VAT/TAX"}}},dashboard:{lastWeek:"La semana pasada",lastMonth:"El mes pasado",visits:"Visitas",dailyVisits:"Visitas diarias",descriptionOfTheIndicator:"Descripci\xf3n del indicador",numberOfUsers:"N\xfamero de usuarios",visitThisWeek:"Visitas esta semana",numberOfProcesses:"N\xfamero de Procesos",processesThisMonth:"Procesos esta semana",salesThisMonth:"Ventas este Mes",totalExpenses:"Gastos totales",expensesthisMonth:"Gastos esta semana",process:"Procesos",processesCompleted:"Procesos completados",salesTrend:"Tendencia de actividad",lastProcesses:"\xdaltimos procesos",casualUser:"N\xfamero de procesos de usuarios casuales",registerUser:"N\xfamero de procesos de usuarios registrados."},profile:{oldPassword:"Contrase\xf1a antigua",errorOldPassword:"La contrase\xf1a antigua es incorrecta",changePassword:"Cambiar contrase\xf1a",editProfile:"Editar perfil",billinginformation:"Informaci\xf3n de facturaci\xf3n",name:"Nombre",address:"Direcci\xf3n",country:"Pa\xeds",vattax:"N\xfamero VAT/TAX",account:"Cuenta"},typeOfPermits:{name:"Nombre",defaultValue:"Valor por defecto",default:"Por defecto",confirm:"\xbfDeseas eliminar este tipo de permisos?",addPermissionType:"A\xf1adir tipo de permiso",create:"Crear tipo de permiso",edit:"Editar tipo de permiso",updateEngines:"Actualizar Motores",rules:{name:{required:"Por favor rellene el campo Nombre"},defaultValue:{required:"Por favor rellene el valor por defecto"}}},settings:{mailNotifications:"Notificaciones de correo",infoNotesEmails:"Administrar notificaciones a trav\xe9s del correo electr\xf3nico, seleccione qu\xe9 notificaci\xf3n activar.",infoNotesPayPal:"Datos de la cuenta de PayPal con la que se realizan las transacciones.",infoNotesProcesses:"Gesti\xf3n de diferentes grupos (Motores / Procesos) que se asignan a diferentes usuarios.",client_id:"ID del cliente",client_secret:"ID Secreto del cliente",rules:{client_id:{required:"Por favor introduzca su ID de Cliente!"},client_secret:{required:"Por favor, confirme el ID Secreto de su Cliente!"}}},users:{all:"Todos los Usuarios",create:"Crear usuario",edit:"Editar usuario",confirmDelete:"\xbfDesesa eliminar este usuario?",addUser:"A\xf1adir usuario",clients:"Clientes",users:"Usuarios"},languages:{en:"Ingl\xe9s",es:"Espa\xf1ol"},menus:{dashboard:"Panel de informaci\xf3n",user:"Usuarios",profile:"Perfil",logout:"Salir",nodes:"Nodos",models:"Modelos",eds:"EDS",setting:"Ajustes",processServices:"Servicios / Procesos",services:"Servicios",engines:"Motores",stats:"Estad\xedsticas",subscription:"Suscripciones"},subscription:{title:"T\xedtulo",add:"A\xf1adir Suscripci\xf3n",category:"Categor\xeda",categories:"Categor\xedas",editCat:"Editar categor\xeda",removeCat:"Eliminar categor\xeda",confirmDeleteCat:"\xbfDeseas eliminar esta categor\xeda?",confirmDeleteSus:"\xbfDeseas eliminar esta suscripci\xf3n?",addCat:"A\xf1adir categor\xeda",name:"Nombre",pages:"P\xe1ginas",freePages:"P\xe1ginas Gratis",recomended:"Recomendado",active:"Activo",price:"Precio",minPrice:"Precio M\xednimo",pricePerAdditionalPage:"Precio por p\xe1gina adicional",period:"Per\xedodo",freeDays:"D\xedas Gratis",maxSharedEngines:"M\xe1x Shared Engines",maxPrivateInstances:"Max Private Instances",maxUsers:"M\xe1x de Usuarios",maxClones:"M\xe1x Clones",canUsePGB:"Puede usar PGB",canTrain:"Puede entrenar",canUseApi:"Puede usar la API",rules:{name:{required:"Por favor rellene el campo Nombre"},title:{required:"Por favor rellene el campo T\xedtulo"},pages:{required:"Por favor rellene el campo P\xe1ginas"},freePages:{required:"Por favor rellene el campo P\xe1ginas Gratis"},price:{required:"Por favor rellene el campo Precio Gratis"},minPrice:{required:"Por favor rellene el campo Precio M\xednimo "},pricePerAdditionalPage:{required:"Por favor rellene el campo Precio por p\xe1gina adicional"},period:{required:"Por favor rellene el campo Per\xedodo"},freeDays:{required:"Por favor rellene el campo D\xedas Gratis"},maxSharedEngines:{required:"Por favor rellene el campo M\xe1x Shared Engines"},maxPrivateInstances:{required:"Por favor rellene el campo Max Private Instances"},maxUsers:{required:"Por favor rellene el campo M\xe1x de Usuarios"},maxClones:{required:"Por favor rellene el campo M\xe1x Clones"},category:{required:"Por favor rellene el campo Categor\xeda"}}},default:{success:"La acci\xf3n se ha realizado correctamente",loading:"Cargando",seeMore:"Ver m\xe1s",cancel:"Cancelar",create:"Crear",save:"Guardar",send:"Enviar",actions:"Acciones",no:"No",yes:"Si",infoNotes:"Notas informativas",goBack:"Volver",goHome:"Volver al Inicio",notFound:"Lo sentimos, la p\xe1gina no existe.",signIn:"Acceder",signUp:"Registro",getStarted:"Comenzar",granted:"Concedidos"},process:{user:"Usuario",client:"Cliente",drag:"Haga clic para seleccionar el archivo o arr\xe1strelo a esta \xe1rea para cargarlo",alert:"Es necesario cargar un archivo antes de continuar",process:"Tipo de proceso",processText:"Procesar",source:"Idioma de origen",target:"Idioma de destino",notification:"Email de notificaci\xf3n",notificationHelp:"El resultado del proceso ser\xe1 notificado v\xeda correo electr\xf3nico.",uploading:"Subiendo",uploadingLoad:"Iniciar la subida",loading:"Cargando",errorProcess:"Se produjo un error",errorProcessSub:"Su transferencia no se realiz\xf3. Por favor, vuelva a intentarlo.",tryAgain:"Int\xe9ntelo de nuevo",successProcess:"Finalizado",successProcessSub:"Recibir\xe1 una notificaci\xf3n por email para notificar la finalizaci\xf3n del proceso.",another:"\xbfCargar otro archivo?",listProcess:"Lista de Procesos",fileName:"Nombre del Archivo",processName:"Nombre del Proceso",language:"Idioma",status:"Estado",quote:"Presupuestar",finished:"Finalizados",inProcess:"En Proceso",paidProcess:"Proceso Pagado",processAFile:"Procesar un archivo",subProcessAFile:"Usar el servicio de procesamiento de idiomas con archivos",processing:"Procesando archivo",translate:"Traducir",translating:"Traduciendo",newProcess:"Nuevo Proceso",loadingData:"Cargando Datos",loadingDataDes:"Estamos obteniendo los datos, espere por favor.",error:{uploadOne:"Solo puede subir (allowedFiles) archivo(s)",uploadTwo:"La imagen no puede superar los 2MB!"},rules:{process:{required:"Por favor, seleccione el proceso"},source:{required:"Por favor, seleccione el idioma de origen"},target:{required:"Por favor, seleccione el idioma de destino"},email:{type:"El E-mail introducido no es v\xe1lido",required:"Introduzca su E-mail"}}},signup:{typeOfPermits:"Tipo de permisos",typeOfUser:"Tipo de usuario",typeOfUsers:{nqnp:"Sin cotizaciones y sin pago.",qnp:"Con cotizaciones y sin pago.",qp:"Con cotizaciones y con pago."},role:"Rol",password:"Contrase\xf1a",fullName:"Nombre Completo",confirm:"Confirmar contrase\xf1a",btnSignUp:"Registrarse",btnSignUpLoad:"Enviando",login:"Acceder ahora",or:"O",roles:{admin:"Administrador",user:"Usuario",client:"Cliente"},rules:{fullName:{required:"Por favor, este campo es necesario"},email:{type:"El E-mail introducido no es v\xe1lido",required:"Por favor introduzca su E-mail"},password:{required:"Por favor introduzca su Contrase\xf1a",match:"Las contrase\xf1as que ha introducido no coinciden",confirm:"Por favor, confirme su contrase\xf1a"}},success:"Registro completado correctamente",error:{email:"Ese Email ya est\xe1 en uso",all:"Se ha producido un error, por favor int\xe9ntelo m\xe1s tarde"}},signin:{password:"Contrase\xf1a",rememberMe:"Recuerdame",btnSignIn:"Acceder",btnSignInLoad:"Enviando",register:"Registrarse ahora",or:"O",rules:{email:{type:"El E-mail introducido no es v\xe1lido",required:"Por favor introduzca su E-mail"},password:{required:"Por favor introduzca su Contrase\xf1a"}},success:"Sesi\xf3n iniciada correctamente",error:{user:"No se encuentra el usuario.",password:"La contrase\xf1a no es correcta",all:"Se ha producido un error, por favor int\xe9ntelo m\xe1s tarde"}},landing:{featuresTitle:"Caracter\xedsticas",servicesTitle:"Encuentre el plan adecuado",servicesSubTitle:"\xbfNecesita traducir miles de documentos cada mes? \xbfSolo requiere el servicio de traducci\xf3n espor\xe1dicamente?. Elija el plan que mejor se adecue a sus necesidades.",subscribeNow:"Subscribirse ahora",pangeanic:{1:{text1:"PangeaMT",text2:"Empresa especializada en Procesamiento del Lenguaje Natural y Traducci\xf3n Autom\xe1tica.",text3:"PangeaMT dispone de los recursos y conocimientos para traducir cientos de millones de palabras en tiempo r\xe9cord."},2:{text1:"Anonimizaci\xf3n",text2:"PangeaMT ha desarrollado servicios para la anonimizaci\xf3n completa de datos y t\xe9cnicas propias basadas en IA que cumplen con el RGPD.",text3:"La Anonimizaci\xf3n se est\xe1 convirtiendo r\xe1pidamente en un requisito para todo tipo de empresas que tratan con datos personales.",icon:"question"},3:{text1:"e-Discovery",text2:"Las t\xe9cnicas de Descubrimiento electr\xf3nico (e-Discovery) pueden encontrar conceptos clave, informaci\xf3n, palabras e incluso frases o p\xe1rrafos en la documentaci\xf3n.",text3:"El E-Discovery consiste en descubrir datos relevantes, como procedimientos legales en litigios, investigaciones, gobiernos y otros tipos de solicitudes.",icon:"question"},4:{text1:"Sumarizaci\xf3n",text2:"La sumarizaci\xf3n autom\xe1tica es el proceso mediante el cual un texto (p\xe1gina, p\xe1rrafo o documento completo) se resume y se crea otro documento utilizando software de aprendizaje autom\xe1tico.",text3:"Desarrollamos tecnolog\xedas capaces de crear un resumen coherente de cualquier texto, teniendo en cuenta variables como, por ejemplo, la longitud, la sintaxis, hechos, figuras, personas o el estilo de escritura.",icon:"question"}},autheticity:{1:{text1:"Bienvenido a Authenticity.ai",text2:"Authenticity.ai se cre\xf3 con el fin de proporcionar soluciones de inteligencia artificial muy precisas para empresas legales y de cumplimiento normativo.",text3:"Proporcionamos soluciones de reconocimiento de audio y video con motores de inteligencia artificial customizables y entrenables."},2:{text1:"Reconocimiento de audio",text2:"Nuestra plataforma patentada recibe y procesa su audio vigilancia casi en tiempo real utilizando nuestra tecnolog\xeda Loud & Clear.",text3:"El resultado son transcripciones precisas dirigidas a sus herramientas de vigilancia."},3:{text1:"Centro de llamadas IDENTIFY",text2:"Authenticity proporciona una soluci\xf3n de software de vigilancia para el centro de llamadas l\xedder en la industria para monitorear las intercaciones entre agentes y clientes.",text3:"IDENTIFY proporciona paneles de gesti\xf3n, informes de cumplimiento de palabras clave y seguimiento de la emoci\xf3n de las llamadas."},4:{text1:"Traducci\xf3n autom\xe1tica",text2:"Authenticity ofrece traducci\xf3n autom\xe1tica en m\xe1s de 100 idiomas. Los idiomas principales de Am\xe9rica, Europa y Asia est\xe1n incluidos",text3:"Nuestros motores de traducci\xf3n son rigurosos desde el principio y se les realiza entrenamiento personalizado para las empresas que tengan unos requisitos ling\xfc\xedsticos concretos."}}}}},223:function(e,r,a){e.exports=a(401)},239:function(e,r){},245:function(e,r){},267:function(e,r,a){},268:function(e,r,a){},269:function(e,r,a){},270:function(e,r,a){},271:function(e,r,a){},272:function(e,r,a){},401:function(e,r,a){"use strict";a.r(r);var t=a(0),o=a.n(t),n=a(48),s=a(21),i=a(34),c=a(35),l=a(38),d=a(36),u=a(37),m=a(69),p=a(25),g=a(39),f=a(403),h=a(172),P=a.n(h),v=a(102),b=a(70),y=a(15),E=a(164),q=a.n(E),A=a(165),S=a.n(A),T=a(166),w=a(167),N=a(52);Object(b.b)([].concat(Object(v.a)(q.a),Object(v.a)(S.a)));var x={en:T,es:w},C=Object(p.c)(function(e){return{lang:e.rootReducer.auth.lang,location:e.router.location}},function(e){return{authChangeLang:Object(y.a)(N.changeLang,e)}})(function(e){var r=e.children,a=e.lang,t=e.location,n=e.authChangeLang,s="";return s+=t.pathname[1],n("en"===(s+=t.pathname[2])||"es"===s?s:a),o.a.createElement(b.a,{key:a,locale:a,messages:x[a]},r)}),I=function(e){function r(){return Object(i.a)(this,r),Object(l.a)(this,Object(d.a)(r).apply(this,arguments))}return Object(u.a)(r,e),Object(c.a)(r,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),r}(o.a.Component),D=Object(g.g)(I),O=a(108),M=a(71),j=a(65),U=a.n(j),k=a(68),L=a(161),_=a(122),z=function(e){var r=e.component,a=Object(L.a)(e,["component"]);return o.a.createElement(g.b,Object.assign({},a,{render:function(e){return null!==_.a.getToken()?o.a.createElement(r,e):o.a.createElement(g.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},R=a(44);a(267),a(268),a(269),a(270),a(271),a(272);function V(){var e=Object(O.a)(["\n  .ant-btn-primary {\n    background-color: "," !important;\n    border-color: "," !important;\n    color: #fff !important;\n  }\n"]);return V=function(){return e},e}var F=U()({loader:function(){return Promise.all([a.e(5),a.e(6),a.e(7),a.e(38)]).then(a.bind(null,1205))},loading:k.a}),W=U()({loader:function(){return Promise.all([a.e(6),a.e(14),a.e(28)]).then(a.bind(null,1425))},loading:k.a}),G=U()({loader:function(){return Promise.all([a.e(0),a.e(3),a.e(2),a.e(4),a.e(13)]).then(a.bind(null,1420))},loading:k.a}),B=M.c.div(V(),R.a[R.a.default].theme.bg_color,R.a[R.a.default].theme.border_color),Y=function(e){function r(){return Object(i.a)(this,r),Object(l.a)(this,Object(d.a)(r).apply(this,arguments))}return Object(u.a)(r,e),Object(c.a)(r,[{key:"render",value:function(){return"/"===this.props.location.pathname?o.a.createElement(g.a,{to:"/main"}):o.a.createElement(M.a,{theme:{theme:"pangeanic"}},o.a.createElement(B,{id:"app"},o.a.createElement(g.d,null,o.a.createElement(g.b,{path:"/main",component:G}),o.a.createElement(z,{path:"/dashboard",component:W}),o.a.createElement(g.b,{exact:!0,path:"/404",component:F}),o.a.createElement(g.b,{render:function(){return o.a.createElement(g.a,{to:"/404"})}}))))}}]),r}(o.a.Component),H=function(e){function r(){return Object(i.a)(this,r),Object(l.a)(this,Object(d.a)(r).apply(this,arguments))}return Object(u.a)(r,e),Object(c.a)(r,[{key:"render",value:function(){var e=this.props,r=e.store,a=e.history;return o.a.createElement(p.a,{store:r},o.a.createElement(m.a,{history:a},o.a.createElement(f.a,{locale:P.a},o.a.createElement(C,null,o.a.createElement(D,null,o.a.createElement(g.b,{path:"/",component:Y}))))))}}]),r}(t.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,r){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),r&&r.onUpdate&&r.onUpdate(e)):(console.log("Content is cached for offline use."),r&&r.onSuccess&&r.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Q=a(131),$=a(143),K=Object(y.b)({process:Q.default,auth:N.default,notification:$.default});a.d(r,"history",function(){return Z});var Z=Object(s.a)({basename:""}),ee=function(e,r){var a=y.c;return Object(y.d)(Object(y.b)({router:Object(m.b)(r),rootReducer:K,initialState:e}),a())}({},Z);Object(n.render)(o.a.createElement(H,{store:ee,history:Z}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var r="".concat("","/service-worker.js");X?(function(e,r){fetch(e).then(function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e,r)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(r,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):J(r,e)})}}()},44:function(e,r,a){"use strict";a.d(r,"a",function(){return t});var t={default:"pangeanic",autheticity:{title:"Autheticity.io",bg:"/images/bg/background.jpg",logo:"".concat("","/images/logo-authenticityai_horizontal-color-01.png"),logoMin:"".concat("","/images/logo-authenticityai_small-color-01.png"),footer:"Copyright \xa9 2019 Authenticity.ai - All Rights Reserved.",hostApi:"https://pgweb2.pangeamt.com",hostClient:"http://authenticity.pangeamt.com",theme:{bg_color:"#0da44a",border_color:"#6caa7a",primary_color:"#0da44a"}},pangeanic:{title:"PangeaMT",bg:"/images/bg/background-pg.jpg",logo:"".concat("","/images/logo-pangeamt.d4023af.png"),logoMin:"".concat("","/images/logo-pangeamt.png"),footer:"PGWEB Powered by PangeaMT\xa9 2019.",hostApi:"http://pgweb2test.pangeamt.com",theme:{bg_color:"#1890ff",border_color:"#1890ff",primary_color:"#d46b08"}}}},52:function(e,r,a){"use strict";a.r(r),a.d(r,"fetchAuth",function(){return s}),a.d(r,"fetchUser",function(){return i}),a.d(r,"changeLang",function(){return c});var t,o=a(6),n=a(3),s=Object(n.createAction)("fetch auth",function(e){return{auth:e.auth,accessToken:e.accessToken}}),i=Object(n.createAction)("fetch user",function(e){return{user:e}}),c=Object(n.createAction)("change language",function(e){return{lang:e}});r.default=Object(n.createReducer)((t={},Object(o.a)(t,s,function(e,r){var a=r.auth,t=r.accessToken;return Object.assign({},e,{auth:a,accessToken:t})}),Object(o.a)(t,i,function(e,r){var a=r.user;return Object.assign({},e,{user:a})}),Object(o.a)(t,c,function(e,r){var a=r.lang;return Object.assign({},e,{lang:a})}),t),{auth:!1,accessToken:null,user:{},lang:"en"})},68:function(e,r,a){"use strict";var t=a(0),o=a.n(t),n=a(402),s=function(){return o.a.createElement(n.a,{size:"large"})};r.a=function(e){return e.error?o.a.createElement("div",{className:"loader-container"},"Error! Please refresh the page"):e.pastDelay?o.a.createElement("div",{className:"loader-container"}," ",o.a.createElement(s,null)," "):null}}},[[223,9,12]]]);
//# sourceMappingURL=main.d413e97a.chunk.js.map