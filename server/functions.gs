const タスク = new Sheet({spreadsheetId:'1rkIx8p0Oh8eJ9phttz3uC8MAGmeKn0ssVStQTu5Pa7U'})

const getTasks=()=>{
  return JSON.stringify(タスク.items)
}

const getTask=(ID)=>{
  const task = タスク.docs[ID]
  return JSON.stringify(task)
}

const createTask=(data)=>{
  const newTask = JSON.parse(data)
  newTask.ID = Utilities.getUuid()
  newTask.タイムスタンプ = new Date()
  タスク.setItem(newTask)

  タスク.fetch()
  return getTasks()
}

const updateTasks=(data)=>{
  const newTasks = JSON.parse(data)
  タスク.renew(newTasks)

  タスク.fetch()
  return getTasks()
}

const updateTask=(data)=>{
  const task = JSON.parse(data)
  task.タイムスタンプ = new Date(task.タイムスタンプ)
  タスク.setItem(task)

  タスク.fetch()
  return getTasks()
}

const destroyTask=(ID)=>{
  タスク.remove(ID)

  タスク.fetch()
  return getTasks()
}
