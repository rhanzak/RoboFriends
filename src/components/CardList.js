import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    // How to error out the view and get ErrorBoundary to display on the user side.
    // if (true) {
    //     throw new Error('Nooooo!');
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;