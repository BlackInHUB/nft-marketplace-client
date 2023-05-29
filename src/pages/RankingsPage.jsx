import { useDispatch } from "react-redux";
import { Rankings } from "../components/Rankings/Rankings";
import { useEffect } from "react";
import userOperations from '../redux/user/userOperations';

const RankingsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });

        dispatch(userOperations.getRankings());
    }, [dispatch]);

    return (
        <Rankings />
    )
};

export default RankingsPage;