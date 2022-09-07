import React, { useState, useEffect } from "react";
import Repository from "../Repository/Repository";

export default function Body() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/DouglasVolcato/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepositories([...data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="Body">
      {repositories === [] ? (
        <p>Loading...</p>
      ) : (
        repositories.map((repo) => <Repository repo={repo} />)
      )}
    </div>
  );
}
