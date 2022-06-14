
import Skeleton from "@material-ui/lab/Skeleton"

export default function ListSkeleton(props){
    const{width, height}=props
    return(
        <>
        {
            Array(height).fill().map(()=>{
                return <Skeleton animation="wave" width={width}/>
            })
        }
        </>
    )
}