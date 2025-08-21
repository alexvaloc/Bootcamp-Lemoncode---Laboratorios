#Ejercicio de laboratorio - Modulo 00 GIT

1. Creamos un repositorio local

- Creamos 3 archivos
- Los pasamos al stage con git add .
- Hacemos commit de todos los archivos

2. Creamos un nuevo repositorio en GitHub
3. Generamos el enlace https y lo enlazamos con nuestro repositorio local con el comando git remote add origin URL
4. Añadimos lo que tenemos en la rama master local al repositorio remoto con git push -u origin master
5. Creamos una nueva rama llamada "development" con el comando git branch development y la seleccionamos con git checkout development
6. Hacemos cambios en el archivo index.html y hacemos commit. Lo haremos directamente con el comando git commit -am "añadiendo commits", ya que al ser modificaciones en el archivo, este ya está señalado y no hace falta pasarlo al stage.
7. Subimos los cambios de la rama development al repositorio remoto. Al ser la primera vez debemos usar el comando git push -u origin development
8. Volvemos a la rama main con git checkout master
9. Hacemos un merge desde la rama development a la rama master con: git merge development
10. No hay conflictos, hacemos un push de master en Github con el comando git push
