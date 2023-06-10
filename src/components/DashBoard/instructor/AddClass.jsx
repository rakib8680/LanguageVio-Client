import React, { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../providers/AuthProvider";
import AddClassForm from "./AddClassForm";
import { imageUpload } from "../../../api/utils";
import { addClass } from "../../../api/class";

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = ({ name, image, className, seats, price, email }) => {
        setLoading(true);
        const imageData = image[0];
        imageUpload(imageData)
            .then((data) => {
                const classesData = {
                    name,
                    image: data.data.display_url,
                    className,
                    seats,
                    price,
                    email,
                    teacher: {
                        name: user?.name,
                        email: user?.email,
                        image: user?.photoURL,
                    },
                    status: "pending",
                };
                addClass(classesData)
                    .then((res) => {
                        console.log(res);
                        if (res.insertedId) {
                            toast.success("Class added successfully");
                            setLoading(false);
                            navigate("/dashboard/myClasses");
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        setLoading(false);
                        toast.error(err.message);
                    });
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                toast.error(err.message);
            });
    };
    return (
        <AddClassForm 
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            loading={loading}
        />
    );
};

export default AddClass;