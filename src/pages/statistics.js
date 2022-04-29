import React from 'react';
import table from '../images/table.jpg';

const pageStyles = {
    color: '#232129',
    padding: 96,
    fontFamily: '-apple-system, Roboto, sans-serif, serif'
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 32,
    maxWidth: 320
};
const paragraphStyles = {
    marginBottom: 24
};
export default function Statistics() {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>Statistics</h1>
            <p style={paragraphStyles}>This page is used by Cyscale Admins to monitor the product success.</p>
            <p style={paragraphStyles}>
                Let's assume the statistics already exists in the /markdown directory and they act as a simple database.
            </p>
            <p style={paragraphStyles}>Your job is to pull the data and display a table like the one from the image.</p>
            <p style={paragraphStyles}>
                Also, at the bottom of the table we will have a button to compute the success score:
            </p>
            <code>
                average({' '}
                <strong>
                    subscriptions<sub>i</sub>
                </strong>{' '}
                / (
                <strong>
                    users_count<sub>i</sub>
                </strong>{' '}
                -{' '}
                <strong>
                    free_users<sub>i</sub>
                </strong>{' '}
                ) * 100 *{' '}
                <strong>
                    average_price<sub>i</sub>
                </strong>
                ) where i in [0..2] (eg. Jan, Feb, Mar)
            </code>
            <p style={paragraphStyles}>If the score is above 0.4 we should display a green OK, otherwise a red FAIL.</p>
            <img alt='table' style={{ marginBottom: 64 }} src={table} width={850} />
            <h2 style={headingStyles}>Evaluation checklist</h2>
            <ul>
                <li style={{ marginBottom: 16 }}>requirements are understood</li>
                <li style={{ marginBottom: 16 }}>
                    the data is successfully pulled from markdown using graphql
                </li>
                <li style={{ marginBottom: 16 }}>
                    success score is correctly computed (tip: it's not the one from the image)
                </li>
                <li style={{ marginBottom: 16 }}>a state management mechanism is implemented for the button</li>
                <li style={{ marginBottom: 16 }}>bonus points if the UI is modern and a CSS library is used</li>
                <li style={{ marginBottom: 16 }}>
                    code is appropriately split into componets/abstraction layers if needed
                </li>
                <li style={{ marginBottom: 16 }}>variable and function names are properly chosen</li>
                <li style={{ marginBottom: 16 }}>code contains comments</li>
            </ul>
        </main>
    );
}
