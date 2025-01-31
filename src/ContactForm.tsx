import "./ContactForm.css";
import Swal from "sweetalert2";

const ContactForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const form = event.target; // Reference to the form element
        const formData = new FormData(form);

        formData.append("access_key", "d4a86808-3f02-496c-8d27-2d3e9c7b6294");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
            });
            form.reset(); // Reset the form fields after a successful submission
        }
    };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns, please fill out the form below:</p>
                <div className="input-box">
                    <label>Name</label>
                    <input type="text" className="field" placeholder="Enter your name" name="name" required/>
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder="Enter your email" name="email" required/>
                </div>
                <div className="input-box">
                    <label>Message</label>
                    <textarea name="message" id="" className="field mess" placeholder="Enter your message"  required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default ContactForm;
