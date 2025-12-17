import BuildingForm from "./BuildingForm.jsx";

export default function CreateBuilding() {
    const createHandler = (data) => {
        // console.log("Create:", data);
    };

    return (
        <BuildingForm
            onSubmit={createHandler}
            submitText="Create"
        />
    );
}
