
import Skeleton from "@material-ui/lab/Skeleton"

export default function CardSkeleton(props){
    const{width, height}=props
    return(
        <>
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="circle" width={40} height={40} animation="wave"/>
            <Skeleton variant="rect" width={width} height={height} animation="wave"/>
        </>
    )
}