import { createPortal } from "react-dom";
import { Collection } from "../components/Collection/Collection";
import { useEffect, useState } from "react";
import { CollectionModal } from "../components/CollectionModal/CollectionModal";
import { useNfts } from "../hooks";
import { useDispatch } from "react-redux";
import nftOperations from "../redux/nft/nftOperations";
import { useNavigate, useParams } from "react-router-dom";
import { ConfirmModal } from "../components/ConfirmModal/CnfirmModal";

const CollectionPage = () => {
    const {_id} = useParams();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [show, setShow] = useState(false);
    const [deleting, setDeleting] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        dispatch(nftOperations.getCollectionDetails(_id));
    }, [_id, dispatch]);


    const {collectionDetails} = useNfts();

    if (!collectionDetails) {
        return;
    };

    const toggleModal = () => {
        if (edit) {
            setTimeout(() => {
                setEdit(!edit);
            }, 500);
            setShow(!show)
            return;
        }
        setEdit(!edit)
        setTimeout(() => {
            setShow(!show)
        }, 1);
    };

    const editCollectionSubmit = (collection) => {
        dispatch(nftOperations.updateCollection({_id: collectionDetails._id, collection}));
    };

    const deletingModalToggle = (_id) => {
        if (deleting) {
            setTimeout(() => {
                setDeleting(null);
            }, 250);
            setShow(!show)
            return;
        }
        setDeleting(_id)
        setTimeout(() => {
            setShow(!show)
        }, 1);
    };

    const deleteCollection = () => {
        dispatch(nftOperations.deleteCollection(deleting));
        setDeleting(null);
        navigate('/userpage');
    };

    const editorState = {
        title: collectionDetails.title,
        nfts: collectionDetails.nfts.map(nft => nft._id)
    };

    return (
        <>
            <Collection collectionDetails={collectionDetails} edit={edit} toggleModal={toggleModal} deleteCollection={deletingModalToggle} />
            {edit && 
                createPortal(
                    <CollectionModal title='Edit Collection' btnText='Edit Collection' onSubmit={editCollectionSubmit} initialState={editorState} modalOpen={edit} toggleModal={toggleModal} show={show} />,
                    document.querySelector('#modal-root')
                )
            }
            {deleting &&
                createPortal(
                    <ConfirmModal text={`Delete collection "${collectionDetails.title}"?`} confirm={deleteCollection} cancel={deletingModalToggle} show={show} />,
                    document.querySelector('#modal-root')
                )
            }
        </>
    )
};

export default CollectionPage;