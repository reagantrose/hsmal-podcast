import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import "./newsletter.css"

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
            <div className="newsletter-container">
                <h2>Subscribe to Our Newsletter</h2>
                <p>From time to time we will send out updates and links to resources.</p>
                <div>
                    <form onSubmit={this._handleSubmit} className="newsletter">
                        <input
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Email"
                            name="email"
                            aria-label="enter email"
                        />
                        <input type="submit" aria-label="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}