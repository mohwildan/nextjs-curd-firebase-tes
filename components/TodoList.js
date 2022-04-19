import { collection, doc, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

const TodoList = () => {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        const collentionRef = collection(db, 'todos')
        const q = query(collentionRef, orderBy('timestamp', 'desc'))

        const unsubs = onSnapshot(q, (QuerySnapshot) => {
            setTodo(QuerySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, timestamp: doc.data().
            timestamp?.toDate().getTime()})))
        })

        return unsubs
    },[])
  return (
    <div>
        {todo.map((value) => {
            return(
                <div key={value.id}>
                    <h1 style={{fontSize: '3rem'}}>{value.title}</h1>
                    <p>{value.detail}</p>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList