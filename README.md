# Análisis de Código Estático con SonarQube - Gestión de Parqueaderos

## 📋 Tema
Análisis de código estático con SonarQube para identificación y corrección de vulnerabilidades de seguridad en aplicación web full-stack (Node.js/Express + React/TypeScript + PostgreSQL).

## 🎯 Objetivo
Identificar, analizar y corregir vulnerabilidades de seguridad y problemas de calidad de código en una aplicación full-stack mediante el uso de SonarQube, aplicando principios SOLID y patrones de diseño para mejorar la mantenibilidad y seguridad del código.

## 📁 Descripción del Proyecto
Aplicación de gestión de parqueaderos con arquitectura cliente-servidor que implementa:
- **Backend**: Node.js + Express.js
- **Frontend**: React + TypeScript + React Native
- **Base de Datos**: PostgreSQL
- **Herramienta de Análisis**: SonarQube

## ✅ Vulnerabilidades Identificadas y Corregidas

### Backend (5 vulnerabilidades críticas)
1. **Inyección SQL** - Implementación de consultas parametrizadas en `SpaceService.js` y `ZoneService.js`
2. **Manejo de Errores Inseguro** - Middleware mejorado en `errorHandler.js` sin exposición de detalles internos
3. **Ausencia de Validación de Entrada** - Validaciones robustas en rutas (`spaces.js`, `zones.js`)
4. **Configuración Insegura de Base de Datos** - Credenciales gestionadas con variables de entorno
5. **Falta de Autenticación/Autorización** - Implementación de contexto de autenticación

### Frontend (5 vulnerabilidades críticas)
1. **XSS (Cross-Site Scripting)** - Sanitización de contenido en componentes
2. **Almacenamiento Inseguro de Credenciales** - Implementación segura de cookies con `httpOnly`
3. **Exposición de Información Sensible** - Gestión segura de tokens de autenticación
4. **Dependencias Vulnerables** - Actualización de dependencias a versiones seguras
5. **WebSocket Inseguro** - Implementación de comunicación segura en `useSecureWebSocket.ts`

## 🏗️ Estructura del Proyecto

```
├── backend/
│   ├── config/              # Configuración de base de datos
│   ├── middleware/          # Middlewares (validación, errores)
│   ├── routes/              # Rutas API (spaces, zones)
│   ├── services/            # Lógica de negocio (Services)
│   ├── utils/               # Utilidades (handlers, respuestas)
│   ├── sql/                 # Scripts de base de datos
│   └── server.js            # Punto de entrada
├── frontend/
│   ├── mobile/              # App móvil con React Native
│   │   └── src/
│   │       ├── components/  # Componentes reutilizables
│   │       ├── screens/     # Pantallas de la app
│   │       ├── services/    # Servicios API
│   │       └── utils/       # Utilidades
│   └── web/                 # Aplicación web
│       └── src/
│           ├── components/  # Componentes React
│           ├── pages/       # Páginas
│           └── utils/       # Utilidades
└── .gitignore              # Ignorar dependencias y archivos sensibles
```

## 🔒 Principios SOLID Aplicados

- **Single Responsibility Principle (SRP)**: Cada servicio tiene una única responsabilidad
- **Open/Closed Principle (OCP)**: Código abierto para extensión, cerrado para modificación
- **Liskov Substitution Principle (LSP)**: Consistencia en interfaces de servicios
- **Interface Segregation Principle (ISP)**: Interfaces específicas por cliente
- **Dependency Inversion Principle (DIP)**: Inyección de dependencias en servicios

## 🎨 Patrones de Diseño Implementados

- **Factory Pattern**: Creación de instancias de servicios
- **Singleton Pattern**: Conexión única a base de datos
- **Repository Pattern**: Acceso a datos abstracido
- **MVC Pattern**: Separación de controladores, modelos y vistas
- **Handler Pattern**: Manejo de errores asincrónico

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js 18+
- PostgreSQL 12+
- SonarQube 9.0+
- npm o yarn

### Backend

```bash
cd backend
npm install
npm start
```

Variables de entorno (.env):
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=parqueaderos
DB_USER=postgres
DB_PASSWORD=your_password
NODE_ENV=development
```

### Frontend - Web

```bash
cd frontend/web
npm install
npm run dev
```

### Frontend - Mobile

```bash
cd frontend/mobile
npm install
npm start
```

## 📊 Métricas de Calidad (SonarQube)

Después del análisis y corrección:

| Métrica | Estado |
|---------|--------|
| Vulnerabilidades Críticas | ✅ Corregidas |
| Deuda Técnica | ✅ Reducida |
| Cobertura de Código | ✅ Mejorada |
| Duplicación de Código | ✅ Minimizada |
| Problemas de Seguridad | ✅ Resueltos |

## 🔍 Configuración de SonarQube

### Archivo: `sonar-project.properties`

```properties
sonar.projectKey=taller1U3-sonarqube
sonar.projectName=Taller SonarQube - Gestión de Parqueaderos
sonar.projectVersion=1.0.0
sonar.sources=backend,frontend
sonar.exclusions=**/node_modules/**,**/dist/**,**/*.test.js
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.typescript.lcov.reportPaths=coverage/lcov.info
```

### Ejecutar Análisis

```bash
sonar-scanner
```

## 🛡️ Buenas Prácticas Implementadas

### Backend
- ✅ Validación de entrada en todas las rutas
- ✅ Manejo seguro de errores sin exposición de detalles
- ✅ Consultas parametrizadas contra inyección SQL
- ✅ Variables de entorno para datos sensibles
- ✅ CORS configurado correctamente

### Frontend
- ✅ Sanitización de contenido contra XSS
- ✅ Cookies seguras con `httpOnly` y `Secure`
- ✅ Validación de entrada en formularios
- ✅ WebSocket seguro (WSS)
- ✅ Manejo seguro de tokens JWT

## 📚 Dependencias Principales

### Backend
- express.js
- pg (PostgreSQL)
- dotenv
- cors
- helmet

### Frontend
- react
- typescript
- axios
- react-native

## 👥 Autor
Elkin Pabón

## 📄 Licencia
MIT

## 🔗 Referencias
- [SonarQube Documentation](https://docs.sonarqube.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/nodejs-security/)
