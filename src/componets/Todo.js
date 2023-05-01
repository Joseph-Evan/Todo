export default function Todo ({todo}){

    
    return (
        <div className="todo">
            <span>{todo.name}</span>
            <button>Toggle</button>
            <button>Delete</button>
        </div>
    )
}