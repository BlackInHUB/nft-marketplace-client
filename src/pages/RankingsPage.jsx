import { useDispatch } from "react-redux";
import { Rankings } from "../components/Rankings/Rankings";
import { useEffect } from "react";
import userOperations from '../redux/user/userOperations';

const RankingsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOperations.getRankings());
    }, [dispatch]);

    return (
        <Rankings />
    )
};

export default RankingsPage;