import { useState } from "react";
import BuildingForm from "./BuildingForm.jsx";
import { useEffect } from "react";
import { useParams } from "react-router";
import request from "../utils/request.js";

export default function EditBuilding() {
    const [users, setUsers] = useState([]);
    const [building, setBuilding] = useState([]);
    // const members = []; // load members for building
    const { buildId } = useParams();

    const MEMBERSHIP_URL = 'http://localhost:3030/jsonstore/membership';
    const USERS_URL = 'http://localhost:3030/jsonstore/users';
    const BUILDINGS_URL = 'http://localhost:3030/jsonstore/buildings';



    const editHandler = (data) => {
        // console.log("Edit:", data);
    };

    useEffect(() => {
        (async () => {
            const membershipResponse = await request(MEMBERSHIP_URL, 'GET');
            const buildingMemberships = Object.values(membershipResponse).filter(memeber => memeber.buildingId === buildId);
            const usersWa = await request(USERS_URL, 'GET');
            const buidingsResponse = await request(`${BUILDINGS_URL}/${buildId}`, 'GET');
            const buildingOutput = Object.values(buidingsResponse);
            const users = Object.values(usersWa);



            const buildingUsers = users.filter(u =>
                buildingMemberships.some(m => m.userId === u._id)
            );

            setBuilding(buildingOutput);
            setUsers(buildingUsers);
            debugger
        })()
    }, [buildId])


    return (
        <BuildingForm
            initialValues={building}
            members={users}
            isEdit={true}
            submitText="Update"
            onSubmit={editHandler}
        />
    );
}
