import moment from "moment";

const featured = [
    {
        title: "Software Engineer salary in 2020",
        date: moment().format('MMMM DD, YYYY'),
        categories: ["Tech Culture"],
        link: "#",
        image: "salary.jpeg"
    },
    {
        title: "GraphQl vs REST",
        date: moment().format('MMMM DD, YYYY'),
        categories: ["React", "JavaScript"],
        link: "#",
        image: "graph_vs_rest.png"
    },
    {
        title: "A day in a life of a programmer",
        date: moment().format('MMMM DD, YYYY'),
        categories: ["Tech Culture"],
        link: "#",
        image: "programmer_life.jpg"
    },
    {
        title: "Brain hacks for learning to program",
        date: moment().format('MMMM DD, YYYY'),
        categories: ["Brain Health"],
        link: "#",
        image: "brain_health.png"
    },
]

export default featured;