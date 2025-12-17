import BuildingForm from "./BuildingForm.jsx";

export default function EditBuilding() {
    const members = []; // load members for building

    const editHandler = (data) => {
        // console.log("Edit:", data);
    };

    return (
        <BuildingForm
            // initialValues={building}
            members={members}
            isEdit={true}
            submitText="Update"
            onSubmit={editHandler}
        />
    );
}
