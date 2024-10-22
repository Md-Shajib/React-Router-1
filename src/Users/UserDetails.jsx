import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {id, name, username, email, address, phone, website, company} = user;
    return (
        <div className="">
            <div className="p-5 m-5 leading-relaxed bg-gray-200">
                <h3>User ID: {id}</h3>
                <h4>Name: {name}</h4>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Street: {address.street} City: {address.city}, Zip-Code: {address.zipcode}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <p>Copany Name: {company.name}</p>
            </div>
        </div>
    );
};

export default UserDetails;