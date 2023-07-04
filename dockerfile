# Usa la imagen base de nginx
FROM nginx:latest

# Elimina el archivo de configuración predeterminado de nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia los archivos de distribución a la carpeta de contenido estático de nginx
COPY build /usr/share/nginx/html

# Copia tu propio archivo de configuración de nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/my-nginx.conf

# Expone el puerto 80 (el puerto predeterminado de nginx)
EXPOSE 80

# Define el comando para ejecutar nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]