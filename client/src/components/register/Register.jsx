import { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router";
import request from "../utils/request.js";

const BUILDINGS_URL = 'http://localhost:3030/jsonstore/buildings';
const USERS_URL = 'http://localhost:3030/jsonstore/users';
const MEMBERSHIPS_URL = 'http://localhost:3030/jsonstore/memberships';

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        role: '',
        buildingId: ''
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.repeatPassword) {
            return alert('Passwords do not match');
        }

        const newUser = {
            firstName: formData.firstName,
            middleName: formData.middleName,
            lastName: formData.lastName,
            email: formData.email,
            role: formData.role,
            _createdOn: Date.now()
        };

        const createdUser = await request(USERS_URL, 'POST', newUser);


        if (formData.buildingId) {
            const membership = {
                userId: createdUser._id,
                buildingId: formData.buildingId,
                _createdOn: Date.now()
            };

            await request(MEMBERSHIPS_URL, 'POST', membership);
        }

        alert('Registration successful!');
    };

    const onChange = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const [buildings, setBuildings] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await request(BUILDINGS_URL, 'GET');
            setBuildings(Object.values(result));
        })()
    }, [])

    return (
        <section className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Account
                </h2>

                <form className="space-y-4" onSubmit={onSubmit}>

                    <div>
                        <label className="block text-sm font-medium text-slate-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            name='firstName'
                            value={formData.firstName}
                            onChange={onChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Name"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-600">
                            Sirname
                        </label>
                        <input
                            type="text"
                            name="sirName"
                            value={formData.middleName}
                            onChange={onChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Sirname"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-600">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={onChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Lastname"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={onChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Email"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={onChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="••••••••"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-600">
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            name="repeatPassword"
                            value={formData.repeatPassword}
                            onChange={onChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-slate-600">
                            Role
                        </label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={onChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          
                        >
                            <option value="" disabled>
                                Select role
                            </option>
                            <option value="admin">Admin</option>
                            <option value="manager">Домоуправител</option>
                            <option value="user">Потребител</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-600">
                            Building
                        </label>
                        <select
                            name="building"
                            value={formData.buildingId}
                            onChange={onChange}
                            className="w-full mt-1 px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            
                        >
                            <option value="" disabled>
                                Select building
                            </option>
                            {buildings.map(building => <option key={building._id} value={building._id}>{building.address}</option>)}

                        </select>
                    </div>


                    <button
                        type="submit"
                        className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </section>
    );
}