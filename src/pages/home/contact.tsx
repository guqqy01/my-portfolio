function Contact(){
    return (
        <div className="view" id="view-contact">

            <div className="hero-eyebrow" style={{ marginBottom: '12px' }}>CONTACT.md</div>
            <div className="hero-name" style={{ fontSize: '48px', marginBottom: '16px' }}>GET IN <span>TOUCH</span></div>

            <div className="hero-bio" style={{ marginBottom: '32px' }}>
            Open to collaborations, freelance work, and interesting conversations about games.
            Response time: usually within a day or two.
            </div>

            <div className="section-title">CHANNELS</div>

            <div className="contact-grid" style={{ marginBottom: '32px' }}>
                <a className="contact-item" href="mailto:guqqy.dev@gmail.com">
                    <span className     ="contact-icon">✉</span>
                    <div>
                    <div className="contact-label">EMAIL</div>
                    <div className="contact-val">guqqy.dev@gmail.com</div>
                    </div>
                </a>
                <a className="contact-item" href="https://github.com/Guqqy01" target="_blank">
                    <span className="contact-icon">◇</span>
                    <div>
                    <div className="contact-label">GITHUB</div>
                    <div className="contact-val">github.com/Guqqy01</div>
                    </div>
                </a>
                <a className="contact-item" href="https://linkedin.com/in/DaleGush" target="_blank">
                    <span className="contact-icon">◉</span>
                    <div>
                    <div className="contact-label">LINKEDIN</div>
                    <div className="contact-val">/in/DaleGush</div>
                    </div>
                </a>
            </div>

            <div className="section-title">SEND A MESSAGE</div>

            <div style={{ maxWidth: '500px' }}>
                <div className="form-field">
                    <label className="form-label">YOUR NAME</label>
                    <input className="form-input" type="text" placeholder="Jane Smith">
                    </input>
                </div>
                <div className="form-field">
                    <label className="form-label">EMAIL</label>
                    <input className="form-input" type="email" placeholder="jane@example.com">
                    </input>
                </div>
                <div className="form-field">
                    <label className="form-label">MESSAGE</label>
                    <textarea className="form-input" placeholder="Hey, I want to make a game together..."></textarea>
                </div>
                <button className="btn-send">SEND_MESSAGE →</button>
            </div>
        </div>
    );
}

export default Contact;