import { useState } from 'react'
import { db } from '../Firebase/Index'
import { collection, doc, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'

const useFirebase = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
      
    }, [productos])
    

    const getProductos = async () => {

        try {
            const prodColl = collection(db, `productos`)
            await getDocs(prodColl).then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
        } catch (error) {
            console.log(error)
        }
    }



    return { productos, getProductos }
}

export default useFirebase