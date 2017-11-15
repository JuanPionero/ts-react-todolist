interface ITodo {
    text:string,id:number,completed:boolean
}

interface IAction {
    type:string
}

interface IActionFiltering extends IAction {
    filter:string
}

interface IActionTodoAdd extends IAction {
    text:string
}

interface IActionTodoUpdate extends IAction {
    id:number,
    text?:string
}

type ActionType = IActionFiltering & IActionTodoAdd & IActionTodoUpdate;