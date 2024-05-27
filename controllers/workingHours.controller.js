export const workingHours = (req, res, next) => {

    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {

        next();

    } else {

        res.render("closed");
    };
};