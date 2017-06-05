import Home from '../models/home';

export const index = (req, res, next) => {

    // Find all movies and return json response
    Home.find().lean().exec((err, homes) => res.json(
        // Iterate through each homes
        { homes: homes.map(home => ({
            ...home,
        }))}
    ));

};
