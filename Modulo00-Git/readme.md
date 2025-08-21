# Ejercicio de laboratorio - Modulo 00 GIT

1. Creamos un repositorio local

- Creamos 3 archivos
- Los pasamos al stage con git add .
- Hacemos commit de todos los archivos

<img width="1815" height="210" alt="git commit -m subiendo archivos a repo local" src="https://github.com/user-attachments/assets/c35abcb1-3517-4103-8135-aff98a1bd893" />

2. Creamos un nuevo repositorio en GitHub

3. Generamos el enlace https y lo enlazamos con nuestro repositorio local con el comando git remote add origin URL 

<img width="1287" height="1288" alt="repositorios enlazados" src="https://github.com/user-attachments/assets/7a966284-d396-4ef7-bbc7-84f2cc8bd78b" />

4. Añadimos lo que tenemos en la rama master local al repositorio remoto con git push -u origin master

<img width="1787" height="422" alt="git push -u origin master" src="https://github.com/user-attachments/assets/44d5717b-9728-425b-ae8d-a6871d1ef139" />

5. Creamos una nueva rama llamada "development" con el comando git branch development y la seleccionamos con git checkout development.

<img width="1796" height="137" alt="git branch development" src="https://github.com/user-attachments/assets/045b19e7-017d-4ea1-ba18-226c157de212" />

<img width="588" height="216" alt="git checkout development" src="https://github.com/user-attachments/assets/8580bdf9-95d8-4934-bebc-ed0c3f1bb00b" />


6. Hacemos cambios en el archivo index.html y hacemos commit. Lo haremos directamente con el comando git commit -am "añadiendo commits", ya que al ser modificaciones en el archivo, este ya está señalado y no hace falta pasarlo al stage.

<img width="1863" height="171" alt="git commit -am cambios en development" src="https://github.com/user-attachments/assets/b71eb8f9-6087-4999-b334-139b37e18522" />

7. Subimos los cambios de la rama development al repositorio remoto. Al ser la primera vez debemos usar el comando git push -u origin development.

<img width="1851" height="531" alt="git push -u origin development" src="https://github.com/user-attachments/assets/0fff5ef5-133a-4af4-b233-43ef257f4010" />

8. Volvemos a la rama main con git checkout master.

9. Hacemos un merge desde la rama development a la rama master con: git merge development.

<img width="614" height="302" alt="git merge development" src="https://github.com/user-attachments/assets/7196530d-66ad-4ea7-b9a3-c88277ee5e6d" />

10. No hay conflictos, hacemos un push de master en Github con el comando git push

<img width="984" height="248" alt="git push" src="https://github.com/user-attachments/assets/f8a3acd2-b741-47e3-8421-dba55cafdd8d" />
