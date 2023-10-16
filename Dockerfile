# Usar la imagen oficial de Node.js como base
FROM node:18.15.0

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json al directorio de trabajo
COPY package.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Construir el proyecto
RUN npm run build

# Generar los archivos estáticos
RUN npm run export

# Instalar el paquete "serve" de npm globalmente
RUN npm install -g serve

# Exponer el puerto en el que se ejecutará el servidor (por defecto 5000)
EXPOSE 5000

# Iniciar el servidor con la carpeta "out" generada
CMD ["serve", "-s", "out"]