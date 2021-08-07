import React, { Fragment } from "react";
import Launch from "./Launch/Launch";

import styles from "./Launches.module.css";

const Launches = (props) => {
  return (
    <Fragment>
      <div className={styles.Launches}>
        {props.launches ? (
          props.launches.map((launch) => (
            <Launch
              details={launch.details}
              name={launch.name}
              date={launch.date_utc}
              patch={launch.links.patch.large}
              success={launch.success}
              key={launch.id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {props.launches.length === props.total ? (
        <p className={styles.AllLaunchesLoaded}>All launches loaded</p>
      ) : undefined}
    </Fragment>
  );
};

export default Launches;
