import { useRef, useState } from "react";
import "./styles.css"; // Import the CSS file

type FormData = {
    name: string;
    email: string;
    password: string;
};

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ''
    });

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormData({
            name: name.current!.value,
            email: email.current!.value,
            password: password.current!.value
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input type="text" placeholder="Enter your name" ref={name} />
                <input type="email" placeholder="Enter your email" ref={email} />
                <input type="password" placeholder="Enter your password" ref={password} />

                <button type="submit">Submit</button>

                <section>
                    <h1>Name: {formData.name}</h1>
                    <h1>Email: {formData.email}</h1>
                    <h1>Password: {formData.password}</h1>
                </section>
            </form>
        </div>
    );
};

export default Form;
