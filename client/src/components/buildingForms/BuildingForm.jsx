import { useState } from "react";

export default function BuildingForm({
    initialValues,
    members = [],
    onSubmit,
    submitText = "Save",
    isEdit = false
}) {
    const [values, setValues] = useState({
        address: initialValues?.address || "",
        entranceFee: initialValues?.entranceFee || "",
        imageUrl: initialValues?.imageUrl || "",
        managerId: initialValues?.managerId || ""
    });

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            address: values.address,
            entranceFee: Number(values.entranceFee),
            imageUrl: values.imageUrl
        };

        if (isEdit) {
            payload.managerId = values.managerId || null;
        }

        onSubmit(payload);
    };

    return (
        <form className="bg-white rounded-3xl shadow-xl p-8 max-w-xl mx-auto"
            onSubmit={handleSubmit}>

            <h2 className="text-2xl font-bold mb-6 text-center">
                {submitText} Building
            </h2>

            {/* Address */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Address
                </label>
                <input
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2 border rounded-xl"
                />
            </div>

            {/* Entrance Fee */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Entrance Fee
                </label>
                <input
                    type="number"
                    name="entranceFee"
                    value={values.entranceFee}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2 border rounded-xl"
                />
            </div>

            {isEdit && (
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">
                        Building Manager
                    </label>
                    <select
                        name="managerId"
                        value={values.managerId || ""}
                        onChange={onChange}
                        className="w-full px-4 py-2 border rounded-xl bg-white"
                    >
                        <option value="">No manager</option>
                        {members.map(m => (
                            <option key={m._id} value={m._id}>
                                {m.firstName} {m.lastName}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Image */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-1">
                    Image URL
                </label>
                <input
                    type="text"
                    name="imageUrl"
                    value={values.imageUrl}
                    onChange={onChange}
                    required
                    className="w-full px-4 py-2 border rounded-xl"
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold"
            >
                {submitText}
            </button>
        </form>
    );
}
