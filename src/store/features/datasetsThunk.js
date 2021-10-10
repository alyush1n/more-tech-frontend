import {getDatasets as getDatasetsBackend, getDataset as getDatasetBackend} from "../../axios"
import {addDatasets, addDataset} from "./datasets"
import {loaded, loading} from "./loading"

export const getDatasets = () => {
    return async (dispatch) => {
        dispatch(loading())
        try {
            const data = await getDatasetsBackend()
            console.log(data)
            dispatch(addDatasets(data))
        }catch(e){
            console.log(e)
            return {}
        }
        dispatch(loaded())
    }
}

export const getDataset = (id) => {
    return async (dispatch) => {
        dispatch(loading())
        try {
            const data = await getDatasetBackend(id)
            console.log(data)
            dispatch(addDataset(data))
        }catch(e){
            console.log(e)
            return {}
        }
        dispatch(loaded())
    }
}