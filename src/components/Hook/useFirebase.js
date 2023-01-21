import { useState } from 'react'
import { db } from '../Firebase/Index'
import { collection, doc, getDocs } from 'firebase/firestore'

const useFirebase = () => {

    const [productos, setProductos] = useState([])

    const getProductos = async () => {

        try {
            const prodColl = collection(`productos`, db)
            await getDocs(prodColl).then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => {
                    return {
                        ...doc.data()
                    }
                }))
            })
        } catch (error) {

        }
    }



    return { productos, getProductos }
}

export default useFirebase