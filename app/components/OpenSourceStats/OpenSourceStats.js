import React, { useEffect, useState } from 'react';

const OpenSourceStats = ({ projectName }) => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        // Fetch contributors data from Middleware HQ API
        const fetchContributors = async () => {
            try {
                const response = await fetch(`https://api.middlewarehq.com/contributors/${projectName}`);
                const data = await response.json();
                setContributors(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchContributors();
    }, [projectName]);

    return (
        <div>
            <h2>{projectName}</h2>
            <ul>
                {contributors.map((contributor) => (
                    <li key={contributor.id}>
                        <img src={contributor.avatarUrl} alt={contributor.username} />
                        <span>{contributor.username}</span>
                        <span>Contributions: {contributor.contributions}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Usage example
// const App = () => {
//     return (
//         <div>
//             <OpenSourceStats projectName="this project" />
//             <OpenSourceStats projectName="EmbeddedChat" />
//             <OpenSourceStats projectName="RC4Community" />
//             <OpenSourceStats projectName="RC4Conferences" />
//             <OpenSourceStats projectName="Github App" />
//             <OpenSourceStats projectName="Poll App" />
//             <OpenSourceStats projectName="App construction Demo App" />
//         </div>
//     );
// };
