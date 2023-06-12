import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Language Vio`
    }, [title])
};


export default  useTitle;