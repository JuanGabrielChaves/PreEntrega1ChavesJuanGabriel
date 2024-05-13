/** @format */

import { Skeleton } from "@mui/material";

const SkeletonCard = () => {
    return (
        <>
            <Skeleton className="skeleton" variant="rectangular" sx={{ fontSize: "1rem" }} height={400} width={250} />
            <Skeleton className="skeleton" variant="text" sx={{ fontSize: "1rem" }} height={50} width={250} />
            <Skeleton className="skeleton" variant="text" sx={{ fontSize: ".5rem" }} height={30} width={100} />
            <Skeleton className="skeleton" variant="text" sx={{ fontSize: ".5rem" }} height={30} width={150} />
        </>
    );
};

export default SkeletonCard;
