# Utilización de i18next con React

1.- Añadiremos las dependencias siguientes a nuestro proyecto:

    npm i i18next react i18next i18next-http-backend i18next-browser-languagedetector

2.- Crearemos el fichero de configuración en el directorio:
/src/config/i18next.config.js

3.- Insertaremos el siguiente código:
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

        i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
            lng: 'es',
            fallbackLng: 'es'
        });

4.- Importaremos este fichero desde el fichero:
src/main.jsx

    import './config/i18next.config.js';

5.- Configuraremos nuestro primer componente junto con el componente App como está en el código

6.- Crearemos los ficheros /src/locales/en, es, ... en donde habrá el fichero translation.json, en donde
se pondrán las traducciones como se muestra en el proyecto.
