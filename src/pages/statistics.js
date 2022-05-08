import React from 'react';
import table from '../images/table.jpg';
import { useState } from 'react';
import { graphql } from 'gatsby';
import '../styles/style.css';

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
const greenScore = {
    color: '#00FA9A',
};
const redScore = {
    color: '#FF0000',
};
const buttonContainerStyle = {
    display: 'flex',
    boxShadow: '5px 5px 20px #C8C6A7',
    padding: '20px',
    width: '25%',
    borderRadius: '10px',
    justifyContent: 'space-between',
}
const buttonStyle = {
    backgroundImage: 'linear-gradient(90deg,#0f26aa,#ff4a56)',
    padding: '0px 30px',
    borderRadius: '5px',
    color: '#FFFFFF',
    border: '0',
    fontWeight: '600'
}

const tableContainer = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    flexWrap: 'wrap'
}

export default function Statistics({ data }) {
    const [score, setScore] = useState(0);

    // the function used to compute the success score
    const calculate = () => {
        let average = data.allMarkdownRemark.nodes.reduce((sum, value) => {
            return sum + (value.frontmatter.subscriptions / (value.frontmatter.users_count - value.frontmatter.free_users) / 100 * value.frontmatter.average_price);
        }, 0) / data.allMarkdownRemark.nodes.length;

        setScore(average.toFixed(2));
    }

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
                ) / 100 *{' '}
                <strong>
                    average_price<sub>i</sub>
                </strong>
                ) where i in [0..2] (eg. Jan, Feb, Mar)
            </code>
            <p style={paragraphStyles}>If the score is above 0.4 we should display a green OK, otherwise a red FAIL.</p>
            <img alt='table' style={{ marginBottom: 64 }} src={table} width={850} />

            <div style={tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>Metrics</th>
                            {
                                // display the name of the month dynamically
                                data.allMarkdownRemark.nodes.map((node) => (
                                    <th key={node.id}>
                                        {node.frontmatter.title}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Users Count</td>
                            {
                                data.allMarkdownRemark.nodes.map((node) => (
                                    <td key={node.id}>
                                        {node.frontmatter.users_count}
                                    </td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>Free Plans</td>
                            {
                                data.allMarkdownRemark.nodes.map((node) => (
                                    <td key={node.id}>
                                        {node.frontmatter.free_users}
                                    </td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>Subscriptions</td>
                            {
                                data.allMarkdownRemark.nodes.map((node) => (
                                    <td key={node.id}>
                                        {node.frontmatter.subscriptions}
                                    </td>
                                ))
                            }
                        </tr>
                        <tr>
                            <td>Average Price</td>
                            {
                                data.allMarkdownRemark.nodes.map((node) => (
                                    <td key={node.id}>
                                        {node.frontmatter.average_price}
                                    </td>
                                ))
                            }
                        </tr>
                    </tbody>
                </table>

                <div style={buttonContainerStyle}>
                    <button onClick={calculate} style={buttonStyle}>Calculate</button>
                    <p>Score: <b>{score}</b>
                        {score >= 0.4 && <span style={greenScore}>OK</span>}
                        {score < 0.4 && <span style={redScore}>FAIL</span>}
                    </p>
                </div>
            </div>

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

// pull data from markdown folder using graphql
export const query = graphql`
query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          average_price
          free_users
          subscriptions
          title
          users_count
        }
      }
    }
  }
`;