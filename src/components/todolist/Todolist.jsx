export default function TodoList() {
    const todoList = [
    {id: 1, title: "review resources"},
     {id: 2, title: "take notes"},
   {id: 3, title:  "code out app"},
    {id: 4, title:  "code out app"},
     {id: 5, title:  "review resources"},
    {id: 6, title:  "takes notes"},
    {id: 7, title: "code out app"},
     {id: 8, title: "code out app"},
  ]
  const listColors = [
  
         '#ededed',
          '#e7e6e1',
           '#d4e8e6',
          '#a2d0cd',
        
       
  ]

   return (
    <div>
  
     <ul>
      {todoList.map((elem, index )=> <li className='todo-item'  style={{ backgroundColor: listColors[index % listColors.length] }} key={index}>{elem.title}</li>)}
     </ul>
    </div>
  )
}