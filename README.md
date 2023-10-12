# react-todo

Es un proyecto de práctica desarrollado en el marco del [Curso de introducción a React.js dePlatzi](https://platzi.com/reactjs). 

### Funcionalidades

Durante el curso se plantean las funcionalidades de creación, completado, eliminación y filtrado por coincidencia de texto. Además agregué la funcionalidad de poder filtrar en base a su estado. 

El usuario podrá:

- Crear tareas.
- Completar tareas.
- Filtrar tareas en base a su estado.
- Filtrar tareas en por coincidencias de texto.
- Filtrar tareas en por su estado y coincidencias de texto.
- Eliminar tareas.

### [Visita react-todo](https://sebastianboari.github.io/react-todo/)

[![react-todo](https://i.imgur.com/xL38Hsq.png "react-todo")](https://sebastianboari.github.io/react-todo/ "react-todo")

### Tecnologias

La aplicación se inicializó con **create-react-app** se utilzó el patron de diseño **"feature-based"** y siendo verion-compatible 18 de **ReactJS**.

La **persistencia es en localStorage** puede usar la siguiente linea para inyectar tareas de forma mas rápida y sencilla desde las dev-tools del navegador: 

```javascript
    const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Finalizar el curso de React.js', completed: false },
    { text: 'Hacer ejercicio', completed: true },
    { text: 'Comprar pan', completed: false },
    { text: 'Practicar ingles', completed: true },
    ]

    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
```

### Gráficos de progreso

Quiero destacar un componente muy útil que me facilitó la elaboración de los gráficos de torta para representar el porcentaje de tareas activas y finalizadas.

![Gráficos de torta](https://i.imgur.com/bMRqZg9.png)

El componente está publicado en dev.to. [Ir al artículo](https://dev.to/jackherizsmith/making-a-progress-circle-in-react-3o65 "Ir al artículo")


### Diseño

*Carece de responsividad y de cualquier tipo de adaptacion a dispositivos moviles.*

El diseño no fué esquematizado, ni elaboré un wireframe. Fuí armando el diseño en el proceso del curso y definiendo los estilos a lo largo del desarrollo de cada funcionalidad, por lo cual, en algunas partes puede mostrar incongruencias.

### Conclusión

Me siento satisfecho con el resultado final, aunque detecto algunos "errores" en como implementé el patrón de diseño "feature-based" creo entender las ventajas del patrón sin embargo no termina de convencerme.
