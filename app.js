const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask() {
  rl.question('Indicador de la tarea: ', (indicator) => {
    rl.question('Descripción de la tarea: ', (description) => {
      tasks.push({ indicator, description, completed: false });
      console.log('Tarea agregada con éxito.');
      displayMenu();
    });
  });
}

function removeTask() {
  rl.question('Índice de la tarea a eliminar: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada con éxito.');
    } else {
      console.log('¡Índice de tarea inválido!');
    }
    displayMenu();
  });
}

function completeTask() {
  rl.question('Índice de la tarea completada: ', (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      console.log('Tarea completada con éxito.');
    } else {
      console.log('¡Índice de tarea inválido!');
    }
    displayMenu();
  });
}

function displayTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`${index}. [${status}] ${task.indicator}: ${task.description}`);
  });
  displayMenu();
}

function displayMenu() {
  console.log('--- Menú ---');
  console.log('1. Agregar tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  rl.question('Elije una opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        removeTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        displayTasks();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida. Inténtalo de nuevo.');
        displayMenu();
        break;
    }
  });
}

displayMenu();
